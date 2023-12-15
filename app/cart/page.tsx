"use client";
import { currentUseCartItem } from "@/datafetch/cart/query";
import { Box } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import { FC } from "react";
import { redirect } from "next/navigation";
import { Cart } from "../../components/CartComponent/Cart";
import toast, { Toaster } from "react-hot-toast";

interface ValTypes {
  emailUser: string;
  img: string;
  price: number;
  productId: number;
  title: string;
}

const page: FC = () => {
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
  return (
    <Box style={{ width: "100%" }}>
      <Cart
        isLoading={isLoading}
        data={data}
        handlePayment={handlePayment}
        refetch={refetch}
        totalPrice={totalPrice}
      />
      <Toaster />
    </Box>
  );
};

export default page;
