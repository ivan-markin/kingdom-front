import style from './PlayButton.module.scss';
import {PlayButtonProps} from './PlayButton.props';
import PlayIcon from './play-icon.svg';

export default function PlayButton({onClick}: PlayButtonProps) {
  return (
    <button className={style.button} onClick={onClick}>
      <PlayIcon />
    </button>
  );
}
