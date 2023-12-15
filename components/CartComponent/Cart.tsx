"use client";

import { Button, Card } from "@radix-ui/themes";
import CartCard from "../cartCard/CartCard";
import { Loader } from "../loader/Loader";
import { useSession } from "next-auth/react";
import { currentUseCartItem } from "@/datafetch/cart/query";
import toast, { Toaster } from "react-hot-toast";

interface ValTypes {
  emailUser: string;
  img: string;
  price: number;
  productId: number;
  title: string;
}

export const Cart = () => {
  const { data: session } = useSession();
  const email = session?.user?.email;
  const { data, refetch, isLoading } = currentUseCartItem(email);
  const notify = () => toast.success("Order Placed");
  const totalPrice = data?.cartItem
    ?.map((val: ValTypes) => val?.price)
    ?.reduce(
      (accumulator: number, currentValue: number) => accumulator + currentValue,
      0
    );

  const handlePayment = async () => {
    const initializeRazorpay = () => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";

        script.onload = () => {
          resolve(true);
        };
        script.onerror = () => {
          resolve(false);
        };

        document.body.appendChild(script);
      });
    };

    const response = await initializeRazorpay();

    if (!response) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    const data = await fetch("/api/razorpay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        totalAmount: totalPrice,
      }),
    });
    const res = await data.json();

    const options = {
      key: process.env.RAZORPAY_KEY,
      name: session?.user?.name,
      currency: res?.currency,
      amount: res?.amount,
      order_id: res?.id,
      description: "Thank for ordering",
      image:
        "https://imgs.search.brave.com/U1DZo-9_ZFNmg8H4swI29vxLM5Kglv44KJTf8b94GII/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmlt/Z2ZsaXAuY29tLzIv/M2E2dnV5LmpwZw",
      handler: function (response) {
        // alert(`Razorpay Response ${response?.razorpay_payment_id}`);
        if (response?.razorpay_payment_id?.length > 0) {
          notify();
        }
      },
      prefill: {
        name: session?.user?.name,
        email: session?.user?.email,
        contact: "8374628901",
      },
    };

    // window.Razorpay = Razorpay;

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  if (isLoading) {
    return (
      <div className="w-full h-[50vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (!data?.cartItem?.length) {
    return (
      <div className="w-full h-[50vh] flex justify-center items-center">
        <p className="font-medium text-lg">Opps Cart is Empty !</p>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-lg font-bold mt-5">Shopping cart</h1>
      <section className="w-full flex justify-start items-center gap-3">
        <div className="w-[70%] flex justify-center flex-col gap-2 mt-5">
          {data?.cartItem?.map((val: ValTypes) => (
            <CartCard key={val?.productId} refetchCart={refetch} data={val} />
          ))}
        </div>
        <div className="w-[30%] ">
          <Card style={{ width: "100%", padding: "10px" }}>
            <section>
              <Button
                style={{ width: "100%", height: "40px" }}
                radius="large"
                color="cyan"
                onClick={() => handlePayment()}
              >
                Go to checkout
              </Button>
              <section className="flex justify-between items-center mt-2.5">
                <div className="flex flex-col justify-center items-start">
                  <p>Items ({data?.cartItem?.length})</p>
                  <p>Shipping:</p>
                </div>
                <div className="flex flex-col justify-center items-start">
                  <p>&#8377; {totalPrice}</p>
                  <p>Free</p>
                </div>
              </section>
              <section className="border-t border-solid border-gray-200 mt-2.5 p-2.5 flex justify-between items-center">
                <p className="font-bold text-lg">Subtotal</p>
                <p className="font-bold text-lg">&#8377; {totalPrice}</p>
              </section>
            </section>
          </Card>
        </div>
      </section>
      <Toaster />
    </>
  );
};
