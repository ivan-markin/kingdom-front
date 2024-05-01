import { iHouse } from "@/interfaces/House.interface";
import { error } from "console";

export async function getPage(alias: string): Promise<{ data: iHouse } | null> {
  const res = await fetch(`${process.env.KINGDOM_API_URL}/houses/${alias}`);

  if (!res.ok) {
    return null;
  }

  return res.json();
}
