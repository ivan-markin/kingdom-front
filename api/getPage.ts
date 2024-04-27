import { iHouse } from "@/interfaces/House.interface";
import { error } from "console";

export async function getPage(alias: string): Promise<{ data: iHouse } | null> {
  const res = await fetch(`http://95.163.228.113:1337/api/houses/${alias}`);

  if (!res.ok) {
    return null;
  }

  return res.json();
}
