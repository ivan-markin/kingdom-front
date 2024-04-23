import Image from "next/image";
import style from "./Logo.module.scss";
import { LogoProps } from "./Logo.props";
import logoImage from "./kingdom-logo.svg?url";
import cn from "classnames";

export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn(style.logo, className)}>
      <Image src={logoImage} alt="KingDom logo" />
    </div>
  );
}
