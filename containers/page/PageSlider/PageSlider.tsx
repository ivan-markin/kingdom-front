'use client';

import style from './PageSlider.module.scss';
import {PageSliderProps} from './PageSlider.props';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {useRef, useState} from 'react';
import Image from 'next/image';
import Switch from '@/components/Switch/Switch';
import SwitchButton from '@/components/SwitchButton/SwitchButton';
import SliderButton from '@/components/SliderButton/SliderButton';
import {SliderButtonColorEnum} from '@/components/SliderButton/SliderButton.props';
import {motion} from 'framer-motion';

enum SlidesTypeEnum {
  INTERIOR = 'interior',
  EXTERIOR = 'exterior',
}

const switchButtons = [
  {
    id: 0,
    name: 'Интерьер',
    type: SlidesTypeEnum.INTERIOR,
  },
  {
    id: 1,
    name: 'Экстерьер',
    type: SlidesTypeEnum.EXTERIOR,
  },
];

export default function PageSlider({data}: PageSliderProps) {
  const [slidesType, setSlidesType] = useState<SlidesTypeEnum>(
    SlidesTypeEnum.INTERIOR,
  );
  const pageGalleryRef = useRef(null) as any;
  const interiorSlides = data.attributes.interiorImages.data;
  const exteriorSlides = data.attributes.exteriorImages.data;

  return (
    <motion.div
      className={style.pageSlider}
      initial={{opacity: 0, y: 100}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1, ease: 'backInOut'}}
    >
      <div className={style.pageSliderCnt}>
        <Swiper
          modules={[Autoplay, EffectFade]}
          onSwiper={(swiper) => {
            pageGalleryRef.current = swiper;
          }}
          spaceBetween={10}
          slidesPerView={1}
          speed={600}
          autoplay
          loop
          ref={pageGalleryRef}
        >
          {slidesType === SlidesTypeEnum.INTERIOR &&
            interiorSlides &&
            interiorSlides.map((slide) => (
              <SwiperSlide className={style.slide} key={slide.id}>
                <Image
                  className={style.slide__image}
                  src={process.env.KINGDOM_PUBLIC_URL + slide.attributes.url}
                  fill
                  placeholder={'blur'}
                  blurDataURL={slide.attributes.formats.thumbnail.url}
                  alt=''
                />
              </SwiperSlide>
            ))}

          {slidesType === SlidesTypeEnum.EXTERIOR &&
            exteriorSlides &&
            exteriorSlides.map((slide) => (
              <SwiperSlide className={style.slide} key={slide.id}>
                <Image
                  className={style.slide__image}
                  src={process.env.KINGDOM_PUBLIC_URL + slide.attributes.url}
                  fill
                  alt=''
                />
              </SwiperSlide>
            ))}
        </Swiper>
        <div className={style.pageSlider__switch}>
          <Switch>
            {switchButtons.map((item) => (
              <SwitchButton
                key={item.id}
                onClick={() => setSlidesType(item.type)}
                isActive={item.type === slidesType}
              >
                {item.name}
              </SwitchButton>
            ))}
          </Switch>
        </div>
        <div className={style.pageSlider__controls}>
          <SliderButton
            type={'prev'}
            color={SliderButtonColorEnum.LIGHT}
            onClick={() => pageGalleryRef.current.slidePrev()}
          />
          <SliderButton
            type={'next'}
            color={SliderButtonColorEnum.LIGHT}
            onClick={() => pageGalleryRef.current.slideNext()}
          />
        </div>
      </div>
    </motion.div>
  );
}
