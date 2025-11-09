import { NextApiRequest, NextApiResponse } from 'next';
import { PropertyProps as Property } from '@/interfaces';

// This is a helper function to get properties (moved from properties.ts)
const getProperties = (): Property[] => [
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
  // Add more properties as needed
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Property | { error: string }>
) {
  const { id } = req.query;

  try {
    // Get properties and find the one with matching ID
    const properties = getProperties();
    const property = properties.find((p: Property) => p.id === id);

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

    // Simulate API delay
    setTimeout(() => {
      res.status(200).json(propertyWithDetails);
    }, 100);
  } catch (error) {
    console.error('Error fetching property:', error);
    res.status(500).json({ error: 'Failed to fetch property' });
  }
}
