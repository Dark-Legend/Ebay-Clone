import { useMutation } from "@tanstack/react-query"

export const addToCart = () => {
    return useMutation(async (payload) =>{
        const res = await fetch("/api/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const result = await res.json();
  return result;
    })
}