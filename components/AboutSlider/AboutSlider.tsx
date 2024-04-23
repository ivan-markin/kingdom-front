"use client";

import style from "./AboutSlider.module.scss";
import { AboutSliderProps } from "./AboutSlider.props";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useState } from "react";
import SliderButton from "../SliderButton/SliderButton";

export default function AboutSlider({ items }: AboutSliderProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const aboutRef = useRef(null) as any;

  return (
    <div className={style.sliderCnt}>
      <Swiper
        className={style.slider}
        modules={[EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        onSwiper={(swiper) => {
          aboutRef.current = swiper;
        }}
        onSlideChange={() => setCurrentSlide(aboutRef.current.activeIndex)}
        spaceBetween={100}
        slidesPerView={1}
        ref={aboutRef}
      >
        {items &&
          items.map((item) => (
            <SwiperSlide className={style.slide} key={item.id}>
              <h2 className={"block-title"}>{item.attributes.title}</h2>
              <span className={"small-text"}>{item.attributes.text}</span>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className={style.sliderControls}>
        <SliderButton
          type="prev"
          onClick={() => aboutRef.current.slidePrev()}
          isDisabled={currentSlide === 0}
        />
        <SliderButton
          type="next"
          onClick={() => aboutRef.current.slideNext()}
          isDisabled={currentSlide === items.length - 1}
        />
      </div>
    </div>
  );
}
