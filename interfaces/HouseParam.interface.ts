export interface iHouseParam {
  id: number;
  attributes: {
    createdAt: string;
    shortDescription: string;
    longDescription: string;
    publishedAt: string;
    updatedAt: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}
