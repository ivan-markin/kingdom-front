"use client";

import style from "./Checkbox.module.scss";
import { CheckboxProps } from "./Checkbox.props";
import Image from "next/image";
import cn from "classnames";

export default function Checkbox({
  isChecked,
  onChange,
}: CheckboxProps) {
  return (
    <label
      className={cn(style.checkbox, {
        [style.checkbox_active]: isChecked,
      })}
    >
      <input
        className={style.checkbox__input}
        type="checkbox"
        name="checkbox"
        id=""
        onChange={onChange}
      />
      <span
        className={cn(style.checkbox__cnt, {
          [style.checkbox__cnt_active]: isChecked,
        })}
      >
        <Image
          className={cn(style.checkbox__icon, {
            [style.checkbox__icon_active]: isChecked,
          })}
          src={"/checked-icon.svg"}
          width={16}
          height={16}
          alt=""
        />
      </span>
    </label>
  );
}
