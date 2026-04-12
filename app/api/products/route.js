import { mockProducts } from "../../../utils/productsData";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // TODO: Replace mockProducts with a real DB query:
    // const db = await connectDB();
    // const products = await db.collection("products").find({}).toArray();

    return NextResponse.json({ products: mockProducts });
  } catch (error) {
    console.error("Products API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
