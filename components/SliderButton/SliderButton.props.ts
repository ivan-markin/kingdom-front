export enum SliderButtonColorEnum {
  LIGHT = 'light',
  DARK = 'dark',
}
export interface SliderButtonProps {
  type: 'prev' | 'next';
  isDisabled?: boolean;
  onClick?: () => void;
  color?: SliderButtonColorEnum;
}
