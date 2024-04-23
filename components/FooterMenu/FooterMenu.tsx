import { getMenuItems } from "@/api/getMenuItems";
import style from "./FooterMenu.module.scss";
import { FooterMenuProps } from "./FooterMenu.props";
import { iMenuItem } from "@/interfaces/MenuItem.interface";
import Link from "next/link";
import cn from "classnames";

export default async function FooterMenu({}: FooterMenuProps) {
  const { data } = await getMenuItems();

  return (
    <ul className={style.footerMenu}>
      {data &&
        data.map((item: iMenuItem) => (
          <li
            key={item.id}
            className={cn("regular-text", style.footerMenu__item)}
          >
            <Link href={item.attributes.link}>{item.attributes.name}</Link>
          </li>
        ))}
    </ul>
  );
}
