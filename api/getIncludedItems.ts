import { error } from "console";

export async function getIncludedItems() {
  try {
    const res = await fetch(
      `${process.env.KINGDOM_PUBLIC_URL}/included-items?populate=*`
    );
    return res.json();
  } catch (e) {
    throw error(e);
  }
}
