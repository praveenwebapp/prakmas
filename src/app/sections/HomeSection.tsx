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
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white'}`} style={{ backgroundColor: 'white' }}>
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center">
            <Link href="#home" className="flex items-center">
              <Image
                src="/logo.jpeg"
                alt="Prakmas Logo"
                width={80}
                height={80}
                className="mr-2"
              />
              <div>
                <span className={`text-2xl font-bold text-black`}>PraKMas</span>
                <p className="text-sm text-black font-bold">Driven By Innovation</p>
              </div>
            </Link>
          </div>
            <ul className={`hidden md:flex flex-1 justify-center space-x-6`}>
              <li><a href="#home" className="text-red-500 hover:text-black transition duration-300 font-bold">Home</a></li>
              <li><a href="#about" className="text-red-500 hover:text-black transition duration-300 font-bold">About</a></li>
              <li><a href="#services" className="text-red-500 hover:text-black transition duration-300 font-bold">Services</a></li>
              <li><a href="#team" className="text-red-500 hover:text-black transition duration-300 font-bold">Team</a></li>
              <li><a href="#contact" className="text-red-500 hover:text-black transition duration-300 font-bold">Contact</a></li>
            </ul>
          <button onClick={toggleMobileMenu} className={`md:hidden ${scrolled ? 'text-red-500' : 'text-red-500'}`}>
            {mobileMenuOpen ? <IoClose className="w-8 h-8" /> : <IoMenu className="w-8 h-8" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${scrolled ? 'bg-white' : 'bg-white'} py-4`}>
            <ul className="flex flex-col items-center space-y-4">
              <li><a href="#home" onClick={toggleMobileMenu} className="text-red-500 hover:text-black transition duration-300 font-bold">Home</a></li>
              <li><a href="#about" onClick={toggleMobileMenu} className="text-red-500 hover:text-black transition duration-300 font-bold">About</a></li>
              <li><a href="#services" onClick={toggleMobileMenu} className="text-red-500 hover:text-black transition duration-300 font-bold">Services</a></li>
              <li><a href="#team" onClick={toggleMobileMenu} className="text-red-500 hover:text-black transition duration-300 font-bold">Team</a></li>
              <li><a href="#contact" onClick={toggleMobileMenu} className="text-red-500 hover:text-black transition duration-300 font-bold">Contact</a></li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center text-white overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/six.jpg"
            alt="Dynamic Background"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
            className="opacity-30"
          />
        </div>
        <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-24 max-w-full text-center mx-auto">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-4 sm:mb-6 max-w-4xl mx-auto px-2">
            Transforming Ideas into Intelligent Solutions.
          </h1>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold font-stylish mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            <span className="text-white">At PraKMas, we </span>
            <span className="text-red-500">unite technology, </span>
            <span className="text-purple-300">consulting, </span>
            <span className="text-white">and innovation to shape the future of digital transformation. Our mission is to build </span>
            <span className="text-green-300">intelligent software ecosystems </span>
            <span className="text-yellow-300">and scalable solutions that empower businesses to grow smarter, faster, and more sustainably. </span>
            <span className="text-white">From </span>
            <span className="text-blue-300">enterprise platforms </span>
            <span className="text-red-500">to food-tech breakthroughs, </span>
            <span className="text-white">we combine strategy, creativity, and technical excellence to solve real-world challenges. With a passion for innovation and a commitment to quality, PraKMas helps organizations unlock new possibilities, enhance customer experiences, and make a lasting impact across industries.</span>
          </p>
        </div>
      </section>
    </>
  );
}
