import { create } from "zustand";
import { devtools } from "zustand/middleware";

type State = {
  email: string;
};

type Action = {
  addEmail: (email: State["email"]) => void;
};

export const storeEmail = create(
  devtools<State & Action>((set) => ({
    email: "",
    addEmail: (email) => set(() => ({ email: email })),
  }))
);
