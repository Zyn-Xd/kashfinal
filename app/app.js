import { connectDB } from "./db.js";

async function getUsers() {
  const db = await connectDB();

  const users = await db.collection("users").find().toArray();

  console.log(users);
}

getUsers();
