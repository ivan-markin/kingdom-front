import Image from "next/image";
import style from "./SliderButton.module.scss";
import { SliderButtonProps } from "./SliderButton.props";
import cn from "classnames";

export default function SliderButton({
  type,
  isDisabled = false,
  onClick,
}: SliderButtonProps) {
  return (
    <button
      className={style.sliderButton}
      disabled={isDisabled}
      onClick={onClick}
    >
      <Image
        className={cn(style.sliderButton__arrow, {
          [style.sliderButton__arrow_prev]: type === "prev",
          [style.sliderButton__arrow_next]: type === "next",
        })}
        src={"/slide-button-arrow.svg"}
        width={20}
        height={20}
        alt=""
      />
    </button>
  );
}
