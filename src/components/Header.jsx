import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Vehicles', path: '/vehicles' },
    { name: 'Details', path: '/details/1' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="p-2 bg-[#5c3ce2] text-white rounded-xl group-hover:scale-105 transition">
            <Car className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-xl text-gray-900 tracking-tight">Car Rental</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-bold transition-colors ${
                  isActive ? 'text-[#5c3ce2]' : 'text-gray-600 hover:text-[#5c3ce2]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Phone Support CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="w-10 h-10 bg-[#5c3ce2]/10 text-[#5c3ce2] rounded-full flex items-center justify-center">
            <Phone className="w-4 h-4" />
          </div>
          <div className="text-left">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Need help?</p>
            <p className="text-xs font-extrabold text-gray-900">+996 247–1680</p>
          </div>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-[#5c3ce2]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-gray-700 hover:text-[#5c3ce2] py-2"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;