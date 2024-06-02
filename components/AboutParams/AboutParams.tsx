'use client';

import style from './AboutParams.module.scss';
import {AboutParamsProps} from './AboutParams.props';
import {Bebas_Neue} from 'next/font/google';
import cn from 'classnames';
import {motion} from 'framer-motion';

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
});

const aboutParams = [
  {
    id: 0,
    value: '3 200 M²',
    description: 'площадь производственных и складских помещений',
  },
  {
    id: 1,
    value: '>96',
    description: 'домов в год проектная мощность',
  },
  {
    id: 2,
    value: '>45',
    description: 'сотрудников в штате',
  },
];

export default function AboutParams({}: AboutParamsProps) {
  return (
    <div className={style.aboutParams}>
      <div className={style.aboutParams__content}>
        {aboutParams.map((param, i) => (
          <div key={param.id} className={style.aboutParams__item}>
            <motion.span
              className={style.aboutParams__itemCnt}
              initial={{x: '-100%'}}
              whileInView={{x: 0}}
              transition={{type: 'spring', delay: i / 12}}
            >
              <span
                className={cn(bebas.className, style.aboutParams__itemValue)}
              >
                {param.value}
              </span>
              <span
                className={cn('small-text', style.aboutParams__itemDescription)}
              >
                {param.description}
              </span>
            </motion.span>
          </div>
        ))}
      </div>
    </div>
  );
}
