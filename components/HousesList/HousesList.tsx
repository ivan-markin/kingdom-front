"use client";

import Link from "next/link";
import style from "./HousesList.module.scss";
import { HousesListProps } from "./HousesList.props";

export default function HousesList({ houses }: HousesListProps) {
  return (
    <div className={style.housesList}>
      {houses &&
        houses.map((item) => (
          <Link
            key={item.id}
            href={`houses/${item.id}`}
            className={style.houseItem}
            style={{
              backgroundImage: `url('http://localhost:1337${item.attributes.cover.data.attributes.url}')`,
            }}
          >
            <h3 className={style.title}>{item.attributes.title}</h3>
            <span className={style.price}>{item.attributes.price} ₽</span>
          </Link>
        ))}
    </div>
  );
}
