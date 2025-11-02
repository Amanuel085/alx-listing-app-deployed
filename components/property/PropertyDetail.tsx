import { PropertyProps } from "@/interfaces";
import Image from "next/image";

interface PropertyDetailProps {
  property: PropertyProps;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  const { name, image, price, rating, location, description, amenities } = property;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative h-96">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-lg object-cover"
            priority
          />
        </div>
        <div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-semibold">${price} <span className="text-gray-500 text-lg">night</span></h2>
              <p className="text-gray-600">{location}</p>
            </div>
            <div className="flex items-center bg-blue-100 px-3 py-1 rounded-full">
              <span className="text-yellow-500 mr-1">★</span>
              <span>{rating}</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">About this property</h3>
            <p className="text-gray-700">{description || 'No description available.'}</p>
          </div>
          
          {amenities && amenities.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Amenities</h3>
              <div className="grid grid-cols-2 gap-2">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
