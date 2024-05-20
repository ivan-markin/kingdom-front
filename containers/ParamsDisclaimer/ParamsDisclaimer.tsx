'use client';

import Image from 'next/image';
import style from './ParamsDisclaimer.module.scss';
import {ParamsDisclaimerProps} from './ParamsDisclaimer.props';
import image from '@/public/params-disclaimer-img.png';
import cn from 'classnames';
import {motion} from 'framer-motion';

export default function ParamsDisclaimer({}: ParamsDisclaimerProps) {
  return (
    <motion.div
      className={style.section}
      initial={{opacity: 0, y: 100}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1}}
    >
      <div className={style.sectionCnt}>
        <Image className={style.image} src={image} alt='Фото печки' />
        <div className={style.content}>
          <h2 className={cn('block-title', style.title)}>
            Все наши дома рассчитаны для круглогодичного проживания и подходят
            для российских морозных зим
          </h2>
          <span className={cn('regular-text', style.subtitle)}>
            В доме будет тепло даже в сорокаградусный мороз.
          </span>
        </div>
      </div>
    </motion.div>
  );
}
