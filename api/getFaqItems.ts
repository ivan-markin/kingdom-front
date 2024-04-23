import { error } from "console";

export async function getFaqItems() {
  try {
    const res = await fetch(`${process.env.KINGDOM_PUBLIC_URL}/faq-items`);
    return res.json();
  } catch (e) {
    throw error(e);
  }
}
