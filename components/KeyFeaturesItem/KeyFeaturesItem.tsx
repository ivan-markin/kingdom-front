'use client';

import {motion} from 'framer-motion';
import style from './KeyFeaturesItem.module.scss';
import {KeyFeaturesItemProps} from './KeyFeaturesItem.props';
import cn from 'classnames';
import Image from 'next/image';

export default function KeyFeaturesItem({
  item,
  index,
  onMouseOver,
}: KeyFeaturesItemProps) {
  return (
    <div
      className={style.keyFeaturesItem}
      key={item.id}
      onMouseOver={onMouseOver}
    >
      {index !== 1 && (
        <Image
          className={style.keyFeaturesItem__itemImage}
          src={`/key-feature-${index + 1}.png`}
          width={355}
          height={216}
          alt=''
        />
      )}

      <div className={style.keyFeaturesItem__title}>
        <span className={style.keyFeaturesItem__itemCnt}>
          <motion.h2
            initial={{y: '100%'}}
            whileInView={{y: 0}}
            className={cn('block-title')}
            transition={{duration: 0.7}}
          >
            {item.attributes.title}
          </motion.h2>
        </span>
      </div>
      <span
        className={cn(
          style.keyFeaturesItem__itemCnt,
          style.keyFeaturesItem__itemCnt_description,
        )}
      >
        <motion.span
          initial={{y: '100%'}}
          whileInView={{y: 0}}
          className={cn('regular-text', style.keyFeaturesItem__description)}
          transition={{duration: 0.7}}
        >
          {item.attributes.description}
        </motion.span>
      </span>
    </div>
  );
}
