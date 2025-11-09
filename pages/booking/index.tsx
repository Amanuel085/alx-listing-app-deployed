import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    propertyImage: "/images/villa-arrecife.jpg",
    pricePerNight: 2500,
    serviceFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
    endDate: "27 August 2024",
    totalPrice: 7565,
    rating: 4.8,
    reviewCount: 124
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BookingForm />
        <OrderSummary bookingDetails={bookingDetails} />
      </div>
      <CancellationPolicy />
    </div>
  );
}