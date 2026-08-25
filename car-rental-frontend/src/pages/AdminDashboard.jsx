import React, { useState, useEffect } from 'react';
import API from '../services/api';

const AdminDashboard = () => {
  const [cars, setCars] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('adminToken') || '');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Form State for Adding New Car
  const [newCar, setNewCar] = useState({
    name: '', brand: '', type: 'Luxury', price_per_day: '', seats: 5,
    transmission: 'Automatic', fuel_type: 'Petrol', description: '', image: ''
  });

  useEffect(() => {
    if (token) fetchCars();
  }, [token]);

  const fetchCars = async () => {
    const res = await API.get('/cars');
    setCars(res.data);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/login', { email, password });
      localStorage.setItem('adminToken', res.data.token);
      setToken(res.data.token);
    } catch (err) {
      alert('Invalid Credentials!');
    }
  };

  const handleCreateCar = async (e) => {
    e.preventDefault();
    try {
      await API.post('/cars', newCar);
      alert('Car Created Successfully!');
      fetchCars();
      setNewCar({ name: '', brand: '', type: 'Luxury', price_per_day: '', seats: 5, transmission: 'Automatic', fuel_type: 'Petrol', description: '', image: '' });
    } catch (err) {
      alert('Failed to create car.');
    }
  };

  const handleDeleteCar = async (id) => {
    if (window.confirm('Delete this car permanently?')) {
      await API.delete(`/cars/${id}`);
      fetchCars();
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
          <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full mb-3 p-3 border rounded-xl" required />
          <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full mb-6 p-3 border rounded-xl" required />
          <button type="submit" className="w-full bg-[#5c3ce2] text-white p-3 rounded-xl font-bold">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Admin Control Panel</h1>
          <button onClick={() => { localStorage.removeItem('adminToken'); setToken(''); }} className="bg-red-500 text-white px-4 py-2 rounded-xl text-xs font-bold">Logout</button>
        </div>

        {/* Add Car Form */}
        <div className="bg-white p-6 rounded-2xl shadow-sm mb-10">
          <h2 className="text-xl font-bold mb-4">Add New Vehicle</h2>
          <form onSubmit={handleCreateCar} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <input placeholder="Name" value={newCar.name} onChange={e=>setNewCar({...newCar, name: e.target.value})} className="p-3 border rounded-xl" required />
            <input placeholder="Brand" value={newCar.brand} onChange={e=>setNewCar({...newCar, brand: e.target.value})} className="p-3 border rounded-xl" required />
            <input placeholder="Price/Day ($)" type="number" value={newCar.price_per_day} onChange={e=>setNewCar({...newCar, price_per_day: e.target.value})} className="p-3 border rounded-xl" required />
            <input placeholder="Image URL" value={newCar.image} onChange={e=>setNewCar({...newCar, image: e.target.value})} className="p-3 border rounded-xl" required />
            <button type="submit" className="col-span-2 md:col-span-4 bg-[#5c3ce2] text-white py-3 rounded-xl font-bold">Create Car Record</button>
          </form>
        </div>

        {/* Existing Cars List (CRUD) */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-xl font-bold mb-4">Manage Existing Vehicles</h2>
          <div className="space-y-4">
            {cars.map(c => (
              <div key={c.id} className="flex justify-between items-center p-4 border rounded-xl">
                <div className="flex items-center gap-4">
                  <img src={c.image} alt={c.name} className="w-16 h-12 object-cover rounded-lg" />
                  <div>
                    <p className="font-bold">{c.name}</p>
                    <p className="text-xs text-gray-500">${c.price_per_day}/day</p>
                  </div>
                </div>
                <button onClick={() => handleDeleteCar(c.id)} className="bg-red-100 text-red-600 px-4 py-2 rounded-xl text-xs font-bold">Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;