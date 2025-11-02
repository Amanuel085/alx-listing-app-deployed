import { NextApiRequest, NextApiResponse } from 'next';

interface Property {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  location: string;
}

const properties: Property[] = [
  {
    id: '1',
    name: 'Modern Apartment',
    image: 'https://picsum.photos/600/400?random=1',
    price: 120,
    rating: 4.8,
    location: 'New York, NY',
  },
  {
    id: '2',
    name: 'Cozy Studio',
    image: 'https://picsum.photos/600/400?random=2',
    price: 85,
    rating: 4.5,
    location: 'Brooklyn, NY',
  },
  {
    id: '3',
    name: 'Luxury Penthouse',
    image: 'https://picsum.photos/600/400?random=3',
    price: 250,
    rating: 4.9,
    location: 'Manhattan, NY',
  },
];

// GET /api/properties - Get all properties
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Property[] | { error: string }>
) {
  try {
    // Simulate API delay
    setTimeout(() => {
      res.status(200).json(properties);
    }, 100);
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ error: 'Failed to fetch properties' });
  }
}
