"use client";

import style from "./StagesSlider.module.scss";
import { StagesSliderProps } from "./StagesSlider.props";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { useRef, useState } from "react";
import Image from "next/image";
import SliderButton from "../SliderButton/SliderButton";
import cn from 'classnames';

export default function StagesSlider({
  items,
}: StagesSliderProps) {
  const [currentSlide, setCurrentSlide] =
    useState<number>(0);
  const stagesRef = useRef(null) as any;

  return (
    <div className={style.stagesSlider}>
      <Swiper
        className={style.slider}
        modules={[EffectCards]}   
        effect="cards"
        onSwiper={(swiper) => {
          stagesRef.current = swiper;
        }}
        onSlideChange={() =>
          setCurrentSlide(stagesRef.current.activeIndex)
        }
        spaceBetween={10}      
        ref={stagesRef}
      >
        {items &&
          items.map((item) => (
            <SwiperSlide
              className={style.slide}
              key={item.id}
            >
              <div className={style.slide__icon}>
                <Image
                  src={
                    process.env.KINGDOM_PUBLIC_URL +
                    item.attributes.icon.data.attributes.url
                  }
                  width={225}
                  height={217}
                  quality={100}
                  alt=""
                />
              </div>
              <div className={style.slide__content}>
                <h2 className={cn("block-title", style.slide__title)}>
                  {item.attributes.title}
                </h2>
                <span className={"regular-text"}>
                  {item.attributes.description}
                </span>
              </div>
              <span className={style.slide__num}>
                {item.id}
              </span>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className={style.stagesSlider__controls}>
        <SliderButton
          type="prev"
          onClick={() => stagesRef.current.slidePrev()}
          isDisabled={currentSlide === 0}
        />
        <SliderButton
          type="next"
          onClick={() => stagesRef.current.slideNext()}
          isDisabled={currentSlide === items.length - 1}
        />
      </div>
    </div>
  );
}
