'use client';

import style from './TextReviewsSlider.module.scss';
import {TextReviewsSliderProps} from './TextReviewsSlider.props';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {useRef, useState} from 'react';
import {SliderButtonColorEnum} from '../SliderButton/SliderButton.props';
import SliderButton from '../SliderButton/SliderButton';
import ReviewCard from '../ReviewCard/ReviewCard';
import {iTextReview} from '@/interfaces/TextReviews.interface';
import {AnimatePresence} from 'framer-motion';

export default function TextReviewsSlider({slides}: TextReviewsSliderProps) {
  const [isReviewOpen, setReviewOpen] = useState<boolean>(false);
  const [activeReview, setActiveReview] = useState<iTextReview | null>(null);
  const textReviewsGalleryRef = useRef() as any;

  const openReview = (item: iTextReview) => {
    setReviewOpen(true);
    setActiveReview(item);
  };

  return (
    <div className={style.slider}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        onSwiper={(swiper) => {
          textReviewsGalleryRef.current = swiper;
        }}
        spaceBetween={10}
        slidesPerView={1}
        speed={1000}
        autoplay
        loop
        ref={textReviewsGalleryRef}
        breakpoints={{
          769: {
            slidesPerView: 'auto',
          },
        }}
      >
        {slides.map((item) => (
          <SwiperSlide
            className={style.slider__slide}
            key={item.id}
            onClick={() => openReview(item)}
          >
            <div className={style.slider__slideCnt}>
              <div className={style.slider__slideContent}>
                {item.attributes.content.split('\n\n').map((p) => (
                  <p key={p.slice(0, 5)}>{p}</p>
                ))}
              </div>
              <div className={style.slider__slideName}>
                {item.attributes.name.split('|').map((line) => (
                  <span key={line.slice(0, 5)}>{line}</span>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={style.slider__controls}>
        <SliderButton
          type={'prev'}
          color={SliderButtonColorEnum.DARK}
          onClick={() => textReviewsGalleryRef.current.slidePrev()}
        />
        <SliderButton
          type={'next'}
          color={SliderButtonColorEnum.DARK}
          onClick={() => textReviewsGalleryRef.current.slideNext()}
        />
      </div>

      <AnimatePresence>
        {isReviewOpen && (
          <ReviewCard
            review={activeReview}
            closeHandler={() => setReviewOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
