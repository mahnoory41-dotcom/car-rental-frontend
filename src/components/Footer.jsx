import React from 'react';
import { Car, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-16 pb-8 border-t border-gray-100 mt-8 px-6 sm:px-18 max-w-[1440px] mx-auto">
      
      {/* Top Info Row */}
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-6 pb-12 border-b border-gray-100">
        
        {/* Logo Column */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="p-2 bg-gray-100 rounded-lg">
            <Car className="w-6 h-6 text-black" />
          </div>
          <span className="font-bold text-xl text-gray-900 tracking-tight">Car Rental</span>
        </div>

        {/* Address */}
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-[#ff9500] shrink-0 mt-0.5" />
          <div>
            <p className="text-xs text-gray-400 font-bold mb-1">Address</p>
            <p className="text-sm font-semibold text-gray-900 max-w-[180px]">Main St, City Blvd, NY 10001</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3">
          <Mail className="w-5 h-5 text-[#ff9500] shrink-0 mt-0.5" />
          <div>
            <p className="text-xs text-gray-400 font-bold mb-1">Email</p>
            <p className="text-sm font-semibold text-gray-900">info@carrental.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-[#ff9500] shrink-0 mt-0.5" />
          <div>
            <p className="text-xs text-gray-400 font-bold mb-1">Contact</p>
            <p className="text-sm font-semibold text-gray-900">+996 247-1680</p>
          </div>
        </div>

      </div>

      {/* Main Footer Links */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
        
        {/* About Column */}
        <div className="md:col-span-1">
          <p className="text-xs text-gray-500 leading-relaxed mb-6 pr-4">
            Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida...
          </p>
          <div className="flex gap-3">
            {/* Facebook */}
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">
              <span className="font-bold text-xs text-gray-700">f</span>
            </div>
            {/* Instagram */}
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">
              <span className="font-bold text-xs text-gray-700">ig</span>
            </div>
            {/* Twitter */}
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">
              <span className="font-bold text-xs text-gray-700">X</span>
            </div>
          </div>
        </div>

        {/* Links 1 */}
        <div>
          <h4 className="font-bold text-gray-900 mb-6 text-sm">Useful Links</h4>
          <ul className="space-y-4 text-xs font-semibold text-gray-500">
            <li><a href="/about" className="hover:text-[#5c3ce2] transition">About Us</a></li>
            <li><a href="/" className="hover:text-[#5c3ce2] transition">Our Services</a></li>
            <li><a href="/vehicles" className="hover:text-[#5c3ce2] transition">Gallery</a></li>
            <li><a href="/contact" className="hover:text-[#5c3ce2] transition">Blog</a></li>
            <li><a href="/contact" className="hover:text-[#5c3ce2] transition">Contact</a></li>
          </ul>
        </div>

        {/* Links 2 */}
        <div>
          <h4 className="font-bold text-gray-900 mb-6 text-sm">Vehicles</h4>
          <ul className="space-y-4 text-xs font-semibold text-gray-500">
            <li><a href="/vehicles" className="hover:text-[#5c3ce2]">Sedan</a></li>
            <li><a href="/vehicles" className="hover:text-[#5c3ce2]">Sport</a></li>
            <li><a href="/vehicles" className="hover:text-[#5c3ce2]">SUV</a></li>
            <li><a href="/vehicles" className="hover:text-[#5c3ce2]">Minivan</a></li>
            <li><a href="/vehicles" className="hover:text-[#5c3ce2]">Van</a></li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h4 className="font-bold text-gray-900 mb-6 text-sm">Download App</h4>
          <div className="space-y-3">
             <button className="w-full bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition">
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center text-black text-[8px] font-bold">A</div>
              <div className="text-left">
                <p className="text-[8px] text-gray-300">Download on the</p>
                <p className="text-xs font-semibold leading-tight">App Store</p>
              </div>
            </button>
            <button className="w-full bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition">
              <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center text-black text-[8px] font-bold">G</div>
              <div className="text-left">
                <p className="text-[8px] text-gray-300">GET IT ON</p>
                <p className="text-xs font-semibold leading-tight">Google Play</p>
              </div>
            </button>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center pt-8 border-t border-gray-100">
        <p className="text-xs text-gray-400 font-medium">
          © {new Date().getFullYear()} Car Rental. All rights reserved. Design by Figma.
        </p>
      </div>

    </footer>
  );
};

export default Footer;