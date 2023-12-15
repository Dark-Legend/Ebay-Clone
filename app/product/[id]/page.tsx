"use client";

import { Loader } from "@/components/loader/Loader";
import MoreProducts from "@/components/productCard/MoreProducts";
import { addCartItem } from "@/datafetch/cart/query";
import { getProductsById } from "@/datafetch/getParticularProduct/query";
import { storeEmail } from "@/store/storeCart/store";
import { Button } from "@radix-ui/themes";
import toast, { Toaster } from "react-hot-toast";

interface ParamsTypes {
  params: {
    id: number;
  };
}

const page = ({ params }: ParamsTypes) => {
  const { id } = params;
  const email = storeEmail((state) => state.email);
  const { data, isLoading } = getProductsById(id);
  const addItemToCart = addCartItem();

  const handleAddToCart = () => {
    const payload = {
      productId: id,
      img: data?.result?.img,
      price: data?.result?.price,
      title: data?.result?.title,
    };

    const notify = () => toast.error("Login Required !");
    if (!email) {
      notify();
    }
    if (email) {
      addItemToCart.mutate(payload);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full h-[50vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (!data?.result) {
    return (
      <div className="w-full h-[50vh] flex justify-center items-center">
        <p className="font-medium text-lg">No Result Found !</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="flex items-center gap-2 w-full mt-7 max-h-[500px] border-b border-solid border-gray-300 pb-5">
        <div className="w-1/3 h-[350px] flex justify-center items-center">
          <img
            src={data?.result?.img}
            // width={400}
            // height={600}
            // className="w-[400px] h-[350px]"
          />
        </div>
        <div className="flex flex-col items-center justify-start h-full w-full">
          <div className="flex justify-start items-start flex-col gap-2 border-b border-solid border-gray-300 w-full">
            <p className="font-bold text-lg">{data?.result?.title}</p>
            <p className="font-normal text-xs mb-2">
              Brand New - Full Warranty
            </p>
          </div>
          <div className="flex justify-start items-start flex-col gap-2 border-b border-solid border-gray-300 w-full py-4">
            <p className="font-light">
              Condition: <span className="font-bold ml-2">New</span>
            </p>
          </div>
          <div className="flex justify-between items-center gap-2 border-b border-solid border-gray-300 w-full py-5">
            <p className="font-light">
              Price:{" "}
              <span className="font-bold ml-2">
                &#8377; {data?.result?.price}
              </span>
            </p>
            <div className="mr-4">
              <Button
                style={{ width: 200 }}
                size="3"
                color="blue"
                className="hover:cursor-pointer"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </div>
          </div>
          <div className="flex justify-start items-start flex-col gap-2 w-full py-4">
            <p className="font-light">Description:</p>
            <p className="text-black text-sm">{data?.result?.description}</p>
          </div>
        </div>
      </div>
      <MoreProducts />
      <Toaster />
    </div>
  );
};

export default page;
