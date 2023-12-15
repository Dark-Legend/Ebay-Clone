import Razorpay from "razorpay";

export {};

type WindowKey = {
  Razorpay: unknown;
};

declare global {
  interface Window<WindowKey> {
    Razorpay: Razorpay;
  }
}
