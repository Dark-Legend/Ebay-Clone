"use client";

import { fetchAllProducts } from "@/datafetch/products/query";
import ProductCard from "../productCard/ProductCard";
import { Box } from "@radix-ui/themes";
import { useEffect } from "react";
import { Loader } from "../loader/Loader";

interface ImageProps {
  title: string;
  img: string;
  price: number;
  description: string;
  id: number;
}

const Products = () => {
  const { data, isLoading } = fetchAllProducts();

  if (isLoading) {
    return (
      <div className="w-full h-[50vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (!data?.products?.length) {
    return (
      <div className="w-full h-[50vh] flex justify-center items-center">
        <p className="font-medium text-lg">No Result Found !</p>
      </div>
    );
  }
  return (
    <Box className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 mg:grid-cols-2 sm:grid-cols-2 justify-center items-center gap-3 mt-6 mb-6">
      {data?.products?.map((val: ImageProps) => {
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
    </Box>
  );
};

export default Products;
