import { error } from "console";

export async function getFeatures() {
  try {
    const res = await fetch(`https://strapi.dom-king.ru/api/feature-items`, {
      headers: {
        Authorization: `bearer ${process.env.KINGDOM_API_KEY}`,
      },
      next: { revalidate: 600 },
    });
    return res.json();
  } catch (e) {
    throw error(e);
  }
}
