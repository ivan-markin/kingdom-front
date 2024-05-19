'use client';

import style from './LayoutSection.module.scss';
import {LayoutSectionProps} from './LayoutSection.props';
import cn from 'classnames';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {useRef} from 'react';
import Image from 'next/image';
import SliderButton from '@/components/SliderButton/SliderButton';
import {motion} from 'framer-motion';

export default function LayoutSection({data}: LayoutSectionProps) {
  const layoutGalleryRef = useRef() as any;

  return (
    <div className={style.layoutSection}>
      <div className={style.layoutSection__paramsCnt}>
        <div className={style.layoutSection__titleBlock}>
          <h2 className={cn('block-title', style.layoutSection__title)}>
            Вариант планировки
          </h2>
          <span className={style.layoutSection__subtitle}>
            Планировка может быть зеркальной
          </span>
        </div>

        <div className={style.layoutSection__params}>
          {data.attributes.layoutParams.map((item, i) => (
            <div className={style.layoutSection__paramCnt} key={i}>
              <motion.div
                className={style.layoutSection__param}
                initial={{y: 'calc(100% + 10px)'}}
                whileInView={{y: 0}}
                viewport={{once: true}}
                transition={{duration: 1, ease: 'backInOut'}}
              >
                {item.children[0].text.split('|').map((param, i) => (
                  <span className={style.layoutSection__paramItem} key={i}>
                    {param}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.layoutSection__sliderCnt}>
        <Swiper
          modules={[Autoplay, EffectFade]}
          onSwiper={(swiper) => {
            layoutGalleryRef.current = swiper;
          }}
          spaceBetween={10}
          slidesPerView={1}
          speed={600}
          loop
          ref={layoutGalleryRef}
        >
          {data.attributes.layoutImages.data.map((image) => (
            <SwiperSlide className={style.layoutSection__slide} key={image.id}>
              <Image
                src={process.env.KINGDOM_PUBLIC_URL + image.attributes.url}
                width={600}
                height={600}
                alt=''
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={style.layoutSection__sliderControls}>
          <SliderButton
            type={'prev'}
            onClick={() => layoutGalleryRef.current.slidePrev()}
          />
          <SliderButton
            type={'next'}
            onClick={() => layoutGalleryRef.current.slideNext()}
          />
        </div>
      </div>
    </div>
  );
}
