import { error } from "console";

export async function getSlides() {
  try {
    const res = await fetch(
      `http://95.163.228.113:1337/api/gallery-items?populate=*`
    );
    return res.json();
  } catch (e) {
    throw error(e);
  }
}
