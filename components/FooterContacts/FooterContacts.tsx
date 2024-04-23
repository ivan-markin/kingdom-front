import { getContacts } from "@/api/getContacts";
import SocialLink from "../SocialLink/SocialLink";
import style from "./FooterContacts.module.scss";
import { FooterContactsProps } from "./FooterContacts.props";
import cn from "classnames";

export default async function FooterContacts({}: FooterContactsProps) {
  const { data } = await getContacts();

  return (
    <>
      <span className={cn("regular-text", style.footerAddress)}>
        <span>Москва,</span>
        <span>{data && data.attributes.address}</span>
        <span>{data && data.attributes.phone}</span>
      </span>
      <div className={style.footerSocialLinks}>
        <SocialLink type={"whatsapp"} />
        <SocialLink type={"telegram"} />
      </div>
    </>
  );
}
