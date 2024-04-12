import { error } from "console";

export async function getHouses() {
  try {
    const res = await fetch(
      `${process.env.KINGDOM_PUBLIC_URL}/houses?populate=*`
    );
    return res.json();
  } catch (e) {
    throw error(e);
  }
}
