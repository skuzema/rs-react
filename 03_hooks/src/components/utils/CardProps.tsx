export interface TPArrayCard {
  data: Array<{
    id: number;
    author: string;
    title: string;
    post: string;
    post_date: string;
    select: string;
    check: boolean;
    gender: string;
    image: string;
    img_file: File | undefined;
  }>;
}

export interface TPCard {
  data: {
    id: number;
    author: string;
    title: string;
    post: string;
    post_date: string;
    select: string;
    check: boolean;
    gender: string;
    image: string;
    img_file: File | undefined;
  };
}
