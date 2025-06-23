import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from './userSlice';
import axios from '../axiosInstance';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', { email, password });
      console.log('Login successful:', response.data);
      // Handle successful login (e.g., redirect, store token)
    } catch (error) {
      console.error('Login error:', error.response.data);
      // Handle error (e.g., show error message)
    }

      // Store user data in Redux
      dispatch(login({ user: result.user }));
      navigate('/');
    } catch (err) {
      console.error(err);
      setError('Network error. Please try again.');
    }
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
          <a href="/signup" className="text-emerald-600 hover:underline">Don't have an account? Sign up</a>
        </div>
      </form>
    </div>
  );
}
