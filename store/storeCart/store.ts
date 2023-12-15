import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const storeEmail = create(
  devtools((set) => ({
    email: "",
    addEmail: (email) => set(() => ({ email: email })),
  }))
);
