import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from './userSlice';
import { useNavigate } from 'react-router-dom';
import axios from '../axiosInstance';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/signup', { email, password });
      console.log('Signup successful:', response.data);
      // Handle successful signup (e.g., redirect, show message)
    } catch (error) {
      console.error('Signup error:', error.response.data);
      // Handle error (e.g., show error message)
    }
  };
  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Username</label>
          <input type="text" className="w-full border rounded px-3 py-2" value={username} onChange={e => setUsername(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" className="w-full border rounded px-3 py-2" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-medium">Password</label>
          <input type="password" className="w-full border rounded px-3 py-2" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 transition">Sign Up</button>
        <div className="mt-4 text-center">
          <button className="text-emerald-600 hover:underline" onClick={() => navigate("/login")}>Already have an account? Log in</button>
        </div>
      </form>
    </div>
  );
}
