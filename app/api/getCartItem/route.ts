import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();

  try {
    const currentUserCartItem = await prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        cartItem: true,
      },
    });
    return NextResponse.json(currentUserCartItem);
  } catch (error) {
    return NextResponse.json("Something went wrong");
  }
}
