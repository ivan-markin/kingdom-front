import {getContacts} from '@/api/getContacts';
import SocialLink from '../SocialLink/SocialLink';
import style from './FooterContacts.module.scss';
import {FooterContactsProps} from './FooterContacts.props';
import cn from 'classnames';

export default async function FooterContacts({}: FooterContactsProps) {
  const {data} = await getContacts();

  return (
    <>
      <span className={cn('regular-text', style.footerAddress)}>
        <span className={style.footerAddress__title}>
          Офис и&nbsp;выставочная площадка в&nbsp;Москве:
        </span>
        <span>{data && data.attributes.address}</span>
        <span>{data && data.attributes.phone}</span>
      </span>
      <span className={cn('regular-text', style.footerAddress)}>
        <span className={style.footerAddress__title}>
          Производство, офис и&nbsp;выставочная площадка:
        </span>
        <span>{data && data.attributes.productionAddress}</span>
      </span>
      <div className={style.footerSocialLinks}>
        {/*<SocialLink type={"whatsapp"} />*/}
        <SocialLink type={'telegram'} />
      </div>
    </>
  );
}
