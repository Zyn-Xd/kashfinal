/**
 * Mock products data for KASHflow.
 * Replace with real DB queries via connectDB() when ready.
 */
export const mockProducts = [
  {
    id: "1",
    name: "KASHflow Basic",
    description: "Personal finance management for individuals.",
    price: 0,
    currency: "USD",
    billingCycle: "monthly",
    features: ["Budget tracking", "Transaction history", "1 bank account"],
    badge: "Free",
  },
  {
    id: "2",
    name: "KASHflow Pro",
    description: "Advanced tools for serious savers and investors.",
    price: 9.99,
    currency: "USD",
    billingCycle: "monthly",
    features: [
      "Everything in Basic",
      "Unlimited bank accounts",
      "Multi-currency support",
      "Analytics dashboard",
      "Priority support",
    ],
    badge: "Popular",
  },
  {
    id: "3",
    name: "KASHflow Business",
    description: "Full-featured finance suite for teams and businesses.",
    price: 29.99,
    currency: "USD",
    billingCycle: "monthly",
    features: [
      "Everything in Pro",
      "Team accounts",
      "Role-based access",
      "API access",
      "Dedicated account manager",
    ],
    badge: "Enterprise",
  },
];
