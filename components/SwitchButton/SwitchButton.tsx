import style from './SwitchButton.module.scss';
import {SwitchButtonProps} from './SwitchButton.props';
import cn from 'classnames';
import {motion, AnimatePresence} from 'framer-motion';

export default function SwitchButton({
  children,
  onClick,
  isActive,
}: SwitchButtonProps) {
  return (
    <button
      className={cn(style.switchButton, {
        [style.switchButton_active]: isActive,
      })}
      onClick={onClick}
    >
      <span className={style.switchButton__content}>{children}</span>
      <AnimatePresence>
        {isActive && (
          <motion.span
            layoutId='switchButton'
            className={style.activeBg}
          ></motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
