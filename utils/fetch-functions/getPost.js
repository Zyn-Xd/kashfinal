export async function getPosts() {
  try {
    const res = await fetch(`http://localhost:3000/api/services`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
