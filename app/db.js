import { MongoClient } from "mongodb";

const uri = "";

const client = new MongoClient(uri);

export async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db("your-database-name");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}
