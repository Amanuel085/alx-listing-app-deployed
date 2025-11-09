import { OrderSummaryProps } from '@/interfaces/booking';

const OrderSummary: React.FC<OrderSummaryProps> = ({ bookingDetails }) => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold">Review Order Details</h2>
    <div className="flex items-center mt-4">
      <img
        src={bookingDetails.propertyImage || "https://example.com/property.jpg"}
        alt="Property"
        className="w-32 h-32 object-cover rounded-md"
      />
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
        <p className="text-sm text-gray-500">
          {bookingDetails.rating?.toFixed(2) || 'N/A'} 
          ({bookingDetails.reviewCount || 0} reviews)
        </p>
        <p className="text-sm text-gray-500">
          {bookingDetails.startDate} • {bookingDetails.totalNights} Nights
        </p>
      </div>
    </div>

    {/* Price Breakdown */}
    <div className="mt-6">
      <div className="flex justify-between">
        <p>Price per night</p>
        <p>${bookingDetails.pricePerNight} x {bookingDetails.totalNights} nights</p>
      </div>
      <div className="flex justify-between mt-2">
        <p>Service fee</p>
        <p>${bookingDetails.serviceFee}</p>
      </div>
      <div className="flex justify-between mt-2 font-semibold border-t pt-2">
        <p>Total</p>
        <p>${bookingDetails.totalPrice}</p>
      </div>
    </div>
  </div>
);

export default OrderSummary;