import { error } from "console";

export async function getSlides() {
  try {
    const res = await fetch(
      `${process.env.KINGDOM_PUBLIC_URL}/gallery-items?populate=*`
    );
    return res.json();
  } catch (e) {
    throw error(e);
  }
}
