import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import  logo  from '../../public/logo-nav.jpeg';

const Navbar = () => {
  return (
    <nav className="bg-primary text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image src={logo} width={150} height={100} alt="logo"/>
          </Link>
        </div>
        {/* Navigation Links */}
        <div className="space-x-6 pr-4">
          <Link href="/" className="hover:text-secondary text-xl pr-5">
            Home
          </Link>
          <Link href="/login" className="hover:text-secondary text-xl">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
