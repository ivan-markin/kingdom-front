"use client";

import { useState } from "react";
import FaqItem from "../FaqItem/FaqItem";
import style from "./FaqList.module.scss";
import { FaqListProps } from "./FaqList.props";

export default function FaqList({ items }: FaqListProps) {
  const [openIndex, setOpenIndex] = useState<number>(1);

  return (
    <div className={style.faqList}>
      {items.map((item) => (
        <FaqItem
          key={item.id}
          item={item}
          isOpen={openIndex === item.id}
          onClick={() => setOpenIndex(item.id)}
        />
      ))}
    </div>
  );
}
