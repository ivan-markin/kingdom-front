'use client';

import {useState} from 'react';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import style from './Form.module.scss';
import {FormProps} from './Form.props';
import cn from 'classnames';
import {Geologica} from 'next/font/google';
import {ButtonTypeEnum} from '../Button/Button.props';

const geologica = Geologica({subsets: ['cyrillic']});

export default function Form({id}: FormProps) {
  const [isCheckboxActive, setCheckboxActive] = useState<boolean>(true);

  return (
    <div className={style.form} id={id}>
      <div className={style.form__cnt}>
        <div className={style.form__header}>
          <h2 className={cn('block-title', style.form__title)}>
            Понравился дом
            <br />
            или появились вопросы?
          </h2>
          <span className={cn('regular-text', style.form__description)}>
            Оставьте ваш номер телефона, и наш менеджер свяжется с вами в
            ближайшее время. Также мы вышлем презентацию проектов на ваш e-mail.
          </span>
        </div>
        <form className={style.form__content}>
          <div className={style.form__inputs}>
            <input
              className={cn(geologica.className, style.form__input)}
              type='text'
              placeholder='* Ваше имя'
              name='name'
              required
            />
            <input
              className={cn(geologica.className, style.form__input)}
              type='tel'
              placeholder='* Телефон'
              name='tel'
              required
            />
            <input
              className={cn(geologica.className, style.form__input)}
              type='email'
              name='email'
              placeholder='E-mail'
            />
          </div>
          <Button
            className={style.form__button}
            appearance={ButtonTypeEnum.OUTLINE}
          >
            Оставить заявку
          </Button>
        </form>
        <div className={style.form__checkbox}>
          <Checkbox
            isChecked={isCheckboxActive}
            onChange={() => setCheckboxActive(!isCheckboxActive)}
          />
          <span>
            Соглашаюсь с <a href=''>условиями обработки персональных данных</a>
          </span>
        </div>

        <Button
          className={cn(style.form__button, style.form__button_mobile)}
          appearance={ButtonTypeEnum.OUTLINE}
        >
          Оставить заявку
        </Button>
      </div>
    </div>
  );
}
