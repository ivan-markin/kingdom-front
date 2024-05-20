import {motion} from 'framer-motion';
import style from './ReviewCard.module.scss';
import {ReviewCardProps} from './ReviewCard.props';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {useRef} from 'react';
import Image from 'next/image';
import cn from 'classnames';
import BackButton from '../BackButton/BackButton';

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export default function ReviewCard({review, closeHandler}: ReviewCardProps) {
  const textReviewGalleryRef = useRef() as any;

  return (
    <motion.div
      className={style.reviewCard}
      variants={variants}
      initial={'initial'}
      animate={'animate'}
      exit={'initial'}
    >
      <div className={style.reviewCard__gallery}>
        <Swiper
          className={style.reviewCard__gallerySlider}
          modules={[Autoplay, EffectFade]}
          onSwiper={(swiper) => {
            textReviewGalleryRef.current = swiper;
          }}
          spaceBetween={10}
          slidesPerView={1}
          speed={600}
          autoplay
          loop
          ref={textReviewGalleryRef}
        >
          {review?.attributes.images.data.map((item) => (
            <SwiperSlide
              className={style.reviewCard__gallerySlide}
              key={item.id}
            >
              <Image
                className={style.reviewCard__slideImage}
                src={process.env.KINGDOM_PUBLIC_URL + item.attributes.url}
                fill
                alt=''
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <span className={style.reviewCard__closeBtn}>
          <BackButton onClick={closeHandler} />
        </span>
      </div>
      <div className={style.reviewCard__content}>
        <div className={cn(style.reviewCard__contentWrapper, 'scrollbar')}>
          <div className={style.reviewCard__textContent}>
            <div className={style.reviewCard__text}>
              {review &&
                review.attributes.content
                  .split('\n\n')
                  .map((p) => <p key={p.slice(0, 5)}>{p}</p>)}
            </div>
            <div className={style.reviewCard__caption}>
              {review &&
                review.attributes.name
                  .split('|')
                  .map((line) => <span key={line.slice(0, 5)}>{line}</span>)}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
