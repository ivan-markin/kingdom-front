import { GalleryProps } from "./Gallery.props";
import GallerySlider from "@/components/GallerySlider/GallerySlider";
import { getSlides } from "@/api/getSlides";
import "swiper/css";
import "swiper/css/navigation";
import style from "./Gallery.module.scss";

export default async function Gallery({}: GalleryProps) {
  const { data } = await getSlides();

  return (
    <div className={style.gallery}>
      <GallerySlider slides={data} />
    </div>
  );
}
