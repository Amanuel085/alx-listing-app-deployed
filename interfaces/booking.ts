export interface BookingDetails {
  propertyName: string;
  startDate: string;
  endDate: string;
  totalNights: number;
  pricePerNight: number;
  serviceFee: number;
  totalPrice: number;
  propertyImage?: string;
  rating?: number;
  reviewCount?: number;
}

export interface OrderSummaryProps {
  bookingDetails: BookingDetails;
}
