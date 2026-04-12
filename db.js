import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable in .env.local"
  );
}

// Reuse the client across hot-reloads in development (Next.js best practice)
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // In development, use a global variable so the MongoClient is not
  // recreated on every hot-reload
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  const client = new MongoClient(uri);
  clientPromise = client.connect();
}

export async function connectDB(dbName = "kashflow") {
  try {
    const connectedClient = await clientPromise;
    return connectedClient.db(dbName);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

export default clientPromise;
