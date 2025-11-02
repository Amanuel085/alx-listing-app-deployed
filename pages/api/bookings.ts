import { NextApiRequest, NextApiResponse } from 'next';

export interface BookingRequest {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  billingAddress: string;
  propertyId?: string;
  checkInDate?: string;
  checkOutDate?: string;
  totalPrice?: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string; booking?: any } | { error: string }>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const bookingData: BookingRequest = req.body;

    // Basic validation
    if (!bookingData.firstName || !bookingData.lastName || !bookingData.email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // In a real application, you would:
    // 1. Validate the payment information
    // 2. Process the payment with a payment processor
    // 3. Save the booking to a database
    // 4. Send confirmation emails

    // For this example, we'll just simulate a successful booking
    const booking = {
      id: `B-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      ...bookingData,
      bookingDate: new Date().toISOString(),
      status: 'confirmed',
    };

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return res.status(201).json({
      message: 'Booking confirmed successfully!',
      booking,
    });
  } catch (error) {
    console.error('Error processing booking:', error);
    return res.status(500).json({ error: 'Failed to process booking' });
  }
}
