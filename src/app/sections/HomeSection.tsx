'use client';

import React, { useState, useEffect } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import Image from 'next/image'; // Import Image component for optimized images
import Link from 'next/link';

export default function HomeSection() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-black bg-opacity-50'}`}>
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center">
            <span className={`text-2xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'}`}>PraKMas</span>
          </div>
          <ul className={`hidden md:flex space-x-6 ${scrolled ? 'text-gray-800' : 'text-white'}`}>
            <li><a href="#home" className="hover:text-purple-600 transition duration-300">Home</a></li>
            <li><a href="#services" className="hover:text-purple-600 transition duration-300">Services</a></li>
            <li><a href="#team" className="hover:text-purple-600 transition duration-300">Team</a></li>
            <li><a href="#contact" className="hover:text-purple-600 transition duration-300">Contact</a></li>
          </ul>
          <button onClick={toggleMobileMenu} className={`md:hidden ${scrolled ? 'text-gray-800' : 'text-white'}`}>
            {mobileMenuOpen ? <IoClose className="w-8 h-8" /> : <IoMenu className="w-8 h-8" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${scrolled ? 'bg-white text-gray-800' : 'bg-black bg-opacity-75 text-white'} py-4`}>
            <ul className="flex flex-col items-center space-y-4">
              <li><a href="#home" onClick={toggleMobileMenu} className="hover:text-purple-600 transition duration-300">Home</a></li>
              <li><a href="#services" onClick={toggleMobileMenu} className="hover:text-purple-600 transition duration-300">Services</a></li>
              <li><a href="#team" onClick={toggleMobileMenu} className="hover:text-purple-600 transition duration-300">Team</a></li>
              <li><a href="#contact" onClick={toggleMobileMenu} className="hover:text-purple-600 transition duration-300">Contact</a></li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/two.jpg"
            alt="IT Services"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
            className="opacity-50"
          />
        </div>
        <div className="relative z-10 px-8 md:px-24 max-w-3xl text-left">
          <p className="text-sm font-semibold mb-2">TECHNOLOGY & IT SOLUTIONS</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Excellent IT services for your success
          </h1>
          <p className="text-lg md:text-xl mb-8">
            We are Leading Technology Solutions Providing Company all over the world doing over 40 years.
          </p>
        </div>
      </section>
    </>
  );
}
