import StagesSlider from "@/components/StagesSlider/StagesSlider";
import style from "./Stages.module.scss";
import { StagesProps } from "./Stages.props";
import cn from "classnames";
import { getStageItems } from "@/api/getStageItems";

export default async function Stages({id}: StagesProps) {
  const { data } = await getStageItems();

  return (
    <div className={style.stages} id={id}>
      <h2
        className={cn("block-title", style.stages__title)}
      >
        Этапы работы
        <br />с нами
      </h2>
      <div className={style.stages__slider}>
        <StagesSlider items={data} />
      </div>
    </div>
  );
}
