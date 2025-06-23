import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './userSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from '../axiosInstance';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    if (!users.some(user => user.email === email && user.password === password)) {
      setError('Invalid email or password.');
      return;
    }
    const name = users.find(user => user.email === email).username;
    console.log(name)
    dispatch(login({ user: { name } }));
    navigate("/")
  };

  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" className="w-full border rounded px-3 py-2" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-medium">Password</label>
          <input type="password" className="w-full border rounded px-3 py-2" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 transition">Login</button>
        <div className="mt-4 text-center">
          <button className="text-emerald-600 hover:underline" onClick={() => navigate("/signup")}>Don't have an account? Sign up</button>
        </div>
      </form>
    </div>
  );
}