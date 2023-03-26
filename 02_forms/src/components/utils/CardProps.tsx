export interface CardProps {
  cardData: Array<{
    author: string;
    title: string;
    post: string;
    post_date: string;
    select: number;
    check: boolean;
    gender: number;
    image: string;
  }>;
}
