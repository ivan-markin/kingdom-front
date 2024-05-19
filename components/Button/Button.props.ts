import {ButtonHTMLAttributes, ReactNode} from 'react';

export enum ButtonTypeEnum {
  DARK = 'dark',
  LIGHT = 'light',
  OUTLINE = 'outline',
  DARK_OUTLINE = 'dark-outline',
}

export enum ButtonSizeEnum {
  LARGE = 'large',
  MEDIUM = 'medium',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  appearance?: ButtonTypeEnum;
  size?: ButtonSizeEnum;
}
