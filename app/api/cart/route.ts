import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { title, price, img, productId, email } = await req.json();
  try {
    const userCartItem = await prisma.user.findUnique({
      where: {
        email: email,
      },
      include: {
        cartItem: true,
      },
    });

    const cartItemExist = userCartItem?.cartItem
      ?.map((data) => data?.productId)
      .includes(productId);

    // If the item already exist on users cart
    if (cartItemExist) {
      return NextResponse.json(
        { message: "Item already exist" },
        { status: 400 }
      );
    }

    // error messages for some item is missing

    if (!title) {
      return NextResponse.json(
        { messgae: "Title is missing" },
        { status: 400 }
      );
    }
    if (!img) {
      return NextResponse.json(
        { messgae: "ImageUrl is missing" },
        { status: 400 }
      );
    }
    if (!price) {
      return NextResponse.json(
        { messgae: "Product Price is missing" },
        { status: 400 }
      );
    }

    if (!productId) {
      return NextResponse.json(
        { messgae: "Product Id is missing" },
        { status: 400 }
      );
    }

    // addtion of product into the cart
    if (title && price && img && productId) {
      const cartItem = await prisma.cartItems.create({
        data: {
          title: title,
          price: price,
          img: img,
          productId: productId,
          userEmail: {
            connect: {
              email: email,
            },
          },
        },
      });
      return NextResponse.json({ cartItem });
    }
  } catch (error) {
    return NextResponse.json({ mesage: error }, { status: 502 });
  }
}
