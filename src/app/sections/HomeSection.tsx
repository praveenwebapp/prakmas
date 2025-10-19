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
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white'}`}>
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center">
            <Link href="#home" className="flex items-center">
              <Image
                src="/mainlogoicon.png"
                alt="Prakmas Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className={`text-2xl font-bold ${scrolled ? 'text-gray-800' : 'text-gray-800'}`}>PraKMas</span>
            </Link>
          </div>
          <ul className={`hidden md:flex space-x-6 ${scrolled ? 'text-gray-800' : 'text-gray-800'}`}>
            <li><a href="#home" className="hover:text-purple-600 transition duration-300">Home</a></li>
            <li><a href="#services" className="hover:text-purple-600 transition duration-300">Services</a></li>
            <li><a href="#team" className="hover:text-purple-600 transition duration-300">Team</a></li>
            <li><a href="#contact" className="hover:text-purple-600 transition duration-300">Contact</a></li>
          </ul>
          <button onClick={toggleMobileMenu} className={`md:hidden ${scrolled ? 'text-gray-800' : 'text-gray-800'}`}>
            {mobileMenuOpen ? <IoClose className="w-8 h-8" /> : <IoMenu className="w-8 h-8" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${scrolled ? 'bg-white text-gray-800' : 'bg-white text-gray-800'} py-4`}>
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
      <section id="home" className="relative h-screen flex items-center text-white overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/travel-hero.png"
            alt="Dynamic Background"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
            className="opacity-30"
          />
        </div>
        <div className="relative z-10 px-4 md:px-24 max-w-full text-center mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 text-wrap">
            Transforming Ideas into Intelligent Solutions.
          </h1>
          <p className="text-lg sm:text-xl md:text-3xl font-bold font-stylish mb-8 text-wrap" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="text-white">At Prakmas, we </span>
            <span className="text-red-500">unite technology, </span>
            <span className="text-purple-300">consulting, </span>
            <span className="text-white">and innovation to craft </span>
            <span className="text-green-300">intelligent software </span>
            <span className="text-yellow-300">and scalable solutions. </span>
            <span className="text-white">From </span>
            <span className="text-blue-300">digital transformation </span>
            <span className="text-red-500">to food tech breakthroughs, </span>
            <span className="text-white">we empower businesses to grow </span>
            <span className="text-purple-300">smarter </span>
            <span className="text-red-500">and make a lasting impact.</span>
          </p>
        </div>
      </section>
    </>
  );
}
