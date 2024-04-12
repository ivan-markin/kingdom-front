"use client";

import { useEffect, useRef, useState } from "react";
import style from "./BlindsText.module.scss";
import { BlindsTextProps } from "./BlindsText.props";
import cn from "classnames";

export default function BlindsText({ text }: BlindsTextProps) {
  const [lineShift, setLineShift] = useState<number>(0);

  useEffect(() => {
    const hideLine = () => {
      setLineShift(scrollY / 10);
    };

    window.addEventListener("scroll", hideLine);
    return () => window.removeEventListener("scroll", hideLine);
  }, []);

  return (
    <div
      className={cn(style.blinds, {
        [style.static]: lineShift >= 90,
      })}
    >
      {text.map((line) => (
        <div key={line.id} className={style.blinds__lineCnt}>
          <span
            className={style.blinds__line}
            style={{ transform: `translateY(${lineShift}%)` }}
          >
            {line.text}
          </span>
        </div>
      ))}
    </div>
  );
}
