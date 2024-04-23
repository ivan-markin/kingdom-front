"use client";

import SliderButton from "../SliderButton/SliderButton";
import style from "./GallerySliderControls.module.scss";
import { GallerySliderControlsProps } from "./GallerySliderControls.props";

export default function GallerySliderControls({}: GallerySliderControlsProps) {
  return (
    <div className={style.controls}>
      <SliderButton type={"prev"} />
      <SliderButton type={"next"} />
    </div>
  );
}
