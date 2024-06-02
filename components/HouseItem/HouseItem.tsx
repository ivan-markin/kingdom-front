'use client';

import Link from 'next/link';
import Image from 'next/image';
import style from './HouseItem.module.scss';
import {HouseItemProps} from './HouseItem.props';
import cn from 'classnames';
import {useEffect, useRef} from 'react';

export default function HouseItem({item}: HouseItemProps) {
  const houseRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const houseCard = houseRef.current;

    const onHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const parentSection = target.closest('.houses-list');

      if (parentSection) {
        const houseCards = Array.from(parentSection.children);
        houseCards.forEach((card) => {
          if (!card.contains(target)) {
            card.classList.add('inactive');
          }
        });
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const parentSection = target.closest('.houses-list');

      if (parentSection) {
        const houseCards = Array.from(parentSection.children);
        houseCards.forEach((card) => {
          card.classList.remove('inactive');
        });
      }
    };

    houseCard?.addEventListener('mouseover', onHover);
    houseCard?.addEventListener('mouseout', onMouseOut);

    return () => {
      houseCard?.removeEventListener('mouseover', onHover);
      houseCard?.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <Link
      id={String(item.id)}
      key={item.id}
      href={`houses/${item.attributes.alias}`}
      className={cn(style.house)}
      ref={houseRef}
    >
      <div className={cn(style.house__imageCnt, 'image-cnt')}>
        <Image
          src={
            process.env.KINGDOM_PUBLIC_URL +
            item.attributes.cover.data.attributes.url
          }
          className={style.house__image}
          width={466}
          height={336}
          alt={`Дом «${item.attributes.title}»`}
        />
      </div>

      <div className={style.house__content}>
        <h3 className={cn('block-title', style.house__title)}>
          {item.attributes.title}
        </h3>
        <div className={cn('regular-text', style.house__description)}>
          <span className={style.house__area}>
            жилая площадь: {item.attributes.area} кв.м
          </span>
          <span className={style.house__price}>{item.attributes.price} ₽</span>
        </div>
      </div>
    </Link>
  );
}
