export interface iHousePage {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    description: string;
    complectationShort: any[];
    alias: string;
    interiorImages: {
      data: IHouseImage[];
    };
    exteriorImages: {
      data: IHouseImage[];
    };
    layoutParams: ILayoutParam[];
    layoutImages: {
      data: ILayoutImage[];
    };
    complectation_items: {
      data: IComplectationItem[];
    };
    heroImage: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      };
    };
  };
}

interface IHouseImage {
  id: number;
  attributes: {
    url: string;
    formats: {
      thumbnail: {
        url: string;
      };
    };
  };
}

interface ILayoutParam {
  type: string;
  children: [
    {
      text: string;
      type: string;
    },
  ];
}

interface ILayoutImage {
  id: number;
  attributes: {
    url: string;
  };
}

interface IComplectationItem {
  id: number;
  attributes: {
    title: string;
    house26: string | null;
    house48: string | null;
    house62: string | null;
    image: {
      image: {
        url: string;
      };
    }[];
  };
}
