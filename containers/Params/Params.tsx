import {getParams} from '@/api/getParams';
import style from './Params.module.scss';
import {ParamsProps} from './Params.props';
import ParamItem from '@/components/ParamItem/ParamItem';
import {iHouseParam} from '@/interfaces/HouseParam.interface';

export default async function Params({}: ParamsProps) {
  const {data} = await getParams();

  return (
    <section className={style.params}>
      {data &&
        data
          .sort((a: iHouseParam, b: iHouseParam) => a.id - b.id)
          .map((item: iHouseParam) => (
          <ParamItem key={item.id} item={item} />
        ))}
    </section>
  );
}
