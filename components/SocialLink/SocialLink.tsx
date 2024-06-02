'use client';

import style from './SocialLink.module.scss';
import {SocialLinkProps} from './SocialLink.props';
import WhatsappIcon from './whatsapp-logo.svg';
import TelegramIcon from './telegram-logo.svg';
import {useEffect, useState} from 'react';

export default function SocialLink({type}: SocialLinkProps) {
  const [link, setLink] = useState<string>('');

  useEffect(() => {
    switch (type) {
      case 'whatsapp':
        setLink('wa');
        break;
      case 'telegram':
        setLink('https://t.me/kingdom77777');
        break;
    }
  }, [type]);

  return (
    <a href={link} className={style.socialLink} target={'_blank'}>
      {type === 'whatsapp' && <WhatsappIcon />}
      {type === 'telegram' && <TelegramIcon />}
    </a>
  );
}
