import style from './page.module.scss';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import {ButtonSizeEnum, ButtonTypeEnum} from '@/components/Button/Button.props';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className={style.notFound}>
      <Image
        src={'/kingdom-logo-white.svg'}
        width={80}
        height={123}
        alt={'KingDom'}
      />
      <span>
        <h1 className={style.notFound__title}>404</h1>
        <span className={style.notFound__caption}>Страница не найдена</span>
      </span>
      <Link href={'/'}>
        <Button appearance={ButtonTypeEnum.OUTLINE} size={ButtonSizeEnum.LARGE}>
          Вернуться на главную
        </Button>
      </Link>
    </div>
  );
}
