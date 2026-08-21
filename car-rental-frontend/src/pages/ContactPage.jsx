import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BrandLogos from '../components/BrandLogos';
import { Calendar, MapPin, Mail, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
const blogPosts = [
  {
    id: 1,
    title: 'How To Choose The Right Car',
    category: 'News',
    date: '12 April 2024',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 2,
    title: 'Which plan is right for me?',
    category: 'News',
    date: '12 April 2024',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 3,
    title: 'Enjoy Speed, Choice & Total Control',
    category: 'News',
    date: '12 April 2024',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=600',
  },
];

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-[1440px] mx-auto px-6 sm:px-12 py-10">
        
        {/* 1. Hero / Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Contact Us</h1>
          <p className="text-xs font-semibold text-gray-400 mt-2">Home / Contact Us</p>
        </div>

        {/* 2. Form + Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Purple Form Box (4 Columns) */}
          <div className="lg:col-span-5 bg-[#5c3ce2] rounded-3xl p-8 text-white shadow-xl flex flex-col justify-center">
            <h2 className="text-2xl font-extrabold text-center mb-6">Book your car</h2>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <select className="w-full bg-white/10 border border-white/20 rounded-xl p-3.5 text-xs text-white outline-none focus:bg-white/20 transition">
                  <option className="text-gray-900">Car type</option>
                  <option className="text-gray-900">Sedan</option>
                  <option className="text-gray-900">SUV</option>
                  <option className="text-gray-900">Cabriolet</option>
                </select>
              </div>

              <div>
                <select className="w-full bg-white/10 border border-white/20 rounded-xl p-3.5 text-xs text-white outline-none focus:bg-white/20 transition">
                  <option className="text-gray-900">Place of rental</option>
                  <option className="text-gray-900">Main Office (City Center)</option>
                  <option className="text-gray-900">Airport Terminal 1</option>
                </select>
              </div>

              <div>
                <select className="w-full bg-white/10 border border-white/20 rounded-xl p-3.5 text-xs text-white outline-none focus:bg-white/20 transition">
                  <option className="text-gray-900">Place of return</option>
                  <option className="text-gray-900">Main Office (City Center)</option>
                  <option className="text-gray-900">Airport Terminal 1</option>
                </select>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Rental date"
                  onFocus={(e) => (e.target.type = 'date')}
                  className="w-full bg-white/10 border border-white/20 rounded-xl p-3.5 text-xs text-white placeholder-white/70 outline-none focus:bg-white/20 transition"
                />
                <Calendar className="w-4 h-4 text-white/70 absolute right-3.5 top-3.5 pointer-events-none" />
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Return date"
                  onFocus={(e) => (e.target.type = 'date')}
                  className="w-full bg-white/10 border border-white/20 rounded-xl p-3.5 text-xs text-white placeholder-white/70 outline-none focus:bg-white/20 transition"
                />
                <Calendar className="w-4 h-4 text-white/70 absolute right-3.5 top-3.5 pointer-events-none" />
              </div>

              <Link 
  to="/vehicles" 
  className="bg-[#ff9500] hover:bg-[#e08300] text-white font-bold px-10 py-3.5 rounded-xl text-xs transition shadow-md inline-block text-center cursor-pointer active:scale-95"
>
  Book now
</Link>
            </form>
          </div>

         {/* Right Side Image Box (7 Columns) */}
          <div className="lg:col-span-7 bg-gray-100 rounded-3xl overflow-hidden shadow-lg min-h-[420px] flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Car Banner"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* 3. Contacts Info Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8 mb-16 border-y border-gray-100">
          
          {/* Address */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#ff9500] rounded-full flex items-center justify-center text-white shrink-0 shadow-md">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-400">Address</p>
              <p className="text-xs font-bold text-gray-900 mt-0.5">Oxford Ave. Cary, NC 27511</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#ff9500] rounded-full flex items-center justify-center text-white shrink-0 shadow-md">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-400">Email</p>
              <p className="text-xs font-bold text-gray-900 mt-0.5">nwiger@yahoo.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#ff9500] rounded-full flex items-center justify-center text-white shrink-0 shadow-md">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-400">Phone</p>
              <p className="text-xs font-bold text-gray-900 mt-0.5">+537 547–6401</p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#ff9500] rounded-full flex items-center justify-center text-white shrink-0 shadow-md">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-400">Opening hours</p>
              <p className="text-xs font-bold text-gray-900 mt-0.5">Sun–Mon: 10am – 10pm</p>
            </div>
          </div>

        </div>

        {/* 4. Latest Blog Posts & News */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10 tracking-tight">
            Latest blog posts & news
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                <div className="h-52 bg-gray-100 rounded-2xl overflow-hidden mb-4 shadow-sm border border-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-[#5c3ce2] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[11px] text-gray-400 font-medium">
                  {post.category} / {post.date}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* 5. Brand Logos */}
      <BrandLogos />

      {/* 6. Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;