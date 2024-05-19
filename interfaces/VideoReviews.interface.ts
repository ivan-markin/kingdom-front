export interface iVideoReview {
  id: number;
  attributes: {
    title: string;
    alias: string;
    link: string;
    video: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      };
    };
  };
}
