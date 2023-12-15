import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { productId, email } = await req.json();

  try {
    if (!productId) {
      return NextResponse.json(
        { message: "ProductId is missing" },
        { status: 400 }
      );
    } else {
      const removedCartData = await prisma.cartItems.delete({
        where: {
          productId: productId,
          emailUser: email,
        },
      });
      return NextResponse.json(removedCartData);
    }
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
