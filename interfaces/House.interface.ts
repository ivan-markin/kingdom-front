export interface iHouse {
  id: number;
  attributes: {
    createdAt: string;
    description: iDescription[];
    price: string;
    publishedAt: string;
    title: string;
    updatedAt: string;
    area: number;
    cover: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

export interface iDescription {
  type: string;
  children: {
    type: string;
    text: string;
  }[];
}
