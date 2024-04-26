import { getFaqItems } from "@/api/getFaqItems";
import FaqList from "../FaqList/FaqList";
import style from "./FAQ.module.scss";
import { FaqProps } from "./FAQ.props";

export default async function Faq({id}: FaqProps) {
  const { data } = await getFaqItems();

  return (
    <div className={style.faq} id={id}>
      <div className={style.faq__title}>
        <h2 className={"block-title"}>Часто задаваемые вопросы</h2>
      </div>
      <div className={style.faq__content}>
        <FaqList items={data} />
      </div>
    </div>
  );
}
