"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();

    // Validate if the passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    // Clear any existing error
    setError('');

    // Here you can add your registration logic
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-lightGray px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-primary">
          Create an Account
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4 sm:mb-6">
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-black"
            />
          </div>
          <div className="mb-4 sm:mb-6">
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-black"
            />
          </div>
          <div className="mb-4 sm:mb-6">
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-black"
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 sm:py-3 rounded-lg font-semibold text-base sm:text-lg hover:bg-primary-dark transition-colors"
          >
            Register
          </button>
        </form>
        <div className="mt-6 text-center">
          <Link href="/login" className="text-secondary hover:underline text-sm font-medium">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
