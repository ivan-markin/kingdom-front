import style from "./KeyFeatures.module.scss";
import { KeyFeaturesProps } from "./KeyFeatures.props";
import cn from "classnames";

const items = [
  {
    id: 0,
    title: "Все готово для жизни",
    description:
      "После установки ваш дом полностью готов к заселению.",
  },
  {
    id: 1,
    title: "Фиксированная стоимость",
    description:
      "Без изменений цены в процессе производства.",
  },
  {
    id: 2,
    title: "Качественные материалы",
    description:
      "Мы придаем особое внимание выбору материалов для отделки наших домов, фокусируясь на качестве и экологичности.",
  },
];

export default function KeyFeatures({}: KeyFeaturesProps) {
  return (
    <div className={style.keyFeatures}>
      {items.map((item) => (
        <div
          className={style.keyFeatures__item}
          key={item.id}
        >
          <div className={style.keyFeatures__title}>
            <h2 className={cn("block-title")}>
              {item.title}
            </h2>
          </div>
          <span
            className={cn(
              "regular-text",
              style.keyFeatures__description
            )}
          >
            {item.description}
          </span>
        </div>
      ))}
    </div>
  );
}
