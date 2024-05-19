'use client';

import Image from 'next/image';
import style from './ParamItem.module.scss';
import {ParamItemProps} from './ParamItem.props';
import cn from 'classnames';
import {motion} from 'framer-motion';

export default function ParamItem({item}: ParamItemProps) {
  return (
    <div className={style.paramItem}>
      <motion.span
        className={style.paramItem__cnt}
        initial={{y: '100%'}}
        whileInView={{y: 0}}
        viewport={{once: true}}
        transition={{duration: 1, ease: 'easeOut'}}
      >
        <Image
          src={
            process.env.KINGDOM_PUBLIC_URL +
            item.attributes.image.data.attributes.url
          }
          width={158}
          height={173}
          alt=''
        />

        <span className={cn('regular-text', style.paramItem__description)}>
          {item.attributes.shortDescription}

          <Image
            className={style.paramItem__infoIcon}
            src={'/info-icon.svg'}
            width={20}
            height={20}
            alt=''
          />
        </span>
      </motion.span>
    </div>
  );
}
