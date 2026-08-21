import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CarListing from '../components/CarListing';
import { Settings, Fuel, DoorClosed, Snowflake, Users, Gauge, CheckCircle2, X, CreditCard, Smartphone } from 'lucide-react';

// Dynamic Cars Data Array with Realistic Specs & Equipment per Car
const allCars = [
  {
    id: '1',
    name: 'Mercedes-Benz C-Class',
    type: 'Sedan',
    price: 25,
    transmission: 'Automat',
    fuel: 'PB 95',
    ac: 'Yes',
    doors: 4,
    seats: 5,
    distance: 'Unlimited',
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
    ],
    equipment: ['ABS', 'Air Bags', 'Cruise Control', 'Air Conditioner', 'Bluetooth', 'Parking Sensors']
  },
  {
    id: '2',
    name: 'Mercedes AMG GT',
    type: 'Sport',
    price: 50,
    transmission: 'Manual',
    fuel: 'Petrol Octane',
    ac: 'Yes',
    doors: 2,
    seats: 2,
    distance: '300 km/day',
    images: [
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800',
    ],
    equipment: ['ABS', 'Dual Air Bags', 'Sport Exhaust', 'Air Conditioner', 'Launch Control', 'Leather Interior']
  },
  {
    id: '3',
    name: 'BMW 4 Series',
    type: 'Sedan',
    price: 45,
    transmission: 'Automat',
    fuel: 'Petrol',
    ac: 'Yes',
    doors: 4,
    seats: 5,
    distance: 'Unlimited',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800',
    ],
    equipment: ['ABS', 'Air Bags', 'Adaptive Cruise Control', 'Climate Control', 'Heated Seats', '360 Camera']
  },
  {
    id: '4',
    name: 'Porsche Macan',
    type: 'SUV',
    price: 40,
    transmission: 'Automat',
    fuel: 'Diesel / Petrol',
    ac: 'Yes',
    doors: 5,
    seats: 5,
    distance: '500 km/day',
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1541348263662-e082662d82da?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
    ],
    equipment: ['ABS', 'All-wheel Drive', 'Air Bags', 'Tri-zone AC', 'Panoram Roof', 'Bose Sound']
  },
  {
    id: '5',
    name: 'Toyota Camry',
    type: 'Sedan',
    price: 35,
    transmission: 'Manual',
    fuel: 'Hybrid / Petrol',
    ac: 'Yes',
    doors: 4,
    seats: 5,
    distance: 'Unlimited',
    images: [
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800',
    ],
    equipment: ['ABS', 'Safety Sense', 'Air Bags', 'Air Conditioner', 'Eco Assistant', 'Bluetooth']
  },
  {
    id: '6',
    name: 'Porsche Cayenne',
    type: 'SUV',
    price: 50,
    transmission: 'Automat',
    fuel: 'Petrol',
    ac: 'Yes',
    doors: 5,
    seats: 5,
    distance: '450 km/day',
    images: [
      'https://images.unsplash.com/photo-1541348263662-e082662d82da?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
    ],
    equipment: ['ABS', 'Air Suspension', 'Side Air Bags', 'Air Conditioner', 'Off-road Mode', 'Burmester Audio']
  }
];

