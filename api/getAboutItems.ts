import { error } from "console";

export async function getAboutItems() {
  try {
    const res = await fetch(`http://95.163.228.113:1337/api/about-items`);
    return res.json();
  } catch (e) {
    throw error(e);
  }
}
