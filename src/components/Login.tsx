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
    // Here you can add your login logic
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-lightGray px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-primary">
          Login to TaskMaster
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4 sm:mb-6">
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-black"
            />
          </div>
          <div className="mb-6 sm:mb-8">
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-black"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 sm:py-3 rounded-lg font-semibold text-base sm:text-lg hover:bg-primary-dark transition-colors"
          >
            Login
          </button>
        </form>
        <div className="mt-4 sm:mt-6 text-center">
          <Link href="/register" className="text-secondary hover:underline text-lg font-medium">
            Create an account
          </Link>
        </div>
        <div className="mt-2 sm:mt-3 text-center">
          <Link href="/forgot-password" className="text-secondary hover:underline text-lg font-medium">
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
