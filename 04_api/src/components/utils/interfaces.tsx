export interface ArticlesArray {
  articles: Article[];
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
  query: string;
  sources: string;
  sort: string;
  page: string;
  page_size: string;
}
