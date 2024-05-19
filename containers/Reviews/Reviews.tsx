import style from './Reviews.module.scss';
import {ReviewsProps} from './Reviews.props';
import cn from 'classnames';
import {getVideoReviews} from '@/api/getVideoReviews';
import VideoReviewsSlider from '@/components/VideoReviewsSlider/VideoReviewsSlider';

export default async function Reviews({}: ReviewsProps) {
  const {data: videoReviews} = await getVideoReviews();

  return (
    <div className={style.reviews}>
      <h2 className={cn('block-title', style.reviews__title)}>Отзывы</h2>
      <VideoReviewsSlider slides={videoReviews} />
    </div>
  );
}
