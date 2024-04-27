import Image from "next/image";
import style from "./KeyFeatures.module.scss";
import { KeyFeaturesProps } from "./KeyFeatures.props";
import cn from "classnames";
import { getFeatures } from "@/api/getFeatures";
import { iKeyFeature } from "@/interfaces/KeyFeature.interface";

export default async function KeyFeatures({}: KeyFeaturesProps) {  
  const { data } = await getFeatures();
  // const itemRef = useRef<HTMLDivElement>(null);
  // const imageRef = useRef<HTMLImageElement>(null);

  // useEffect(() => {
  //   const item = itemRef.current;
    
  //   const moveImage = (e: MouseEvent) => {
  //     const root = document.documentElement;
  //     root.style.setProperty('--key-feature-image-1-left', `${e.x}px`);
  //     root.style.setProperty('--key-feature-image-1-top', `${e.y}px`);
  //   }

  //   if (item !== null) {
  //     item.addEventListener('mousemove', moveImage);
  //   }

  //   return () => item?.removeEventListener('mousemove', moveImage);    
  // }, [])
  
  return (
    <div className={style.keyFeatures}>
      {data && data.map((item: iKeyFeature, i: number) => (
        <div className={style.keyFeatures__item} key={item.id}>
          {i !== 1 && (
            <Image
              className={style.keyFeatures__itemImage}
              src={`/key-feature-${i + 1}.png`}
              width={355}
              height={216}
              alt=""              
            />
          )}

          <div className={style.keyFeatures__title}>
            <h2 className={cn("block-title")}>{item.attributes.title}</h2>
          </div>
          <span className={cn("regular-text", style.keyFeatures__description)}>
            {item.attributes.description}
          </span>
        </div>
      ))}
    </div>
  );
}
