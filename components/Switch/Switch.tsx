import style from './Switch.module.scss';
import {SwitchProps} from './Switch.props';

export default function Switch({children}: SwitchProps) {
  return <div className={style.switch}>{children}</div>;
}
