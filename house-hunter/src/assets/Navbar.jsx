import { useState } from 'react';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-emerald-600 font-bold text-2xl">HouseHunter</span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-emerald-600">Buy</a>
          <a href="#" className="text-gray-700 hover:text-emerald-600">Rent</a>
          <a href="#" className="text-gray-700 hover:text-emerald-600">Agents</a>
        </nav>

        <button 
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <a href="#" className="block py-2 text-gray-700">Buy</a>
          <a href="#" className="block py-2 text-gray-700">Rent</a>
          <a href="#" className="block py-2 text-gray-700">Agents</a>
        </div>
      )}
    </header>
  );
}