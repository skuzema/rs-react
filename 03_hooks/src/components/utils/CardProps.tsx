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
