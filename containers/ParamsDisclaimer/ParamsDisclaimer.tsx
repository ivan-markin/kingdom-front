import Image from "next/image";
import style from "./ParamsDisclaimer.module.scss";
import { ParamsDisclaimerProps } from "./ParamsDisclaimer.props";
import image from "@/public/params-disclaimer-img.png";
import cn from "classnames";

export default function ParamsDisclaimer({}: ParamsDisclaimerProps) {
  return (
    <div className={style.section}>
      <Image
        className={style.image}
        src={image}
        alt="Фото печки"
      />
      <div className={style.content}>
        <h2 className={cn("block-title", style.title)}>
          Все наши дома рассчитаны для круглогодичного
          проживания и подходят для российских морозных зим
        </h2>
        <span
          className={cn("regular-text", style.subtitle)}
        >
          В доме будет тепло даже в сорокаградусный мороз.
        </span>
      </div>
    </div>
  );
}
