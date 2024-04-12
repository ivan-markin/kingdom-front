import Image from "next/image";
import style from "./page.module.scss";
import HousesList from "@/components/HousesList/HousesList";
import { getHouses } from "@/api/getHouses";
import BlindsText from "@/components/BlindsText/BlindsText";

const heroText = [
  { id: 0, text: "Мы специализируемся" },
  { id: 1, text: "на производстве" },
];

export default async function Home() {
  const { data } = await getHouses();

  return (
    <main className={style.main}>
      <BlindsText text={heroText} />

      <a href="" className={style.link}>
        Все наши дома рассчитаны для круглогодичного проживания и подходят для
        российских морозных зим
      </a>

      <HousesList houses={data} />
    </main>
  );
}
