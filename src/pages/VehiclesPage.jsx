import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BrandLogos from '../components/BrandLogos';
import { Settings, Fuel, Snowflake, Car } from 'lucide-react';

const allVehicles = [
  {
    id: 1,
    name: 'Mercedes-Benz C-Class',
    type: 'Sedan',
    price: 25,
    transmission: 'Automat',
    fuel: 'PB 95',
    ac: 'Air Conditioner',
    category: 'Sedan',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 2,
    name: 'Mercedes AMG GT',
    type: 'Sport',
    price: 50,
    transmission: 'Manual',
    fuel: 'PB 95',
    ac: 'Air Conditioner',
    category: 'Cabriolet',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 3,
    name: 'BMW 4 Series',
    type: 'Sedan',
    price: 45,
    transmission: 'Automat',
    fuel: 'PB 95',
    ac: 'Air Conditioner',
    category: 'Sedan',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 4,
    name: 'Porsche Macan',
    type: 'SUV',
    price: 40,
    transmission: 'Automat',
    fuel: 'PB 95',
    ac: 'Air Conditioner',
    category: 'SUV',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 5,
    name: 'Toyota Camry',
    type: 'Sedan',
    price: 35,
    transmission: 'Manual',
    fuel: 'PB 95',
    ac: 'Air Conditioner',
    category: 'Sedan',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 6,
    name: 'Porsche Cayenne',
    type: 'SUV',
    price: 50,
    transmission: 'Automat',
    fuel: 'PB 95',
    ac: 'Air Conditioner',
    category: 'SUV',
    image: 'https://images.unsplash.com/photo-1541348263662-e082662d82da?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 7,
    name: 'Mercedes Sprinter',
    type: 'Van',
    price: 50,
    transmission: 'Automat',
    fuel: 'PB 95',
    ac: 'Air Conditioner',
    category: 'Minivan',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 8,
    name: 'Ford Raptor',
    type: 'Truck',
    price: 65,
    transmission: 'Automat',
    fuel: 'Diesel',
    ac: 'Air Conditioner',
    category: 'Pickup',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 9,
    name: 'Maybach S-Class',
    type: 'Sedan',
    price: 70,
    transmission: 'Automat',
    fuel: 'PB 95',
    ac: 'Air Conditioner',
    category: 'Sedan',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=600',
  },
];

const categories = ['All vehicles', 'Sedan', 'Cabriolet', 'Pickup', 'SUV', 'Minivan'];

const VehiclesPage = () => {
  const [activeTab, setActiveTab] = useState('All vehicles');

  const filteredVehicles = activeTab === 'All vehicles'
    ? allVehicles
    : allVehicles.filter(car => car.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-[1440px] mx-auto px-6 sm:px-12 py-10">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-8 tracking-tight">
          Select a vehicle group
        </h1>

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-4 mb-12">
          {categories.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#5c3ce2] text-white shadow-md scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Dynamic Cars Grid */}
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((car) => (
              <div
                key={car.id}
                className="bg-gray-50/80 rounded-2xl p-6 border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
              >
                {/* Image Container */}
                <div className="w-full h-48 mb-6 flex items-center justify-center overflow-hidden rounded-xl bg-white p-2">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Car Details */}
                <div>
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <h3 className="text-base font-bold text-gray-900">{car.name}</h3>
                      <p className="text-xs text-gray-400 font-medium">{car.type}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-[#5c3ce2]">${car.price}</span>
                      <span className="text-[10px] text-gray-400 block font-medium">per day</span>
                    </div>
                  </div>

                  {/* Specs Features */}
                  <div className="flex items-center justify-between text-[11px] text-gray-500 border-t border-gray-200/60 pt-4 mb-6">
                    <div className="flex items-center gap-1.5">
                      <Settings className="w-3.5 h-3.5 text-gray-400" />
                      <span>{car.transmission}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Fuel className="w-3.5 h-3.5 text-gray-400" />
                      <span>{car.fuel}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Snowflake className="w-3.5 h-3.5 text-gray-400" />
                      <span>{car.ac}</span>
                    </div>
                  </div>
                </div>

                {/* Router Link Navigation to Dynamic Details Page */}
                <Link
                  to={`/details/${car.id}`}
                  className="w-full block text-center bg-[#5c3ce2] hover:bg-[#4b2ec7] text-white font-bold py-3 rounded-xl text-xs transition-colors shadow-sm active:scale-98"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State Handling */
          <div className="text-center py-16 bg-gray-50 rounded-3xl border border-gray-100">
            <Car className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-base font-bold text-gray-700">No vehicles available in this category</p>
            <p className="text-xs text-gray-400 mt-1">Please select another category like Sedan or SUV.</p>
          </div>
        )}
      </main>

      {/* Brand Logos */}
      <BrandLogos />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default VehiclesPage;