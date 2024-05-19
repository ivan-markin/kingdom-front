import Link from 'next/link';
import style from './HeroMenu.module.scss';
import {HeroMenuProps} from './HeroMenu.props';

const menuItems = [
  {
    id: 0,
    name: 'дома',
    link: '/#houses',
  },
  {
    id: 1,
    name: 'О компании',
    link: '/#about',
  },
  {
    id: 2,
    name: 'Этапы работы',
    link: '/#stages',
  },
  {
    id: 3,
    name: 'Ответы на вопросы',
    link: '/#faq',
  },
];

export default function HeroMenu({onClick}: HeroMenuProps) {
  return (
    <div className={style.heroMenuCnt}>
      <ul className={style.heroMenu}>
        {menuItems.map((item) => (
          <li key={item.id} className={style.heroMenu__item}>
            <Link
              className={style.heroMenu__link}
              href={item.link}
              onClick={onClick}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
