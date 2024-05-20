import {iVideoReview} from '@/interfaces/VideoReviews.interface';
import {error} from 'console';

export async function getTextReviews() {
  try {
    const res = await fetch(
      `${process.env.KINGDOM_API_URL}/text-reviews?populate=*`,
      {
        headers: {
          Authorization: `bearer ${process.env.KINGDOM_API_KEY}`,
        },
        next: {revalidate: 600},
      },
    );
    return res.json();
  } catch (e) {
    throw error(e);
  }
}
