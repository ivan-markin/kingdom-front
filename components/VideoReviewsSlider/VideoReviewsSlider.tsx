'use client';

import style from './VideoReviewsSlider.module.scss';
import {VideoReviewsSliderProps} from './VideoReviewsSlider.props';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {useRef, useState} from 'react';
import Image from 'next/image';
import cn from 'classnames';
import PlayButton from '../PlayButton/PlayButton';
import {AnimatePresence, motion} from 'framer-motion';

const playVariants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

export default function VideoReviewsSlider({slides}: VideoReviewsSliderProps) {
  const videoReviewsGalleryRef = useRef() as any;
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className={style.slider}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        onSwiper={(swiper) => {
          videoReviewsGalleryRef.current = swiper;
        }}
        onSlideChange={() =>
          setActiveIndex(videoReviewsGalleryRef.current.activeIndex)
        }
        spaceBetween={10}
        slidesPerView={'auto'}
        speed={600}
        autoplay
        centeredSlides
        ref={videoReviewsGalleryRef}
      >
        {slides.map((item, i) => (
          <SwiperSlide className={style.slider__slide} key={item.id}>
            <Image
              className={style.slider__slideImage}
              src={
                process.env.KINGDOM_PUBLIC_URL +
                item.attributes.video.data.attributes.url
              }
              width={650}
              height={430}
              alt=''
            />
            <span className={style.slider__slideCaption}>
              {item.attributes.title}
            </span>

            <AnimatePresence>
              {activeIndex === i && (
                <motion.span
                  className={style.slider__playBtn}
                  variants={playVariants}
                  initial={'initial'}
                  animate={'animate'}
                  exit={'initial'}
                  transition={{delay: 0.5}}
                >
                  <PlayButton />
                </motion.span>
              )}
            </AnimatePresence>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className={style.pageSlider__controls}>
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
  </div> */}
    </div>
  );
}
