import { error } from "console";

export async function getParams() {
  try {
    const res = await fetch(
      `http://95.163.228.113:1337/api/houses-params?populate=*`
    );
    return res.json();
  } catch (e) {
    throw error(e);
  }
}
