import Button from '@/components/Button/Button';
import style from './HouseDescription.module.scss';
import {HouseDescriptionProps} from './HouseDescription.props';
import {ButtonSizeEnum, ButtonTypeEnum} from '@/components/Button/Button.props';

export default function HouseDescription({data}: HouseDescriptionProps) {
  return (
    <section className={style.houseDescription}>
      <div className={style.houseDescription__complectPreview}>
        <div className={style.houseDescription__complectPreviewList}>
          {data.attributes.complectationShort.map((item) => (
            <div
              key={item.children[0].text.slice(0, 5)}
              className={style.houseDescription__complectItem}
            >
              {item.children[0].text}
            </div>
          ))}
        </div>
        <Button
          appearance={ButtonTypeEnum.DARK_OUTLINE}
          size={ButtonSizeEnum.MEDIUM}
        >
          Смотреть комплектацию
        </Button>
      </div>
      <div className={style.houseDescription__text}>
        <span>
          Минималистичный дом с плоской кровлей, который со временем может расти
          с помощью добавления дополнительных модулей вбок и даже вверх, до
          двухэтажной версии.
        </span>
      </div>
    </section>
  );
}
