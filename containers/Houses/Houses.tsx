import { getHouses } from "@/api/getHouses";
import style from "./Houses.module.scss";
import { HousesProps } from "./Houses.props";
import { iHouse } from "@/interfaces/House.interface";
import HouseItem from "@/components/HouseItem/HouseItem";
import cn from "classnames";

export default async function Houses({ id }: HousesProps) {
  const { data } = await getHouses();

  return (
    <div className={cn(style.houses, "houses-list")} id={id}>
      {data &&
        data.map((item: iHouse) => <HouseItem key={item.id} item={item} />)}
    </div>
  );
}
