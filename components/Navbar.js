"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-teal-500 text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="logo font-bold text-2xl">
        BitLinks
      </Link>

      {/* Hamburger Menu - Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menu - Desktop */}
      <ul className="hidden md:flex gap-6 items-center">
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/shorten"><li>Shorten</li></Link>
        <Link href="/contact"><li>Contact</li></Link>
        <li className="flex gap-4">
          <Link href="/shorten">
            <button className="bg-teal-400 rounded-lg px-3 py-2 font-bold shadow-lg">
              Try Now
            </button>
          </Link>
          <Link href="/github">
            <button className="bg-teal-400 rounded-lg px-3 py-2 font-bold shadow-lg">
              GitHub
            </button>
          </Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-teal-500 flex flex-col gap-4 px-6 py-4 md:hidden">
          <Link href="/"><li onClick={() => setIsOpen(false)}>Home</li></Link>
          <Link href="/about"><li onClick={() => setIsOpen(false)}>About</li></Link>
          <Link href="/shorten"><li onClick={() => setIsOpen(false)}>Shorten</li></Link>
          <Link href="/contact"><li onClick={() => setIsOpen(false)}>Contact</li></Link>
          
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
