export interface Review {
  name: string;
  area: string;
  rating: number;
  text: string;
  date: string;
  service: string;
  vehicle: string;
}

export interface ReviewsProps {
  reviews?: Review[];
  subtitle?: string;
  autoplay?: boolean;
  autoplayInterval?: number;
}