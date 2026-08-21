import React from 'react';
import { Car, MapPin, Store, UserCheck } from 'lucide-react';

const FactsBanner = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 sm:px-12 py-8">
      <div className="bg-[#5c3ce2] rounded-3xl p-10 md:p-14 text-white text-center relative overflow-hidden shadow-lg">
        
        {/* Background Dark Sports Car Image */}
        <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
            alt="Facts Background Car"
            className="w-full h-full object-cover filter grayscale"
          />
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl font-extrabold mb-3">Facts In Numbers</h2>
          <p className="text-indigo-200 text-sm max-w-lg mx-auto mb-10 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, non eu cursus porttitor tristique et gravida.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            
            {/* Stat 1 */}
            <div className="bg-white text-gray-900 rounded-2xl p-4 flex items-center justify-center gap-4 shadow-md">
              <div className="w-12 h-12 bg-orange-100 text-[#ff9500] rounded-xl flex items-center justify-center shrink-0">
                <Car className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-extrabold text-xl leading-none">500+</p>
                <p className="text-xs text-gray-500 font-medium mt-1">Cars</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white text-gray-900 rounded-2xl p-4 flex items-center justify-center gap-4 shadow-md">
              <div className="w-12 h-12 bg-orange-100 text-[#ff9500] rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-extrabold text-xl leading-none">20K+</p>
                <p className="text-xs text-gray-500 font-medium mt-1">Customers</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white text-gray-900 rounded-2xl p-4 flex items-center justify-center gap-4 shadow-md">
              <div className="w-12 h-12 bg-orange-100 text-[#ff9500] rounded-xl flex items-center justify-center shrink-0">
                <Store className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-extrabold text-xl leading-none">35+</p>
                <p className="text-xs text-gray-500 font-medium mt-1">Stores</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="bg-white text-gray-900 rounded-2xl p-4 flex items-center justify-center gap-4 shadow-md">
              <div className="w-12 h-12 bg-orange-100 text-[#ff9500] rounded-xl flex items-center justify-center shrink-0">
                <UserCheck className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-extrabold text-xl leading-none">20m+</p>
                <p className="text-xs text-gray-500 font-medium mt-1">Users</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FactsBanner;