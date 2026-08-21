import React from 'react';
import { Mail } from 'lucide-react';

const BottomBanner = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 sm:px-12 py-8">
      <div className="bg-[#5c3ce2] rounded-3xl p-10 md:p-14 text-white relative overflow-hidden shadow-lg flex flex-col md:flex-row items-center justify-between gap-8 min-h-[300px]">
        
        {/* Right Side Front-Facing Blue/Dark Car Image */}
        <div className="absolute right-0 bottom-0 top-0 w-full md:w-1/2 pointer-events-none z-0 flex items-end justify-end opacity-40 md:opacity-100">
          <img
            src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800"
            alt="Front Facing Sports Car"
            className="w-[350px] md:w-[480px] h-auto object-contain translate-x-12 translate-y-6"
          />
        </div>

        {/* Left Content */}
        <div className="max-w-md relative z-10 w-full text-center md:text-left">
          <h2 className="text-3xl font-extrabold mb-4 leading-tight">
            Enjoy every mile with<br />adorable companionship.
          </h2>
          <p className="text-indigo-200 text-xs mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, non eu cursus porttitor tristique et gravida.
          </p>
          
          <div className="flex items-center bg-white rounded-xl p-2 w-full max-w-sm mx-auto md:mx-0 shadow-lg">
            <Mail className="text-gray-400 w-5 h-5 ml-3 mr-2" />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-transparent outline-none text-gray-700 text-sm"
            />
            <button className="bg-[#ff9500] hover:bg-[#e08300] text-white font-bold px-6 py-2.5 rounded-lg text-sm transition shrink-0">
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BottomBanner;