import { error } from "console";

export async function getStageItems() {
  try {
    const res = await fetch(
      `http://95.163.228.113:1337/api/stage-items?populate=*`
    );
    return res.json();
  } catch (e) {
    throw error(e);
  }
}
