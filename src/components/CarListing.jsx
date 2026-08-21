import React from 'react';
import { ArrowRight, Settings, Fuel, Snowflake } from 'lucide-react';
import { Link } from 'react-router-dom';

const carsData = [
  {
    id: 1,
    name: 'Mercedes',
    type: 'Sedan',
    price: 25,
    transmission: 'Automat',
    fuel: 'PB 95',
    ac: 'Air Conditioner',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 2,
    name: 'Mercedes',
    type: 'Sport',
    price: 50,
    transmission: 'Automat',
    fuel: 'PB 95',
    ac: 'Air Conditioner',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 3,
    name: 'Mercedes',
    type: 'Sedan',
    price: 45,
    transmission: 'Automat',
    fuel: 'PB 95',
    ac: 'Air Conditioner',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 4,
    name: 'Porsche',
    type: 'SUV',
    price: 40,
    transmission: 'Automat',
    fuel: 'PB 95',
    ac: 'Air Conditioner',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 5,
    name: 'Toyota',
    type: 'Sedan',
    price: 35,
    transmission: 'Automat',
    fuel: 'PB 95',
    ac: 'Air Conditioner',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 6,
    name: 'Porsche',
    type: 'SUV',
    price: 50,
    transmission: 'Automat',
    fuel: 'PB 95',
    ac: 'Air Conditioner',
    image: 'https://images.unsplash.com/photo-1541348263662-e082662d82da?auto=format&fit=crop&q=80&w=600',
  },
];

const CarListing = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-18 py-12">
      {/* Title & View All Link */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Choose the car that<br />suits you
        </h2>
        <Link 
          to="/vehicles" 
          className="text-xs font-bold text-gray-500 hover:text-[#5c3ce2] transition-colors"
        >
          View All →
        </Link>
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {carsData.map((car) => (
          <div key={car.id} className="bg-gray-50/80 rounded-2xl p-6 border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            
            {/* Car Image Container */}
            <div className="w-full h-44 mb-6 flex items-center justify-center overflow-hidden rounded-xl bg-white p-2">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Car Details Info */}
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

              {/* Specifications List */}
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

            {/* View Details Working Link */}
            <Link 
              to={`/details/${car.id}`}
              className="w-full block text-center bg-[#5c3ce2] hover:bg-[#4b2ec7] text-white font-bold py-3 rounded-xl text-xs transition-colors shadow-sm active:scale-98"
            >
              View Details
            </Link>

          </div>
        ))}
      </div>
    </section>
  );
};

export default CarListing;