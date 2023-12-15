import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
  const result = await prisma.products.findMany({
    take: 4,
  });
  try {
    if (result) {
      return NextResponse.json({ result: result });
    }
  } catch (err) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
