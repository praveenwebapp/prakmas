'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Import Image component for optimized images

export default function HomeSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Header */}
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-black bg-opacity-50'}`}>
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center">
            <Image src="/logomain.png" alt="Logo" width={120} height={40} className={`${scrolled ? 'filter-none' : 'filter invert'}`} />
          </div>
          <ul className={`hidden md:flex space-x-6 ${scrolled ? 'text-gray-800' : 'text-white'}`}>
            <li><a href="#home" className="hover:text-purple-600 transition duration-300">Home</a></li>
            <li><a href="#services" className="hover:text-purple-600 transition duration-300">Services</a></li>
            <li><a href="#portfolio" className="hover:text-purple-600 transition duration-300">Portfolio</a></li>
            <li><a href="#team" className="hover:text-purple-600 transition duration-300">Team</a></li>
            <li><a href="#price" className="hover:text-purple-600 transition duration-300">Pricing</a></li>
            <li><a href="#blog" className="hover:text-purple-600 transition duration-300">Blog</a></li>
            <li><a href="#about" className="hover:text-purple-600 transition duration-300">About Us</a></li>
            <li><a href="#contact" className="hover:text-purple-600 transition duration-300">Contact</a></li>
          </ul>
          <button className={`hidden md:block font-bold py-2 px-6 rounded-full transition duration-300 ${scrolled ? 'border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white' : 'border border-white text-white hover:bg-white hover:text-gray-800'}`}>
            Login
          </button>
          <button className={`md:hidden ${scrolled ? 'text-gray-800' : 'text-white'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: 'url(/one.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            A website makes it real
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            From online stores to portfolios, Squarespace helps people with creative ideas succeed.
          </p>
          <button className="bg-white text-gray-800 font-bold py-3 px-8 rounded-full transition duration-300 hover:bg-gray-200">
            GET STARTED
          </button>
        </div>
      </section>
    </>
  );
}
