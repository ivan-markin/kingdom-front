import { error } from "console";

export async function getAboutItems() {
  try {
    const res = await fetch(`${process.env.KINGDOM_PUBLIC_URL}/about-items`);
    return res.json();
  } catch (e) {
    throw error(e);
  }
}
