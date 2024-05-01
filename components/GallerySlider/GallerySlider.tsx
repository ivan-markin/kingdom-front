"use client";

import { GallerySliderProps } from "./GallerySlider.props";
import style from "./GallerySlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useRef } from "react";
import cn from "classnames";
import SliderButton from "../SliderButton/SliderButton";

export default function GallerySlider({
  slides,
}: GallerySliderProps) {
  const galleryRef = useRef(null) as any;

  const slide = (direction: "prev" | "next") => {
    const swiper = galleryRef.current;

    if (swiper !== null) {
      direction === "prev"
        ? swiper.slidePrev()
        : swiper.slideNext();
    }
  };

  return (
    <section className={style.gallery}>
      <div className={style.gallery__header}>
        <h2
          className={cn(
            "block-title",
            style.gallery__title
          )}
        >
          Фотогалерея
        </h2>
        <div className={style.gallery__controls}>
          <SliderButton
            type={"prev"}
            onClick={() => slide("prev")}
          />
          <SliderButton
            type={"next"}
            onClick={() => slide("next")}
          />
        </div>
      </div>
      <div className={style.gallery__slider}>
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => {
            galleryRef.current = swiper;
          }}
          spaceBetween={10}
          slidesPerView={1}
          slidesOffsetBefore={0}
          autoplay
          loop
          breakpoints={{
            769: {
              slidesPerView: 'auto',
              slidesOffsetBefore: 40
            },
            1025: {              
              slidesPerView: 'auto',
              slidesOffsetBefore: 60
            }
          }}
          ref={galleryRef}
        >
          {slides &&
            slides.map((slide) => (
              <SwiperSlide
                className={style.slide}
                key={slide.id}
              >
                <Image
                  src={
                    process.env.KINGDOM_PUBLIC_URL +
                    slide.attributes.photo.data.attributes
                      .url
                  }
                  width={583}
                  height={405}
                  alt=""
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}
