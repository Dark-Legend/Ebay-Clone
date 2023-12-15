import {
  useMutation,
  useQuery,
  UseMutationOptions,
} from "@tanstack/react-query";

type RemoveItemPayloadType = {
  productId: number;
  email: string;
};

export const currentUseCartItem = (email: string | undefined | null) => {
  return useQuery({
    queryKey: ["currentUserItems", email],
    queryFn: async () => {
      const obj = {
        email: email,
      };

      const response = await fetch("/api/getCartItem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      const result = await response.json();

      return result;
    },
  });
};

interface PayloadType {
  title: string;
  price: number;
  img: string;
  productId: number;
}

export const addCartItem = () => {
  const data = useMutation({
    // mutationKey: ["addItemToCart"],
    mutationFn: async (payload: PayloadType) => {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      return result;
    },
  });
  return data;
};

export const removeFromCart = () => {
  return useMutation({
    mutationFn: async (payload: RemoveItemPayloadType) => {
      const res = await fetch("api/removeItem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      return result;
    },
  });
};
