'use client';

import Image from "next/image";
import style from "./KeyFeatures.module.scss";
import { KeyFeaturesProps } from "./KeyFeatures.props";
import cn from "classnames";
import { useEffect, useRef } from "react";

const items = [
  {
    id: 0,
    title: "Все готово для жизни",
    description: "После установки ваш дом полностью готов к заселению.",
  },
  {
    id: 1,
    title: "Фиксированная стоимость",
    description: "Без изменений цены в процессе производства.",
  },
  {
    id: 2,
    title: "Качественные материалы",
    description:
      "Мы придаем особое внимание выбору материалов для отделки наших домов, фокусируясь на качестве и экологичности.",
  },
];

export default function KeyFeatures({}: KeyFeaturesProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const item = itemRef.current;
    
    const moveImage = (e: MouseEvent) => {
      const root = document.documentElement;
      root.style.setProperty('--key-feature-image-1-left', `${e.x}px`);
      root.style.setProperty('--key-feature-image-1-top', `${e.y}px`);
    }

    if (item !== null) {
      item.addEventListener('mousemove', moveImage);
    }

    return () => item?.removeEventListener('mousemove', moveImage);    
  }, [])
  
  return (
    <div className={style.keyFeatures}>
      {items.map((item, i) => (
        <div className={style.keyFeatures__item} key={item.id} ref={itemRef}>
          {i !== 1 && (
            <Image
              className={style.keyFeatures__itemImage}
              src={`/key-feature-${i + 1}.png`}
              width={355}
              height={216}
              alt=""
              ref={imageRef}
            />
          )}

          <div className={style.keyFeatures__title}>
            <h2 className={cn("block-title")}>{item.title}</h2>
          </div>
          <span className={cn("regular-text", style.keyFeatures__description)}>
            {item.description}
          </span>
        </div>
      ))}
    </div>
  );
}
