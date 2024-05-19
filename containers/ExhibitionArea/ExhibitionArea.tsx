import Image from 'next/image';
import style from './ExhibitionArea.module.scss';
import {ExhibitionAreaProps} from './ExhibitionArea.props';
import {getExhibitionContent} from '@/api/getExhibitionContent';
import Button from '@/components/Button/Button';
import {ButtonTypeEnum} from '@/components/Button/Button.props';

const marqueeText = 'Посетите нашу выставочную площадку';
const marqueeImage = '/crown-icon.svg';

const marqueeContent = [
  {
    id: 0,
    text: marqueeText,
    image: marqueeImage,
  },
  {
    id: 1,
    text: marqueeText,
    image: marqueeImage,
  },
];

export default async function ExhibitionArea({}: ExhibitionAreaProps) {
  const {data} = await getExhibitionContent();

  return (
    <div className={style.exhibitionArea}>
      <div className={style.exhibitionArea__marqueeCnt}>
        <div className={style.exhibitionArea__marquee}>
          {marqueeContent.map((item) => (
            <div className={style.exhibitionArea__marqueeItem} key={item.id}>
              <h2 className={'block-title'}>{item.text}</h2>
              <Image src={item.image} width={68} height={22} alt='' />
            </div>
          ))}
        </div>
        <div aria-hidden={true} className={style.exhibitionArea__marquee}>
          {marqueeContent.map((item) => (
            <div className={style.exhibitionArea__marqueeItem} key={item.id}>
              <h2 className={'block-title'}>{item.text}</h2>
              <Image src={item.image} width={68} height={22} alt='' />
            </div>
          ))}
        </div>
      </div>
      <div className={style.exhibitionArea__cnt}>
        <div className={style.exhibitionArea__imageCnt}>
          <Image
            className={style.exhibitionArea__image}
            src={
              data &&
              process.env.KINGDOM_PUBLIC_URL +
                data.attributes.image.data.attributes.url
            }
            width={711}
            height={538}
            alt=''
          />
        </div>
        <div className={style.exhibitionArea__content}>
          <div className={style.exhibitionArea__addressBlock}>
            <span>Москва</span>
            <span>{data && data.attributes.address}</span>
            <div className={style.exhibitionArea__metro}>
              <span>{data && data.attributes.metro}</span>
              <span className={style.exhibitionArea__walkingTime}>
                <Image
                  src={'/walking-icon.svg'}
                  width={16}
                  height={16}
                  alt=''
                />
                {data && data.attributes.timeAmount} мин
              </span>
            </div>
          </div>
          <div className={style.exhibitionArea__ctaBlock}>
            <span className={style.exhibitionArea__workingHours}>
              {data.attributes.description}
            </span>
            <Button
              className={style.exhibitionArea__cta}
              appearance={ButtonTypeEnum.LIGHT}
            >
              Записаться
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
