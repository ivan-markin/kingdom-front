import style from "./AboutParams.module.scss";
import { AboutParamsProps } from "./AboutParams.props";
import { Bebas_Neue } from "next/font/google";
import cn from "classnames";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const aboutParams = [
  {
    id: 0,
    value: "3 700 M²",
    description: "Площадь производства",
  },
  {
    id: 1,
    value: ">85",
    description: "Домов производим в год",
  },
  {
    id: 2,
    value: "130",
    description: "Сотрудников в штате",
  },
];

export default function AboutParams({}: AboutParamsProps) {
  return (
    <div className={style.aboutParams}>
      <div className={style.aboutParams__content}>
        {aboutParams.map((param) => (
          <div
            key={param.id}
            className={style.aboutParams__item}
          >
            <span
              className={cn(
                bebas.className,
                style.aboutParams__itemValue
              )}
            >
              {param.value}
            </span>
            <span
              className={cn(
                "small-text",
                style.aboutParams__itemDescription
              )}
            >
              {param.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
