import { useState } from 'react';  // <-- THIS IS THE CRUCIAL IMPORT
import { FiSearch, FiMapPin } from 'react-icons/fi';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative h-[70vh] bg-[url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Find Your Dream Home
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl">
          Discover thousands of properties with verified listings
        </p>
        
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl p-2 flex justify-between">
          <div className="flex items-center pl-4 pr-2 text-gray-500">
            <FiMapPin className="mr-2" />
            <input
              type="text"
              placeholder="Wuye, Maitama, etc."
              className="py-3 outline-none flex-grow"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition flex items-center">
            <FiSearch className="mr-2" />
            Search
          </button>
        </div>
      </div>
    </section>
  );
}