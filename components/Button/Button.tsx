import style from './Button.module.scss';
import {ButtonProps, ButtonSizeEnum, ButtonTypeEnum} from './Button.props';
import cn from 'classnames';

export default function Button({
  children,
  appearance,
  size = ButtonSizeEnum.LARGE,
  className,
  disabled,
}: ButtonProps) {
  return (
    <button
      className={cn(
        style.button,
        {
          [style.button_light]: appearance === ButtonTypeEnum.LIGHT,
          [style.button_outline]: appearance === ButtonTypeEnum.OUTLINE,
          [style.button_outlineDark]:
            appearance === ButtonTypeEnum.DARK_OUTLINE,
          [style.button_medium]: size === ButtonSizeEnum.MEDIUM,
        },
        className,
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
