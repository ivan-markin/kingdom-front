import Image from 'next/image';
import style from './Logo.module.scss';
import {LogoProps, LogoTypeEnum} from './Logo.props';
import logoImage from './kingdom-logo.svg?url';
import cn from 'classnames';

export default function Logo({className, type = LogoTypeEnum.MAIN}: LogoProps) {
  return (
    <div
      className={cn(
        style.logo,
        {
          [style.logo_inner]: type === LogoTypeEnum.INNER,
        },
        className,
      )}
    >
      <Image src={logoImage} alt='KingDom logo' />
    </div>
  );
}
