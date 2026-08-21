import React from 'react';
import { MapPin, Car, Wallet } from 'lucide-react';

const InfoBlocks = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 sm:px-12 py-12 space-y-20">
      
      {/* --- INFO BLOCK 1: Features Trio --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
        {/* Availability */}
        <div className="flex flex-col items-center">
          <div className="p-4 bg-gray-50 rounded-2xl mb-4 text-black shadow-sm border border-gray-100">
            <MapPin className="w-8 h-8 stroke-[1.5]" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Availability</h3>
          <p className="text-xs text-gray-500 leading-relaxed max-w-[240px]">
            Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis
          </p>
        </div>

        {/* Comfort */}
        <div className="flex flex-col items-center">
          <div className="p-4 bg-gray-50 rounded-2xl mb-4 text-black shadow-sm border border-gray-100">
            <Car className="w-8 h-8 stroke-[1.5]" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Comfort</h3>
          <p className="text-xs text-gray-500 leading-relaxed max-w-[240px]">
            Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis
          </p>
        </div>

        {/* Savings */}
        <div className="flex flex-col items-center">
          <div className="p-4 bg-gray-50 rounded-2xl mb-4 text-black shadow-sm border border-gray-100">
            <Wallet className="w-8 h-8 stroke-[1.5]" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Savings</h3>
          <p className="text-xs text-gray-500 leading-relaxed max-w-[240px]">
            Pretium convallis id diam sed commodo vestibulum lobortis volutpat
          </p>
        </div>
      </div>

      {/* --- INFO BLOCK 2: Image + Numbered Steps --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8">
        
        {/* Left Side: Blurred Image Container / Car Image */}
        <div className="w-full h-[400px] sm:h-[480px] bg-gradient-to-tr from-indigo-900 via-indigo-600 to-blue-500 rounded-3xl overflow-hidden shadow-xl flex items-center justify-center p-4">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000"
            alt="Car Rental Experience"
            className="w-full h-full object-cover rounded-2xl shadow-inner"
          />
        </div>

        {/* Right Side: 4 Numbered Steps */}
        <div className="space-y-6">
          
          {/* Step 1 */}
          <div className="flex items-start gap-4">
            <span className="w-7 h-7 rounded-full bg-[#5c3ce2] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              1
            </span>
            <div>
              <h4 className="text-base font-bold text-gray-900 mb-1">Erat at semper</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum...
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4">
            <span className="w-7 h-7 rounded-full bg-[#5c3ce2] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              2
            </span>
            <div>
              <h4 className="text-base font-bold text-gray-900 mb-1">Urna nec vivamus risus duis arcu</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-4">
            <span className="w-7 h-7 rounded-full bg-[#5c3ce2] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              3
            </span>
            <div>
              <h4 className="text-base font-bold text-gray-900 mb-1">Lobortis euismod imperdiet tempus</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus viverra nisi
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start gap-4">
            <span className="w-7 h-7 rounded-full bg-[#5c3ce2] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
              4
            </span>
            <div>
              <h4 className="text-base font-bold text-gray-900 mb-1">Cras nulla aliquet nam eleifend amet et</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default InfoBlocks;