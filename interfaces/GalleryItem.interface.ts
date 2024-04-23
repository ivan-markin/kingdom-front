export interface iGalleryItem {
  id: number;
  attributes: {
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
    photo: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}
