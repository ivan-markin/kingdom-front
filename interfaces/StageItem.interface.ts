export interface iStage {
  id: number;
  attributes: {
    createdAt: string;
    description: string;
    publishedAt: string;
    title: string;
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
