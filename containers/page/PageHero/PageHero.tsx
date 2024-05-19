'use client';

import style from './PageHero.module.scss';
import {PageHeroProps} from './PageHero.props';
import Logo from '@/components/Logo/Logo';
import Image from 'next/image';
import Link from 'next/link';
import {pageMenu} from '@/constants/pageMenu';
import {LogoTypeEnum} from '@/components/Logo/Logo.props';
import cn from 'classnames';
import MenuArrow from './menu-arrow.svg';
import {useEffect, useState} from 'react';
import {useMediaQuery} from '@/hooks/use-media-query';
import MenuButton from '@/components/MenuButton/MenuButton';
import SideMenuSection from '@/components/SideMenuSection/SideMenuSection';

export default function PageHero({data}: PageHeroProps) {
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
    <section className={style.hero}>
      <div className={style.hero__content}>
        <header
          className={cn(style.hero__header, {
            [style.hero__header_shown]: isShown,
          })}
        >
          <Logo type={LogoTypeEnum.INNER} className={style.hero__logo} />
          <div className={style.hero__menu}>
            <Link
              className={cn(style.hero__menuItem, style.hero__menuItem_toMain)}
              href={'/'}
            >
              <MenuArrow />
              Главная
            </Link>
            <ul>
              {pageMenu.map((item) => (
                <li className={style.hero__menuItem} key={item.id}>
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </header>
        <span className={style.hero__titleCnt}>
          <h1
            className={cn(style.hero__title, {
              [style.hero__title_shown]: isShown,
            })}
          >
            {data.attributes.title}
          </h1>
        </span>
      </div>
      <div className={style.hero__imageCnt}>
        <Image
          className={cn(style.hero__image, {
            [style.hero__image_shown]: isShown,
          })}
          src={
            process.env.KINGDOM_PUBLIC_URL +
            data.attributes.heroImage.data.attributes.url
          }
          width={720}
          height={590}
          quality={100}
          alt=''
        />
        <span className={cn(style.hero__menuButton)}>
          <MenuButton
            onClick={() => setMenuOpen(!isMenuOpen)}
            isOpen={isMenuOpen}
          />
        </span>
      </div>
      <SideMenuSection
        toggleHandler={() => setMenuOpen(!isMenuOpen)}
        closeHandler={() => setMenuOpen(false)}
        isMenuOpen={isMenuOpen}
      />
    </section>
  );
}
