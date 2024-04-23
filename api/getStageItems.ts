import { error } from "console";

export async function getStageItems() {
  try {
    const res = await fetch(
      `${process.env.KINGDOM_PUBLIC_URL}/stage-items?populate=*`
    );
    return res.json();
  } catch (e) {
    throw error(e);
  }
}
