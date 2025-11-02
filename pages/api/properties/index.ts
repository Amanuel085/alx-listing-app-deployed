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

// GET /api/properties - Get all properties or a single property by ID
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Property | Property[] | { error: string }>
) {
  try {
    const { id } = req.query;

    // If an ID is provided, return a single property
    if (id) {
      const property = properties.find(p => p.id === id);
      if (!property) {
        return res.status(404).json({ error: 'Property not found' });
      }
      
      // Add more detailed information for the property detail page
      const propertyWithDetails = {
        ...property,
        description: `This beautiful ${property.name.toLowerCase()} is located in the heart of ${property.location}. It features modern amenities and provides a comfortable stay for all guests.`,
        amenities: [
          'Free WiFi',
          'Air Conditioning',
          'Kitchen',
          'TV',
          'Washer',
          'Free Parking',
          'Pool',
          'Gym'
        ].slice(0, Math.floor(Math.random() * 5) + 3) // Randomly select 3-7 amenities
      };
      
      return res.status(200).json(propertyWithDetails);
    }

    // If no ID, return all properties
    res.status(200).json(properties);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while processing your request' });
  }
}
