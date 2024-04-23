import IncludedItem from "@/components/IncludedItem/IncludedItem";
import style from "./Included.module.scss";
import { IncludedProps } from "./Included.props";
import cn from "classnames";
import { getIncludedItems } from "@/api/getIncludedItems";
import { iIncludedItem } from "@/interfaces/IncludedItem.interface";

export default async function Included({}: IncludedProps) {
  const { data } = await getIncludedItems();

  return (
    <div className={style.included}>
      <h2
        className={cn("block-title", style.included__title)}
      >
        Включено в стоимость:
      </h2>
      <div className={style.included__items}>
        {data &&
          data.map((item: iIncludedItem) => (
            <IncludedItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}
