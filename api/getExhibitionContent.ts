import { error } from "console";

export async function getExhibitionContent() {
  try {
    const res = await fetch(
      `${process.env.KINGDOM_PUBLIC_URL}/exhibition?populate=*`
    );
    return res.json();
  } catch (e) {
    throw error(e);
  }
}
