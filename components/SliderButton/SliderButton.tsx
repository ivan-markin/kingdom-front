import Image from 'next/image';
import style from './SliderButton.module.scss';
import {SliderButtonColorEnum, SliderButtonProps} from './SliderButton.props';
import cn from 'classnames';
import ArrowIcon from './SliderArrow.svg';

export default function SliderButton({
  type,
  isDisabled = false,
  onClick,
  color = SliderButtonColorEnum.DARK,
}: SliderButtonProps) {
  return (
    <button
      className={cn(style.sliderButton, {
        [style.sliderButton_light]: color === SliderButtonColorEnum.LIGHT,
      })}
      disabled={isDisabled}
      onClick={onClick}
    >
      <span
        className={cn(style.sliderButton__arrow, {
          [style.sliderButton__arrow_prev]: type === 'prev',
          [style.sliderButton__arrow_next]: type === 'next',
        })}
      >
        <ArrowIcon />
      </span>
    </button>
  );
}
