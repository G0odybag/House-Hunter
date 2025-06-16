import { useParams } from "react-router-dom";
import properties from "./properties";

export default function PropertyDisplay() {
  const params = useParams();
  const id = params.pid;
  const property = properties.find((p) => p.id === parseInt(id));
  if (!property) {
    return (
      <div className="flex flex-col items-center mt-[60px] text-[#b00] font-[1.3rem]">
        <h2>Property Not Found</h2>
        <p>The property you are looking for does not exist.</p>
      </div>
    );
  }
  console.log(property);
  return (
    <div className="flex justify-center items-start min-h-[80vh] bg-gradient-to-br from-blue-50 to-white py-10">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full flex flex-col items-center overflow-hidden p-6">
        <div className="flex items-center justify-center w-full bg-gray-100 p-6">
          <img
            src={property.image}
            alt={property.title}
            className="rounded-xl object-cover w-full max-w-md h-72 md:h-96 shadow-lg border-4 border-white mx-auto"
          />
        </div>
        <div className="w-full flex flex-col justify-between p-4">
          <h1 className="font-bold text-3xl mb-4 text-gray-800 text-center">
            {property.title}
          </h1>
          <div className="grid grid-cols-2 gap-4 mb-4 text-lg font-semibold w-full max-w-lg mx-auto">
            <span className="text-center">{property.price}</span>
            <span className="text-center">{property.sqft} sqft</span>
            <span className="text-center">{property.beds} Bedrooms</span>
            <span className="text-center">{property.baths} Baths</span>
          </div>
          <div className="text-gray-700 text-base leading-relaxed mt-4 text-center">
            {property.description}
          </div>
        </div>
      </div>
    </div>
  );
}
