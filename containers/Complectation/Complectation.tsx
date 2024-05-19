'use client';

import Image from 'next/image';
import style from './Complectation.module.scss';
import {ComplectationProps} from './Complectation.props';
import cn from 'classnames';
import {motion} from 'framer-motion';

export default function Complectation({data}: ComplectationProps) {
  const currentItemsName = data.attributes.alias;

  return (
    <motion.div
      className={style.complectation}
      initial={{opacity: 0, y: 200}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 1.5, ease: 'backInOut'}}
    >
      <h2 className={cn('block-title', style.complectation__title)}>
        Комплектация
      </h2>
      <div className={style.complectation__list}>
        {data.attributes.complectation_items.data.map((item: any) => (
          <div key={item.id} className={style.complectation__item}>
            <span className={style.complectation__itemImage}>
              <Image
                src={item.attributes.image[0].image.url}
                width={158}
                height={173}
                alt=''
              />
            </span>
            <div className={style.complectation__listItem}>
              <h3 className={style.complectation__listItemTitle}>
                {item.attributes.title}
              </h3>
              <div className={style.complectation__text}>
                {item.attributes[`${currentItemsName}`]
                  .split('\n\n')
                  .map((line: string) => (
                    <span key={line.slice(0, 3)}>{line}</span>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
