import style from './BackButton.module.scss';
import {BackButtonProps} from './BackButton.props';
import BackArrowIcon from './back-arrow-icon.svg';

export default function BackButton({onClick}: BackButtonProps) {
  return (
    <button className={style.button} onClick={onClick}>
      <BackArrowIcon />
    </button>
  );
}
