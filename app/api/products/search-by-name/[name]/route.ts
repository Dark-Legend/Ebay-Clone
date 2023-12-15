import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }) {
  const { name } = params;

  const searchedProduct = await prisma.products.findMany({
    where: {
      title: {
        contains: name,
        mode: "insensitive",
      },
    },
  });
  try {
    if (!searchedProduct?.length) {
      return NextResponse.json(
        { message: "No Product Found" },
        { status: 404 }
      );
    } else {
      return NextResponse.json({ result: searchedProduct }, { status: 200 });
    }
  } catch (err) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
