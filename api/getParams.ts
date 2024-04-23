import { error } from "console";

export async function getParams() {
  try {
    const res = await fetch(
      `${process.env.KINGDOM_PUBLIC_URL}/houses-params?populate=*`
    );
    return res.json();
  } catch (e) {
    throw error(e);
  }
}
