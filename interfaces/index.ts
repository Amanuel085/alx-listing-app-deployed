export interface PropertyProps {
  id: string;
  name: string;
  location: string;
  description?: string;
  amenities?: string[];
  rating: number;
  price: number;
  image: string;
  address?: {
    state: string;
    city: string;
    country: string;
  };
  category?: string[];
  offers?: {
    bed: string;
    shower: string;
    occupants: string;
  };
  discount?: string;
}