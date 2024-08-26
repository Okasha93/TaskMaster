import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-lightGray">
      <h1 className="text-4xl font-bold mb-8">Welcome to TaskMaster</h1>
      <Link href="/login" className="text-primary hover:underline">
        Login
      </Link>
      <Link href="/dashboard" className="text-primary hover:underline mt-4">
        Go to Dashboard
      </Link>
    </div>
  );
}

export default Home;

