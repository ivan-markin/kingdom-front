import { menuItems } from "@/components/MainMenu/MainMenu";
import style from "./Footer.module.scss";
import { FooterProps } from "./Footer.props";
import Link from "next/link";
import SocialLink from "@/components/SocialLink/SocialLink";
import Button from "@/components/Button/Button";
import cn from "classnames";
import FooterContacts from "@/components/FooterContacts/FooterContacts";
import FooterMenu from "@/components/FooterMenu/FooterMenu";

export default function Footer({}: FooterProps) {
  return (
    <div className={style.footer}>
      <div className={style.footer__left}>
        <FooterMenu />
      </div>
      <div className={style.footer__right}>
        <div className={style.footer__contacts}>
          <FooterContacts />
        </div>
        <Button>Оставить заявку</Button>
      </div>
    </div>
  );
}
