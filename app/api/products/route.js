import { mockProducts } from "../../../utils/productsData";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ products: mockProducts });
}
