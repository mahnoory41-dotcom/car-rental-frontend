import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="my-6 max-w-[1440px] mx-auto px-4 sm:px-8">
      <div className="bg-[#5c3ce2] rounded-3xl p-8 lg:p-14 text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 min-h-[500px] shadow-xl">
        
        {/* Left Content */}
        <div className="max-w-xl z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none mb-6">
            Experience the road like never before
          </h1>
          <p className="text-indigo-200 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
            Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper
          </p>
          <button>
            <Link to="/vehicles" className="bg-[#ff9500] hover:bg-[#e08300] text-white font-bold px-8 py-3.5 rounded-lg text-sm transition-all shadow-md active:scale-95">
              View all cars
            </Link>
          </button>
        </div>

        {/* Right Form Box */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 text-gray-900 w-full lg:w-[420px] shadow-2xl z-10">
          <h2 className="text-2xl font-extrabold text-center mb-6">Book your car</h2>
          
<form 
  onSubmit={(e) => {
    e.preventDefault();
    alert("Searching available vehicles for your selected options!");
  }} 
  className="space-y-4"
>            <div>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3.5 text-sm text-gray-500 outline-none focus:border-indigo-500 transition">
                <option>Car type</option>
                <option value="sedan" className="text-gray-900">Sedan</option>
      <option value="suv" className="text-gray-900">SUV</option>
      <option value="cabriolet" className="text-gray-900">Cabriolet / Sport</option>
      <option value="minivan" className="text-gray-900">Minivan / Van</option>
      <option value="pickup" className="text-gray-900">Pickup Truck</option>
              </select>
            </div>

            <div>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3.5 text-sm text-gray-500 outline-none focus:border-indigo-500 transition">
<option value="" className="text-gray-900">Select Place of Rental</option>
      <option value="downtown" className="text-gray-900">Downtown Main Office (Cary, NC)</option>
      <option value="airport-t1" className="text-gray-900">International Airport - Terminal 1</option>
      <option value="airport-t2" className="text-gray-900">International Airport - Terminal 2</option>
      <option value="central-station" className="text-gray-900">Central Railway Station</option>              </select>
            </div>

            <div>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3.5 text-sm text-gray-500 outline-none focus:border-indigo-500 transition">
                <option value="" className="text-gray-900">Select Place of Return</option>
      <option value="downtown" className="text-gray-900">Downtown Main Office (Cary, NC)</option>
      <option value="airport-t1" className="text-gray-900">International Airport - Terminal 1</option>
      <option value="airport-t2" className="text-gray-900">International Airport - Terminal 2</option>
      <option value="central-station" className="text-gray-900">Central Railway Station</option>
              </select>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Rental date"
                onFocus={(e) => (e.target.type = 'date')}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3.5 text-sm text-gray-500 outline-none focus:border-indigo-500 transition"
              />
              <Calendar className="w-5 h-5 text-gray-400 absolute right-3.5 top-3.5 pointer-events-none" />
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Return date"
                onFocus={(e) => (e.target.type = 'date')}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3.5 text-sm text-gray-500 outline-none focus:border-indigo-500 transition"
              />
              <Calendar className="w-5 h-5 text-gray-400 absolute right-3.5 top-3.5 pointer-events-none" />
            </div>

            <button
              type="submit"
              className="w-full bg-[#ff9500] hover:bg-[#e08300] text-white font-bold py-3.5 rounded-lg text-sm transition-all mt-4 shadow-md active:scale-95"
            >
              Book now
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Hero;