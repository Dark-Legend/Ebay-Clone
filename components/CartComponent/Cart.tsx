import { Button, Card } from "@radix-ui/themes";
import CartCard from "../cartCard/CartCard";
import { Loader } from "../loader/Loader";

interface ValTypes {
  emailUser: string;
  img: string;
  price: number;
  productId: number;
  title: string;
}

export const Cart = ({
  isLoading,
  data,
  handlePayment,
  refetch,
  totalPrice,
}) => {
  if (isLoading) {
    return (
      <div className="w-full h-[50vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (!data?.cartItem?.length) {
    return (
      <div className="w-full h-[50vh] flex justify-center items-center">
        <p className="font-medium text-lg">Opps Cart is Empty !</p>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-lg font-bold mt-5">Shopping cart</h1>
      <section className="w-full flex justify-start items-center gap-3">
        <div className="w-[70%] flex justify-center flex-col gap-2 mt-5">
          {data?.cartItem?.map((val: ValTypes) => (
            <CartCard refetchCart={refetch} data={val} />
          ))}
        </div>
        <div className="w-[30%] ">
          <Card style={{ width: "100%", padding: "10px" }}>
            <section>
              <Button
                style={{ width: "100%", height: "40px" }}
                radius="large"
                color="cyan"
                onClick={() => handlePayment()}
              >
                Go to checkout
              </Button>
              <section className="flex justify-between items-center mt-2.5">
                <div className="flex flex-col justify-center items-start">
                  <p>Items ({data?.cartItem?.length})</p>
                  <p>Shipping:</p>
                </div>
                <div className="flex flex-col justify-center items-start">
                  <p>&#8377; {totalPrice}</p>
                  <p>Free</p>
                </div>
              </section>
              <section className="border-t border-solid border-gray-200 mt-2.5 p-2.5 flex justify-between items-center">
                <p className="font-bold text-lg">Subtotal</p>
                <p className="font-bold text-lg">&#8377; {totalPrice}</p>
              </section>
            </section>
          </Card>
        </div>
      </section>
    </>
  );
};
