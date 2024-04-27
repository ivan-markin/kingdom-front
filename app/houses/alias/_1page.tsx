import { getHouses } from "@/api/getHouses";
import { getPage } from "@/api/getPage";
import { iHouse } from "@/interfaces/House.interface";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const metadata: Metadata = {
  title: "Дом",
};

export async function generateStaticParams() {
  const houses = await getHouses();
  return houses.data.map((house: iHouse) => ({
    alias: String(house.id),
  }));
}

export default async function HousePage({
  params,
}: {
  params: { alias: string };
}) {
  const data = await getPage(params.alias);

  if (!data) {
    notFound();
  }

  const { data: house } = data;
  const houseData = house.attributes;

  return (
    <div>
      <h1>Дом {houseData.title}</h1>
      <p>
        {houseData.description.map((text) => (
          <span key={text.children[0].text.slice(0, 3)}>
            {text.children[0].text}
          </span>
        ))}
      </p>
    </div>
  );
}
