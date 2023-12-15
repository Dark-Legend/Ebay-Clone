import { useQuery } from "@tanstack/react-query";

export const getProductsById = (id: number) => {
  return useQuery({
    queryKey: ["GetProductById", id],
    queryFn: async () => {
      const res = await fetch(`/api/getProductById/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();
      return result;
    },
  });
};

export const getLimitedProduct = () => {
  return useQuery({
    queryKey: ["limitedProducts"],
    queryFn: async () => {
      const res = await fetch(`/api/getLimitedProducts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();
      return result;
    },
  });
};
