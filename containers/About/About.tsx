import AboutSlider from "@/components/AboutSlider/AboutSlider";
import style from "./About.module.scss";
import { AboutProps } from "./About.props";
import Image from "next/image";
import { getAboutItems } from "@/api/getAboutItems";

export default async function About({id}: AboutProps) {
  const { data } = await getAboutItems();

  return (
    <div className={style.about} id={id}>
      <div className={style.about__logo}>
        <Image
          src={"/kingdom-logo-large.svg"}
          width={117}
          height={240}
          alt=""
        />
      </div>
      <div className={style.about__slider}>
        <AboutSlider items={data} />
      </div>
    </div>
  );
}
