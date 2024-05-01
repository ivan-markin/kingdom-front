import { error } from "console";

export async function getParams() {
  try {
    const res = await fetch(
      `${process.env.KINGDOM_API_URL}/param-items?populate=*`,
      {
        headers: {
          Authorization: `bearer ${process.env.KINGDOM_API_KEY}`,
        },
        next: { revalidate: 600 },
      }
    );
    return res.json();
  } catch (e) {
    throw error(e);
  }
}
