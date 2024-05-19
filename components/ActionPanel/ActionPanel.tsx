import style from './ActionPanel.module.scss';
import {ActionPanelProps} from './ActionPanel.props';

export default function ActionPanel({}: ActionPanelProps) {
  return (
    <div className={style.actionPanel}>
      <button>Оставить заявку</button>
      <div>
        <a href=''></a>
        <a href=''></a>
        <a href=''></a>
      </div>
    </div>
  );
}
