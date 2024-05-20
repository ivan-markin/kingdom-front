import {iTextReview} from '@/interfaces/TextReviews.interface';

export interface ReviewCardProps {
  review: iTextReview | null;
  closeHandler: () => void;
}
