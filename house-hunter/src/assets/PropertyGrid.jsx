import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';

const properties = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    price: "₦450,000",
    beds: 2,
    baths: 2,
    sqft: 1200,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
  },
  // Add 5 more properties...
  {
    id: 1,
    title: "8 BedRoom Duplex Maitama",
    price: "₦1,900,000",
    beds: 8,
    baths: 8,
    sqft: 1200,
    image: "https://images.privateproperty.com.ng/large/for-sale-8-bedroom-house-for-sale-maitama-abuja-colxWPwIPPtWXKxEkTMn.jpeg"
  },

  {
    id: 1,
    title: "Modern Downtown Apartment",
    price: "₦450,000",
    beds: 2,
    baths: 2,
    sqft: 1200,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
  },
];

export default function PropertyGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
              <img 
                src={property.image} 
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-emerald-600 font-bold text-lg mb-4">{property.price}</p>
                
                <div className="flex justify-between text-gray-600">
                  <span className="flex items-center">
                    <FaBed className="mr-1" /> {property.beds}
                  </span>
                  <span className="flex items-center">
                    <FaBath className="mr-1" /> {property.baths}
                  </span>
                  <span className="flex items-center">
                    <FaRulerCombined className="mr-1" /> {property.sqft} sqft
                  </span>
                </div>
                
                <button className="mt-4 w-full bg-emerald-100 text-emerald-700 py-2 rounded-md hover:bg-emerald-200 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}