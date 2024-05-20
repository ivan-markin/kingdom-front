import style from './Footer.module.scss';
import {FooterProps} from './Footer.props';
import Button from '@/components/Button/Button';
import FooterContacts from '@/components/FooterContacts/FooterContacts';
import FooterMenu from '@/components/FooterMenu/FooterMenu';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer({}: FooterProps) {
  return (
    <div className={style.footer}>
      <div className={style.footer__cnt}>
        <div className={style.footer__left}>
          <FooterMenu />
        </div>
        <div className={style.footer__right}>
          <div className={style.footer__contacts}>
            <FooterContacts />
          </div>
          <Link href={'#form'} className={style.footer__ctaLink}>
            <Button className={style.footer__cta}>Оставить заявку</Button>
          </Link>
        </div>
      </div>
      <div className={style.footer__copyrights}>
        <span className={style.footer__copyrightsLeft}>© 2024 KingDom</span>
        <div className={style.footer__copyrightsRight}>
          <a href='https://unqn.ru/' target='_blank'>
            <Image src={'/uniqorn-logo.svg'} width={113} height={30} alt='' />
          </a>
          <a href='https://unqn.ru/' target='_blank'>
            Сделано в Uniqorn
          </a>
        </div>
      </div>
    </div>
  );
}
