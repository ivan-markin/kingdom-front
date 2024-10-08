'use client';

import {useEffect, useState} from 'react';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import style from './Form.module.scss';
import {FormProps} from './Form.props';
import cn from 'classnames';
import {Geologica} from 'next/font/google';
import {ButtonTypeEnum} from '../Button/Button.props';
import {SubmitErrorHandler, SubmitHandler, useForm} from 'react-hook-form';
import PaperPlaneImage from './paper-plane.svg';
import {AnimatePresence, motion} from 'framer-motion';
import Link from 'next/link';
import {formSubmitSuccess} from '@/services/yandex-metrica/form-submit-success';
import ReCAPTCHA from 'react-google-recaptcha';
import Image from 'next/image';

const geologica = Geologica({subsets: ['cyrillic']});

interface iForm {
  name: string;
  phone: string;
  email: string | null;
}

const formAnimate = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  }
}

export default function Form({id}: FormProps) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [isCheckboxActive, setCheckboxActive] = useState<boolean>(true);
  const [isCaptchaChecked, setCaptchaChecked] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<iForm>();

  const submit: SubmitHandler<iForm> = async (data) => {
    const name = data.name;
    const phone = data.phone;
    const email = data.email;
    const chatId = process.env.CHAT_ID;
    const token = process.env.TG_TOKEN;
    const photo = 'https://strapi.dom-king.ru/uploads/tg_cover_9391e48338.jpg';

    const message = `        
      имя: ${name} | тел.: ${phone} ${email ? '| email: ' + email : ''}        
    `;
    try {
      const res = await fetch(
        `https://api.telegram.org/bot${token}/sendPhoto?chat_id=${chatId}&parse_mode=html&caption=${message}&photo=${photo}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (res.ok) {
        console.log('Форма отправлена');
        setIsSuccess(true);
        // YM
        formSubmitSuccess();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const error: SubmitErrorHandler<iForm> = (data) => {
    console.log(data.phone?.type);
  };

  useEffect(() => {
    let timer: any;
    if (isSuccess) {
      timer = setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isSuccess]);

  return (
    <div className={style.form} id={id}>
      <div className={cn(style.form__cnt, {
        [style.form__cnt_collapsed]: !expanded
      })}>

        {expanded &&
          <button className={style.form__closeBtn} onClick={() => setExpanded(false)}>
            <Image src={'/close-icon.svg'} width={30} height={30} alt={''} />
          </button>
        }

        <div className={style.form__header}>
          <h2 className={cn('block-title', style.form__title, {
            [style.form__title_collapsed]: !expanded
          })}>
            <Image src={'/form-image.png'} width={158} height={173} alt={''} />
            Понравился дом
            <br />
            или появились вопросы?
          </h2>

          {expanded &&
            <span className={cn('regular-text', style.form__description)}>
              Оставьте ваш номер телефона, и наш менеджер свяжется с вами в
              ближайшее время. Также мы вышлем презентацию проектов на ваш e-mail.
            </span>
          }
        </div>

        <AnimatePresence>
          {expanded ? (
            <motion.form
              className={cn(style.form__content, {
                [style.form__content_error]:
                errors.name || errors.phone || errors.email,
              })}
              onSubmit={handleSubmit(submit, error)}
              variants={formAnimate}
              initial={'initial'}
              animate={'animate'}
              exit={'initial'}
              transition={{duration: 1}}
              noValidate
            >
              <div
                className={cn(style.form__inputs, {
                  [style.form__inputs_error]:
                  errors.name || errors.phone || errors.email,
                })}
              >
            <span className={style.form__inputCnt}>
              <input
                className={cn(geologica.className, style.form__input, {
                  [style.form__input_error]: errors.name,
                })}
                type="text"
                placeholder="* Ваше имя"
                aria-invalid={!!errors.name}
                {...register('name', {required: true})}
              />
              {errors.name && (
                <span className={style.form__errorMessage}>
                  Пожалуйста, укажите ваше имя
                </span>
              )}
            </span>
                <span className={style.form__inputCnt}>
              <input
                className={cn(geologica.className, style.form__input, {
                  [style.form__input_error]: errors.phone,
                })}
                type="tel"
                placeholder="* Телефон"
                aria-invalid={!!errors.phone}
                {...register('phone', {
                  required: true,
                  pattern: /\+?[\d\s\-\(\)]+[^\s\s][^\-\s]$/,
                  minLength: 11,
                  maxLength: 18,
                })}
              />
                  {errors.phone && (
                    <div className={style.form__errorMessage}>
                      {errors.phone.type === 'required' && (
                        <span>Пожалуйста, оставьте свой номер телефона</span>
                      )}
                      {errors.phone.type === 'pattern' && (
                        <span>Телефон в формате: +7 (123) 456-78-90</span>
                      )}
                      {errors.phone.type === 'minLength' && (
                        <span>Минимум 11 знаков</span>
                      )}
                      {errors.phone.type === 'maxLength' && (
                        <span>Максимум 18 знаков</span>
                      )}
                    </div>
                  )}
                  {!errors.phone && (
                    <span className={style.form__inputSubline}>
                  Телефон в формате: +7 (123) 456-78-90
                </span>
                  )}
            </span>
                <span className={style.form__inputCnt}>
              <input
                className={cn(geologica.className, style.form__input, {
                  [style.form__input_error]: errors.email,
                })}
                type="email"
                placeholder="E-mail"
                {...register('email', {pattern: /[\w\-\.]+@\w+\.\w+/})}
              />
                  {errors.email && (
                    <div className={style.form__errorMessage}>
                      {errors.email.type === 'pattern' && (
                        <span>E-mail в формате name@domain.com</span>
                      )}
                    </div>
                  )}
            </span>
              </div>

              <ReCAPTCHA sitekey={'6LdMI1sqAAAAAENW9JbIfKS3PrHoxyz-otEzqO0Y'} onChange={setCaptchaChecked} />

              <div className={style.form__checkbox}>
                <Checkbox
                  isChecked={isCheckboxActive}
                  onChange={() => setCheckboxActive(!isCheckboxActive)}
                />
                <span>
              Соглашаюсь с{' '}
                  <Link href={'/privacy-policy'}>
                условиями обработки персональных данных
              </Link>
            </span>
              </div>

              <Button
                className={style.form__button}
                appearance={ButtonTypeEnum.OUTLINE}
                disabled={!isCheckboxActive || !isCaptchaChecked}
              >
                Оставить заявку
              </Button>
            </motion.form>) : (

            <Button
              className={style.form__button}
              appearance={ButtonTypeEnum.OUTLINE}
              onClick={() => setExpanded(true)}
            >
              Оставить заявку
            </Button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isSuccess && (
            <motion.div
              className={style.form__success}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
            >
              <h2 className={cn('block-title', style.form__successTitle)}>
                Ваша заявка успешно отправлена!
              </h2>
              <span className={style.form__successCaption}>
                Наш менеджер свяжется с вами в ближайшее время.
              </span>

              <motion.span
                className={cn(style.form__paperPlane)}
                initial={{x: 0, y: 0, opacity: 0}}
                animate={{x: '400%', y: '-400%', opacity: 1}}
                transition={{ease: 'easeOut'}}
              >
                <PaperPlaneImage />
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
