// types/card.ts

export interface Review {
  name: string;
  area: string;
  rating: number; // typically 1 - 5
  text: string;
}


export interface ReviewsProps {
  reviews?: Review[];
  title?: string;
  subtitle?: string;
  autoplay?: boolean;
  autoplayInterval?: number;
}