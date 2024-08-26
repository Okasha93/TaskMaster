"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { setEmail, setPassword } from '../slices/authSlice';
import Link from 'next/link';

const Login = () => {
  const dispatch = useAppDispatch();
  const email = useSelector((state: RootState) => state.auth.email);
  const password = useSelector((state: RootState) => state.auth.password);

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // هنا يمكنك إضافة منطق تسجيل الدخول الخاص بك
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-lightGray">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to TaskMaster</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <button type="submit" className="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark">
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link href="/register" className="text-secondary hover:underline">
            Create an account
          </Link>
        </div>
        <div className="mt-2 text-center">
          <Link href="/forgot-password" className="text-secondary hover:underline">
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
