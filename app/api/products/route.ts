import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
  const allProducts = await prisma.products.findMany();

  if (!allProducts) {
    return NextResponse.json({ message: "No Products Found" });
  } else {
    return NextResponse.json({ products: allProducts });
  }
}
