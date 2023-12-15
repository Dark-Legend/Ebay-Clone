import { Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { removeFromCart } from "@/datafetch/cart/query";
import { storeEmail } from "@/store/storeCart/store";
import toast, { Toaster } from "react-hot-toast";

const CartCard = ({ data, refetchCart }) => {
  const removeCartItem = removeFromCart();
  const email = storeEmail((state) => state.email);
  const notify = () => toast.success("Item Removed From Cart");
  const handleRemoveItem = () => {
    const payload = {
      productId: data?.productId,
      email: email,
    };

    removeCartItem.mutate(payload, {
      onSuccess: () => {
        refetchCart();
        notify();
      },
    });
  };
  return (
    <Card style={{ width: "100%", padding: "8px" }}>
      <Flex gap="3" align="start" justify="start">
        <Image src={data?.img} alt="Bold typography" width={200} height={200} />
        <Box style={{ width: "100%" }}>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Text
              as="div"
              size="2"
              weight="bold"
              style={{ textDecoration: "underline" }}
            >
              {data?.title}
            </Text>
            <Text as="div" size="2" weight="bold">
              &#8377; {data?.price}
            </Text>
          </Box>
          <Box>
            <Text
              as="div"
              size="2"
              weight="medium"
              style={{ marginTop: "20px" }}
            >
              New
            </Text>
            <Text
              as="div"
              size="2"
              weight="regular"
              style={{ marginTop: "20px" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates reprehenderit in, saepe totam suscipit aliquid quam rem
              cum quos mollitia, repellendus illum?
            </Text>
          </Box>
          <Box style={{ textAlign: "right" }}>
            <Button
              size="2"
              style={{
                marginTop: "20px",
                textDecoration: "underline",
                cursor: "pointer",
                color: "#007491ef",
                backgroundColor: "transparent",
              }}
              onClick={handleRemoveItem}
            >
              Remove
            </Button>
          </Box>
        </Box>
      </Flex>
      <Toaster />
    </Card>
  );
};

export default CartCard;
