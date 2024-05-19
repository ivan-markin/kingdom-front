import style from './MenuButton.module.scss';
import {MenuButtonProps} from './MenuButton.props';
import cn from 'classnames';

export default function MenuButton({isOpen, onClick}: MenuButtonProps) {
  return (
    <button
      className={cn(style.menuButton, {
        [style.menuButton_active]: isOpen,
      })}
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
