import { useQuery } from "@tanstack/react-query";

export const fetchAllProducts = () => {
  return useQuery({
    queryKey: ["AllProducts"],
    queryFn: async () => {
      //   try {
      const response = await fetch("/api/products", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();

      return result;
    },
  });
};

export const fetchProductBySearch = (name) => {
  return useQuery({
    queryKey: ["searchProduct", name],
    queryFn: async () => {
      if (name) {
        const response = await fetch(`/api/products/search-by-name/${name}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();

        return result;
      }
    },
  });
};
