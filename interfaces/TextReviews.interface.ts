export interface iTextReview {
  id: number;
  attributes: {
    name: string;
    content: string;
    alias: string;
    images: {
      data: iTextReviewImage[];
    };
  };
}

interface iTextReviewImage {
  id: number;
  attributes: {
    url: string;
  };
}
