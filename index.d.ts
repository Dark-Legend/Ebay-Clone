import Razorpay from "razorpay";

export {};

declare global {
  interface Window {
    Razorpay: Razorpay;
  }
}
