import Image from "next/image";
import style from "./IncludedItem.module.scss";
import { IncludedItemProps } from "./IncludedItem.props";
import cn from "classnames";

export default function IncludedItem({
  item,
}: IncludedItemProps) {
  return (
    <div className={style.includedItem}>
      <Image
        className={style.includedItem__image}
        src={
          "http://localhost:1337" +
          item.attributes.icon.data.attributes.url
        }
        height={105}
        width={142}
        quality={100}
        alt=""
      />
      <span
        className={cn(
          "regular-text",
          style.includedItem__description
        )}
      >
        {item.attributes.description}
      </span>
    </div>
  );
}
