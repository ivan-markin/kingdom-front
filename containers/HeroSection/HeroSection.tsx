'use client';

import Image from 'next/image';
import style from './HeroSection.module.scss';
import {HeroSectionProps} from './HeroSection.props';
import heroImage from '/public/hero-image.jpg';
import heroImageMobile from '/public/hero-image_mobile.jpg';
import Logo from '../../components/Logo/Logo';
import cn from 'classnames';
import SocialLink from '../../components/SocialLink/SocialLink';
import Button from '../../components/Button/Button';
import {useEffect, useState} from 'react';
import MenuButton from '@/components/MenuButton/MenuButton';
import {useMediaQuery} from '@/hooks/use-media-query';
import Link from 'next/link';
import {ButtonTypeEnum} from '@/components/Button/Button.props';
import SideMenuSection from '@/components/SideMenuSection/SideMenuSection';

const menuVariants = {
  initial: {
    opacity: 0,
    width: 0,
    marginLeft: 0,
  },
  animate: {
    opacity: 1,
    width: 'auto',
    marginLeft: 10,
  },
};

export default function HeroSection({}: HeroSectionProps) {
  const [isShown, setShown] = useState<boolean>(false);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.classList.add('fixed');
    } else document.body.classList.remove('fixed');

    setShown(true);
  }, [isMenuOpen, isMobile]);

  return (
    <div
      className={cn(style.heroSection, {
        [style.heroSection_shown]: isShown,
      })}
    >
      <div className={style.heroSection__cnt}>
        <Image
          src={isMobile ? heroImageMobile : heroImage}
          className={cn(style.heroSection__image, {
            [style.heroSection__image_shown]: isShown,
          })}
          quality={80}
          alt=''
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
            <a
              className={cn(
                style.heroSection__phone,
                style.heroSection__actionItem,
              )}
              href='tel:89101234567'
            >
              +7 910 123-45-67
            </a>
            <div className={style.heroSection__socials}>
              <span
                className={cn(
                  style.heroSection__actionItem,
                  style.heroSection__actionItem_square,
                )}
              >
                <SocialLink type={'whatsapp'} />
              </span>
              <span
                className={cn(
                  style.heroSection__actionItem,
                  style.heroSection__actionItem_square,
                )}
              >
                <SocialLink type={'telegram'} />
              </span>
            </div>
            {/* <MainMenu /> */}
            <span
              className={cn(
                style.heroSection__actionItem,
                style.heroSection__actionItem_square,
              )}
            >
              <MenuButton
                onClick={() => setMenuOpen(!isMenuOpen)}
                isOpen={isMenuOpen}
              />
            </span>
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
              <Link href={'#form'} className={style.heroSection__ctaLink}>
                <Button
                  className={style.heroSection__cta}
                  appearance={
                    isMobile ? ButtonTypeEnum.LIGHT : ButtonTypeEnum.DARK
                  }
                >
                  Оставить заявку
                </Button>
              </Link>
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
      <SideMenuSection
        toggleHandler={() => setMenuOpen(!isMenuOpen)}
        closeHandler={() => setMenuOpen(false)}
        isMenuOpen={isMenuOpen}
      />
    </div>
  );
}
