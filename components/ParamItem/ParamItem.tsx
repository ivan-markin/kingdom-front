import Image from "next/image";
import style from "./ParamItem.module.scss";
import { ParamItemProps } from "./ParamItem.props";
import cn from "classnames";

export default function ParamItem({
  item,
}: ParamItemProps) {
  return (
    <div className={style.paramItem}>
      <Image
        src={
          "http://localhost:1337" +
          item.attributes.image.data.attributes.url
        }
        width={158}
        height={173}
        alt=""
      />
      <span
        className={cn(
          "regular-text",
          style.paramItem__description
        )}
      >
        {item.attributes.shortDescription}

        <Image
          className={style.paramItem__infoIcon}
          src={"/info-icon.svg"}
          width={20}
          height={20}
          alt=""
        />
      </span>
    </div>
  );
}
