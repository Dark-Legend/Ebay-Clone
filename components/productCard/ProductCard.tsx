import { addCartItem, currentUseCartItem } from "@/datafetch/cart/query";
import { storeEmail } from "@/store/storeCart/store";
import { Button, Card } from "@radix-ui/themes";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

interface ProductProps {
  title: string;
  img: string;
  id: number;
  description: string;
  price: number;
}

interface PayloadType {
  productId: number;
  img: string;
  price: number;
  title: string;
}

const ProductCard = (props: ProductProps) => {
  const { id, img, title, price } = props;
  const addItemToCart = addCartItem();
  const email = storeEmail((state) => state.email);

  const { data, refetch: fetchCurrentCartItems } = currentUseCartItem(email);
  console.log(email, "EMAIL");
  const itemAddedNotify = () => toast.success("Item Added To Cart");

  const handleAddCart = () => {
    const payload = {
      productId: id,
      img: img,
      price: price,
      title: title,
    };
    const notify = () => toast.error("Login Required !");
    if (!email?.length || email === undefined) {
      notify();
    }
    if (email?.length > 0 || email !== undefined) {
      addItemToCart.mutate(payload, {
        onSuccess: () => {
          fetchCurrentCartItems();
          itemAddedNotify();
        },
        onError: (err) => {
          // console.log(err);
        },
      });
    }
  };
  return (
    <div className="mt-5">
      <Link href={`/product/${id}`}>
        <Card
          variant="classic"
          style={{ width: 220 }}
          className="hover:cursor-pointer"
        >
          <div className="p-[10px] flex flex-col gap-1 max-w-[200px] rounded h-52 justify-center item-start">
            <div className="max-w-[180px] max-h-[150px] flex justify-center items-center">
              <img src={img} alt="product image" className="w-full h-full" />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-black">{title}</p>
            <p className="text-black font-semibold">&#8377; {price}</p>
          </div>
        </Card>
      </Link>
      <div className="mx-auto mt-2 text-center">
        <Button
          size="2"
          color="blue"
          className="hover:cursor-pointer"
          onClick={handleAddCart}
        >
          Add to Cart
        </Button>
      </div>
      <Toaster />
    </div>
  );
};

export default ProductCard;
