"use client";
import { getLimitedProduct } from "@/datafetch/getParticularProduct/query";
import ProductCard from "./ProductCard";

interface ImageProps {
  title: string;
  img: string;
  price: number;
  description: string;
  id: number;
}

const MoreProducts = () => {
  const { data: limitedProducts } = getLimitedProduct();
  return (
    <div className="mt-5 flex flex-col">
      <p className="font-bold text-lg">More Products</p>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 mg:grid-cols-2 sm:grid-cols-2  justify-center items-center">
        {limitedProducts?.result &&
          limitedProducts?.result?.map((val: ImageProps) => {
            return (
              <div key={val?.id}>
                <ProductCard
                  title={val?.title}
                  img={val?.img}
                  id={val?.id}
                  description={val?.description}
                  price={val?.price}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MoreProducts;
