import { NextResponse } from "next/server";

const services = [
  {
    id: "transfer",
    name: "Transfer",
    description: "Send funds to any account anywhere in the world instantly.",
    icon: "↗",
    available: true,
  },
  {
    id: "convert",
    name: "Convert",
    description: "Convert funds to any currency in real-time at the best rates.",
    icon: "↔",
    available: true,
  },
  {
    id: "electricity",
    name: "Electricity",
    description: "Pay your electricity bills quickly and securely.",
    icon: "⚡",
    available: true,
  },
  {
    id: "airtime",
    name: "Airtime",
    description: "Top up airtime for any network across Nigeria.",
    icon: "📱",
    available: true,
  },
  {
    id: "cable-tv",
    name: "Cable TV",
    description: "Pay for DSTV, GOtv, Startimes and more.",
    icon: "📺",
    available: true,
  },
  {
    id: "internet",
    name: "Internet",
    description: "Buy data bundles for any network provider.",
    icon: "📶",
    available: true,
  },
];

export async function GET() {
  try {
    return NextResponse.json({ data: services });
  } catch (error) {
    console.error("Services API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch services" },
      { status: 500 }
    );
  }
}
