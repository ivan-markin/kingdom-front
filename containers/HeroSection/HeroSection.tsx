"use client";

import Image from "next/image";
import style from "./HeroSection.module.scss";
import { HeroSectionProps } from "./HeroSection.props";
import heroImage from "/public/hero-image.jpg";
import Logo from "../../components/Logo/Logo";
import cn from "classnames";
import MainMenu from "../../components/MainMenu/MainMenu";
import SocialLink from "../../components/SocialLink/SocialLink";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection({}: HeroSectionProps) {
  const [isShown, setShown] = useState<boolean>(false);

  useEffect(() => {
    setShown(true);
  }, []);

  return (
    <motion.div
      className={cn(style.heroSection, {
        [style.heroSection_shown]: isShown,
      })}
    >
      <div className={style.heroSection__cnt}>
        <Image
          src={heroImage}
          className={cn(style.heroSection__image, {
            [style.heroSection__image_shown]: isShown,
          })}
          alt=""
        />
        <div className={style.heroSection__top}>
          <Logo
            className={cn(style.heroSection__logo, {
              [style.heroSection__logo_shown]: isShown,
            })}
          />
          <div
            className={cn(style.heroSection__actions, {
              [style.heroSection__actions_shown]: isShown,
            })}
          >
            <a className={style.heroSection__actionItem} href="tel:89101234567">
              +7 910 123-45-67
            </a>
            <div className={style.heroSection__socials}>
              <span
                className={cn(
                  style.heroSection__actionItem,
                  style.heroSection__actionItem_square
                )}
              >
                <SocialLink type={"whatsapp"} />
              </span>
              <span
                className={cn(
                  style.heroSection__actionItem,
                  style.heroSection__actionItem_square
                )}
              >
                <SocialLink type={"telegram"} />
              </span>
            </div>
            <MainMenu />
          </div>
        </div>
        <div className={style.heroSection__bottom}>
          <div
            className={cn(style.tagline, {
              [style.show]: isShown,
            })}
          >
            <span className={style.tagline__lineCnt}>
              <span className={style.tagline__line}>Ваш дом —</span>
            </span>
            <span className={style.tagline__lineCnt}>
              <span className={style.tagline__line}>ваш стиль</span>
            </span>
          </div>
          <div
            className={cn(style.heroSection__underlineBlock, {
              [style.heroSection__underlineBlock_shown]: isShown,
            })}
          >
            <span
              className={cn(style.heroSection__description, {
                [style.show]: isShown,
              })}
            >
              модульные дома из лучших материалов для вашего комфорта с
              доставкой и установкой от 1 дня
            </span>
            <div className={style.heroSection__bottomRight}>
              <Button className={style.cta}>Оставить заявку</Button>
              {/* <Image
                src={"/live-chat-icon.svg"}
                width={60}
                height={65}
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
