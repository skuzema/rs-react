export interface TPArrayCard {
  data: Array<TPCardForm>;
}

export interface TPCard {
  data: TPCardForm;
}

export interface TPCardForm {
  id: number;
  author: string;
  title: string;
  post: string;
  post_date: string;
  select: string;
  check: boolean;
  gender: string;
  image: string;
  img_file: File | string;
}

export interface ArticlesArray {
  articles: Article[];
}

export interface CardsArray {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface Source {
  id: string;
  name: string;
}

export interface SearchParams {
  q?: string;
  sortBy?: string;
  sources?: string;
  page?: string;
  pageSize?: string;
  searchIn?: string;
  apiKey?: string;
}
