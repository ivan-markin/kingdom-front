import style from "./Button.module.scss";
import { ButtonProps } from "./Button.props";
import { Geologica } from "next/font/google";
import cn from "classnames";

const geologica = Geologica({ subsets: ["cyrillic"] });

export default function Button({
  children,
  appearance,
  className,
}: ButtonProps) {
  return (
    <button
      className={cn(
        style.button,
        {
          [style.button_light]: appearance === "light",
          [style.button_outline]: appearance === "outline",
        },
        geologica.className,
        className
      )}
    >
      {children}
    </button>
  );
}
