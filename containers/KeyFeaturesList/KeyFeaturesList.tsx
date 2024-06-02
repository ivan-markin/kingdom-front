'use client';

import {iKeyFeature} from '@/interfaces/KeyFeature.interface';
import style from './KeyFeaturesList.module.scss';
import {KeyFeaturesListProps} from './KeyFeaturesList.props';
import Image from 'next/image';
import KeyFeaturesItem from '@/components/KeyFeaturesItem/KeyFeaturesItem';
import {useEffect, useRef, useState} from 'react';
import {motion} from 'framer-motion';

export default function KeyFeaturesList({data}: KeyFeaturesListProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(1);
  const [imageTopAmount, setImageTopAmount] = useState<number | string>(40);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const calcImagePositionY = () => {
    switch (currentImageIndex) {
      case 1:
        setImageTopAmount(40);
        break;
      case 2:
        setImageTopAmount('calc(50% - 175px)');
        break;
      case 3:
        setImageTopAmount(
          containerRef.current ? containerRef.current.offsetHeight - 390 : 320,
        );
        break;
      default:
        setImageTopAmount(40);
        break;
    }
  };

  const onHover = (i: number) => {
    setCurrentImageIndex(i);
    calcImagePositionY();
  };

  return (
    <div className={style.keyFeatures}>
      <motion.span
        className={style.keyFeatures__bgImage}
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 2}}
        style={{top: imageTopAmount}}
      >
        <Image
          src={`/key-feature-${currentImageIndex}.jpg`}
          width={350}
          height={350}
          alt=''
        />
      </motion.span>

      {data &&
        data
          .sort((a: iKeyFeature, b) => a.id - b.id)
          .map((item: iKeyFeature, i: number) => (
            <KeyFeaturesItem
              key={item.id}
              item={item}
              index={i}
              onMouseOver={() => onHover(i + 1)}
            />
        ))}
    </div>
  );
}
