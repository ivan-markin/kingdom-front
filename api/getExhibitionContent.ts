import { error } from "console";

export async function getExhibitionContent() {
  try {
    const res = await fetch(
      `http://95.163.228.113:1337/api/exhibition?populate=*`
    );
    return res.json();
  } catch (e) {
    throw error(e);
  }
}
