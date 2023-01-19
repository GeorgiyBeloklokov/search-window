export interface IItems {
  article: string;
  brand: {
    id: number;
    name: string;
  };
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface IRequest {
  searchArticles: string[];
}
