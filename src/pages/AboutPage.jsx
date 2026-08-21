import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Play, ChevronDown, CheckCircle2 } from 'lucide-react';

const AboutPage = () => {
  const [openFaq, setOpenFaq] = useState(0);
  
  // State for Video Player Interaction
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const reviews = [
    {
      id: 1,
      text: "At id duat nibh at sapien nisl vulputate mauris, ac vulputate hendrerit. Taciti nisi adipiscing sollicitudin pulvinar fringilla id pretium augue.",
      name: "Floyd Miles",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: 2,
      text: "Purus consectetur vel augue risus, convallis quam sodales. Duis egestas morbi nunc id, vulputate quam eleifend. Diam.",
      name: "Albert Flores",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: 3,
      text: "Quam neque odio elementum risus. Sit egestas integer in cursus fames in nisl. Augue praesent leo fames massa velit pretium aenean id egestas.",
      name: "Leslie Alexander",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    },
  ];

  const faqs = [
    {
      q: "How does it work?",
      a: "Imperdiet sit amet consectetur adipiscing elit. Ut rhoncus nunc at sit euismod vivamus. Diam in maecenas viverra in. Turpis lacus at cras hendrerit a elit condi mentum id. Condimentum integer. Risus in dictum in nunc a quis. Elementum ac rhoncus at integer vulputate at feugiat integer feugiat amet et nunc accumsan."
    },
    { q: "Can I rent a car without a credit card?", a: "Yes, you can reserve select vehicles with debit cards or cash deposits at our branch offices." },
    { q: "What are the requirements for renting a car?", a: "Valid driver's license, passport or national ID, and age above 21 years." },
    { q: "Does Car Rental allow me to tow with or attach a hitch to the rental vehicle?", a: "Towing is allowed only on designated SUVs and Pickup trucks with prior clearance." },
    { q: "Does Car Rental offer coverage products for purchase with my rental?", a: "We provide comprehensive damage waiver, third-party liability, and personal accident coverage." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-[1440px] mx-auto px-6 lg:px-18 py-10">
        
        {/* Page Title */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">About Us</h1>
          <p className="text-xs font-semibold text-gray-400 mt-3">Home / About Us</p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Where every<br />drive feels<br />extraordinary
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">Variety Brands</h3>
              <p className="text-xs text-gray-500 leading-relaxed pr-4">
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">Maximum Freedom</h3>
              <p className="text-xs text-gray-500 leading-relaxed pr-4">
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">Awesome Support</h3>
              <p className="text-xs text-gray-500 leading-relaxed pr-4">
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">Flexibility On The Go</h3>
              <p className="text-xs text-gray-500 leading-relaxed pr-4">
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              </p>
            </div>
          </div>
        </div>

        {/* Big Video Banner Box with Mercedes Driving Video */}
        <div className="relative w-full h-[360px] sm:h-[480px] rounded-3xl overflow-hidden shadow-xl mb-20 bg-gray-950 flex items-center justify-center border border-gray-100/30">
          
         {isVideoPlaying ? (
  /* YouTube Video Embed Player */
  <iframe
    className="w-full h-full object-cover"
    src="https://www.youtube.com/embed/JbPBHtLstGw?autoplay=1" 
    title="Car Driving Video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
) : (
            /* Static Image Preview with Play Button */
            <>
              <img
                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=1200"
                alt="Relevant Video Preview"
                className="w-full h-full object-cover opacity-70"
              />
              <button 
                onClick={() => setIsVideoPlaying(true)}
                className="absolute w-20 h-20 bg-[#5c3ce2] hover:bg-[#4b2ec7] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform duration-200 transform hover:scale-110 active:scale-95 cursor-pointer z-10"
              >
                <Play className="w-8 h-8 fill-current translate-x-0.5" />
              </button>
            </>
          )}

        </div>

        {/* 3 Metrics Counter Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center my-16 py-10 border-y border-gray-100">
          <div>
            <p className="text-4xl sm:text-5xl font-extrabold text-[#5c3ce2]">20k+</p>
            <p className="text-xs font-medium text-gray-500 mt-2">Happy Customers</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl font-extrabold text-[#5c3ce2]">540+</p>
            <p className="text-xs font-medium text-gray-500 mt-2">Count of Cars</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl font-extrabold text-[#5c3ce2]">25+</p>
            <p className="text-xs font-medium text-gray-500 mt-2">Years of Experience</p>
          </div>
        </div>

        {/* Memories Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-20">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
              Unlock unforgettable<br />memories on the road
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed mb-8 max-w-lg">
              Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer.
            </p>
            <div className="grid grid-cols-2 gap-y-4 gap-x-6">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#5c3ce2] shrink-0" />
                <span className="text-xs font-semibold text-gray-800">Aliquam adipiscing velit</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#5c3ce2] shrink-0" />
                <span className="text-xs font-semibold text-gray-800">Purus non eu cursus</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#5c3ce2] shrink-0" />
                <span className="text-xs font-semibold text-gray-800">Quis nunc interdum</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#5c3ce2] shrink-0" />
                <span className="text-xs font-semibold text-gray-800">Quisque eleifend</span>
              </div>
            </div>
          </div>

          <div className="h-[360px] bg-gray-100 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800"
              alt="Road Trip"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Download Our App Banner (Shared Component) */}
        <section className="my-28 relative">
          <div className="bg-[#5c3ce2] rounded-3xl p-8 lg:p-14 text-white relative flex flex-col md:flex-row items-center justify-between gap-8 min-h-[260px]">
            
            <div className="w-full md:w-5/12 flex justify-center md:justify-start items-center relative z-20">
              <div className="w-[190px] h-[370px] bg-white border-[7px] border-gray-900 rounded-[40px] shadow-2xl relative overflow-hidden -mt-16 md:-mt-20 -mb-16 md:-mb-20">
                <div className="w-16 h-3 bg-gray-900 rounded-b-md mx-auto mt-1"></div>
              </div>
            </div>

            <div className="w-full md:w-7/12 text-center md:text-left z-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">Download our app</h2>
              <p className="text-indigo-200 text-xs leading-relaxed max-w-lg mb-8 mx-auto md:mx-0">
                Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <button className="bg-black text-white px-5 py-2.5 rounded-xl flex items-center gap-2.5 hover:bg-gray-800 transition active:scale-95 cursor-pointer shadow-md">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-black text-[10px] font-bold">A</div>
                  <div className="text-left">
                    <p className="text-[8px] text-gray-300 uppercase">Download on the</p>
                    <p className="text-xs font-semibold leading-tight">App Store</p>
                  </div>
                </button>

                <button className="bg-black text-white px-5 py-2.5 rounded-xl flex items-center gap-2.5 hover:bg-gray-800 transition active:scale-95 cursor-pointer shadow-md">
                  <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center text-black text-[10px] font-bold">G</div>
                  <div className="text-left">
                    <p className="text-[8px] text-gray-300 uppercase">GET IT ON</p>
                    <p className="text-xs font-semibold leading-tight">Google Play</p>
                  </div>
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="my-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-14">
            Reviews from our customers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((rev) => (
              <div key={rev.id} className="bg-gray-50/90 rounded-2xl p-8 border border-gray-100 flex flex-col justify-between shadow-sm relative overflow-hidden">
                <div>
                  <div className="text-3xl font-serif text-[#5c3ce2] mb-3">“</div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-8 font-medium">{rev.text}</p>
                </div>
                <div className="bg-[#5c3ce2] -mx-8 -mb-8 p-4 text-white flex items-center justify-center gap-3">
                  <img src={rev.avatar} alt={rev.name} className="w-9 h-9 rounded-full object-cover border-2 border-white/30" />
                  <p className="font-bold text-xs tracking-wide">{rev.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="my-20 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12">
            Top Car Rental Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden bg-white transition-all">
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between font-bold text-sm text-gray-900 hover:bg-gray-50 transition cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-xs text-gray-500 leading-relaxed border-t border-gray-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* EXACT FIX for "Looking for a car?" Banner from Screenshot (Fix Applied) */}
        <section className="my-20 max-w-[1440px] mx-auto px-12">
          <div className="bg-[#6636e7] rounded-[30px] p-12 lg:p-16 text-white relative flex items-center min-h-[300px] shadow-2xl shadow-[#6636e7]/30 overflow-hidden">
            
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
              <img
                src="https://www.transparenttextures.com/patterns/dark-tirangles.png" // Dark triangles texture pattern
                alt="Background Texture"
                className="w-full h-full object-repeat"
              />
            </div>

            {/* Left Column: Text and Button (z-index ensure it's on top) */}
            <div className="max-w-[450px] z-10 text-left relative">
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tighter mb-2">
                Looking for a car?
              </h2>
              <div className="mb-4">
                <span className="text-3xl sm:text-4xl font-bold text-white tracking-tighter">
                  +537 547–6401
                </span>
              </div>
              <p className="text-indigo-100 text-[13px] leading-relaxed mb-10 max-w-[350px]">
                Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in...
              </p>
              
              {/* Navigates to Vehicles Page */}
              <Link 
                to="/vehicles" 
                className="bg-[#ff9500] hover:bg-[#e08300] text-white font-bold px-10 py-3.5 rounded-xl text-xs transition shadow-md active:scale-95 cursor-pointer block sm:inline-block"
              >
                Book now
              </Link>
            </div>

            {/* Right Column: Blurred Car Image (Template Matched Position) */}
            <div className="absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none z-0 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
                alt="Blurred Background Car"
                className="w-full h-auto object-contain blur-[15px] opacity-70 translate-x-[15%] scale-110"
              />
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;