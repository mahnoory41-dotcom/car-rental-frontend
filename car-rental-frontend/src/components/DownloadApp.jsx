import React from 'react';

const DownloadApp = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 sm:px-12 py-12 lg:py-16 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 max-w-5xl mx-auto">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Download<br className="hidden sm:block" /> mobile app
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend.
          </p>
          
          {/* App Download Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <button className="bg-black text-white px-4 sm:px-5 py-2.5 rounded-xl flex items-center gap-2.5 hover:bg-gray-800 transition active:scale-95">
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-black text-[10px] font-bold">A</div>
              <div className="text-left">
                <p className="text-[8px] text-gray-300 uppercase tracking-wider">Download on the</p>
                <p className="text-xs sm:text-sm font-semibold leading-tight">App Store</p>
              </div>
            </button>

            <button className="bg-black text-white px-4 sm:px-5 py-2.5 rounded-lg flex items-center gap-2.5 hover:bg-gray-800 transition active:scale-95">
              <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center text-black text-[10px] font-bold">G</div>
              <div className="text-left">
                <p className="text-[8px] text-gray-300 uppercase tracking-wider">GET IT ON</p>
                <p className="text-xs sm:text-sm font-semibold leading-tight">Google Play</p>
              </div>
            </button>
          </div>
        </div>

        {/* Right Content - Fully Responsive Mobile Mockups */}
        <div className="flex-1 w-full flex justify-center items-center py-4">
          <div className="relative w-[280px] sm:w-[340px] h-[320px] sm:h-[380px] flex justify-center items-center">
            
            {/* Back Phone */}
            <div className="absolute right-2 sm:right-4 top-2 w-[140px] sm:w-[170px] h-[280px] sm:h-[340px] bg-gray-50 border-[5px] sm:border-[6px] border-gray-900 rounded-[28px] sm:rounded-[32px] shadow-lg transform rotate-6 z-0">
              <div className="w-12 h-3 bg-gray-900 rounded-b-md mx-auto mt-1"></div>
            </div>

            {/* Front Phone */}
            <div className="absolute left-2 sm:left-4 top-0 w-[140px] sm:w-[170px] h-[280px] sm:h-[340px] bg-white border-[5px] sm:border-[6px] border-gray-900 rounded-[28px] sm:rounded-[32px] shadow-2xl z-10 transform -rotate-3">
              <div className="w-12 h-3 bg-gray-900 rounded-b-md mx-auto mt-1"></div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default DownloadApp;