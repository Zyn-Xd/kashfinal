import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/posts?_limit=10`,
      { next: { revalidate: 60 } } // Cache for 60 seconds
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch posts" },
        { status: res.status }
      );
    }

    const posts = await res.json();
    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Posts API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