const CarDetailsPage = () => {
  const { id } = useParams();

  // Find dynamic car object
  const currentCar = allCars.find((item) => String(item.id) === String(id)) || allCars[0];

  const [selectedImage, setSelectedImage] = useState(currentCar.images[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    paymentMethod: 'card', // 'card', 'easypaisa', 'jazzcash'
  });

  const [formError, setFormError] = useState('');

  useEffect(() => {
    setSelectedImage(currentCar.images[0]);
  }, [id, currentCar]);

  const technicalSpecs = [
    { label: 'Gear Box', value: currentCar.transmission, icon: Settings },
    { label: 'Fuel', value: currentCar.fuel, icon: Fuel },
    { label: 'Doors', value: currentCar.doors, icon: DoorClosed },
    { label: 'Air Conditioner', value: currentCar.ac, icon: Snowflake },
    { label: 'Seats', value: currentCar.seats, icon: Users },
    { label: 'Distance', value: currentCar.distance, icon: Gauge },
  ];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    
    // Strict Validation Logic
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setFormError('Please fill in all required fields before proceeding.');
      return;
    }

    setFormError('');
    alert(`Success! Booking request for ${currentCar.name} using ${formData.paymentMethod.toUpperCase()} received.`);
    
    // Reset State
    setFormData({ fullName: '', email: '', phone: '', paymentMethod: 'card' });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-[1440px] mx-auto px-6 sm:px-12 py-10">
        
        {/* Top Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start">
          
          {/* Left Column: Images */}
          <div>
            <div className="mb-6">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                {currentCar.name}
              </h1>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-extrabold text-[#5c3ce2]">${currentCar.price}</span>
                <span className="text-xs text-gray-400 font-medium">/ day</span>
              </div>
            </div>

            <div className="w-full h-[320px] sm:h-[380px] bg-gray-50 rounded-3xl p-4 border border-gray-100 flex items-center justify-center overflow-hidden mb-4 shadow-sm">
              <img
                src={selectedImage}
                alt={currentCar.name}
                className="w-full h-full object-cover rounded-2xl transition-all duration-300"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {currentCar.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`h-24 sm:h-28 bg-gray-50 rounded-2xl overflow-hidden cursor-pointer border-2 transition-all p-1 ${
                    selectedImage === img ? 'border-[#5c3ce2] shadow-md scale-102' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover rounded-xl" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Specs & Equipment */}
          <div>
            <h2 className="text-lg font-extrabold text-gray-900 mb-6">Technical Specification</h2>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {technicalSpecs.map((spec, idx) => {
                const IconComponent = spec.icon;
                return (
                  <div key={idx} className="bg-gray-50/80 p-4 rounded-2xl border border-gray-100/80 flex flex-col justify-between">
                    <IconComponent className="w-5 h-5 text-gray-800 mb-3" />
                    <div>
                      <p className="text-[11px] font-bold text-gray-900 leading-tight">{spec.label}</p>
                      <p className="text-[10px] text-gray-400 font-medium mt-0.5">{spec.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-[#5c3ce2] hover:bg-[#4b2ec7] text-white font-bold px-10 py-3.5 rounded-xl text-xs transition-colors shadow-md active:scale-95 mb-10 cursor-pointer"
            >
              Rent a car
            </button>

            <div>
              <h2 className="text-lg font-extrabold text-gray-900 mb-4">Car Equipment</h2>
              <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                {currentCar.equipment.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#5c3ce2] shrink-0" />
                    <span className="text-xs font-semibold text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        <div className="pt-8 border-t border-gray-100">
          <CarListing />
        </div>
      </main>

      {/* Booking Form Modal with Payment Methods & Strict Validation */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative">
            <button 
              onClick={() => {
                setIsModalOpen(false);
                setFormError('');
              }}
              className="absolute right-5 top-5 p-2 text-gray-400 hover:text-gray-700 rounded-full bg-gray-100 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-12 h-12 bg-[#5c3ce2]/10 text-[#5c3ce2] rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-extrabold text-gray-900 mb-1">Rent {currentCar.name}</h3>
            <p className="text-xs text-gray-500 mb-5">
              Total Rate: <span className="font-extrabold text-[#5c3ce2]">${currentCar.price}/day</span>
            </p>

            {formError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl font-semibold">
                {formError}
              </div>
            )}

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Full Name *</label>
                <input 
                  type="text" 
                  placeholder="e.g. Ali Ahmed" 
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#5c3ce2] font-medium" 
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Email Address *</label>
                <input 
                  type="email" 
                  placeholder="e.g. ali@example.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#5c3ce2] font-medium" 
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Phone Number *</label>
                <input 
                  type="tel" 
                  placeholder="e.g. +92 300 1234567" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#5c3ce2] font-medium" 
                />
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-[10px] font-bold uppercase text-gray-400 mb-2">Select Payment Method</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1 transition text-[10px] font-bold cursor-pointer ${
                      formData.paymentMethod === 'card'
                        ? 'border-[#5c3ce2] bg-[#5c3ce2]/10 text-[#5c3ce2]'
                        : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Card</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'easypaisa' })}
                    className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1 transition text-[10px] font-bold cursor-pointer ${
                      formData.paymentMethod === 'easypaisa'
                        ? 'border-green-600 bg-green-50 text-green-700'
                        : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>EasyPaisa</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'jazzcash' })}
                    className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1 transition text-[10px] font-bold cursor-pointer ${
                      formData.paymentMethod === 'jazzcash'
                        ? 'border-red-600 bg-red-50 text-red-700'
                        : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>JazzCash</span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#5c3ce2] hover:bg-[#4b2ec7] text-white font-bold py-3.5 rounded-xl text-xs transition shadow-md cursor-pointer mt-2"
              >
                Confirm & Pay
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CarDetailsPage;