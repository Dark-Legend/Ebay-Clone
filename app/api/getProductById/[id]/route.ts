import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

interface ParamType {
  params: {
    id: number;
  };
}
export async function GET(req: Request, { params }: ParamType) {
  const id = Number(params.id);
  try {
    if (id) {
      const getProductDetails = await prisma.products.findUnique({
        where: {
          id: id,
        },
      });
      return NextResponse.json({ result: getProductDetails });
    }
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
