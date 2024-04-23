export interface iIncludedItem {
  id: number;
  attributes: {
    description: string;
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
    icon: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}
