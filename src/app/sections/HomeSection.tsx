'use client';

import React, { useState, useEffect } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import Image from 'next/image'; // Import Image component for optimized images
import Link from 'next/link';

const phrases = [
  "Transforming Ideas",
  "into Intelligent Solutions."
];

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
              <span className={`text-2xl font-bold ${scrolled ? 'text-gray-800' : 'text-gray-800'} animate-prakmas-blink`}>PraKMas</span>
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
            src="/homeimg.jpg"
            alt="Dynamic Background"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
            className="opacity-30 animate-background-pan"
          />
        </div>
        <div className="relative z-10 px-4 md:px-24 max-w-full text-center mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 animate-bounce text-wrap">
            <AnimatedText phrases={phrases} />
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
          {/* Hand clap animation */}
          <div className="mt-4 sm:mt-8">
            <div className="clap-animation mx-auto w-10 h-10 sm:w-12 sm:h-12"></div>
          </div>
          {/* Thumbs up animation */}
          <div className="flex justify-center items-center space-x-4 sm:space-x-8 mt-4 sm:mt-8">
            <div className="thumbs-up-animation text-3xl sm:text-5xl">👍</div>
          </div>
          {/* Food, Software, and Job Search animations */}
          <div className="flex justify-center items-center space-x-4 sm:space-x-8 mt-4 sm:mt-8">
            <div className="text-3xl sm:text-5xl animate-[food-spin_3s_ease-in-out_infinite]">🍕</div>
            <div className="text-3xl sm:text-5xl animate-[code-fade_4s_ease-in-out_infinite]">💻</div>
            <div className="text-3xl sm:text-5xl animate-[job-search-pulse_2s_ease-in-out_infinite]">💼</div>
          </div>
          {/* Technology, Training, Innovation, Hardwork, Development, and Career animations */}
          <div className="flex justify-center items-center space-x-4 sm:space-x-8 mt-4 sm:mt-8">
            <div className="text-3xl sm:text-5xl animate-[tech-rotate_5s_linear_infinite]">⚙️</div>
            <div className="text-3xl sm:text-5xl animate-[training-grow_2s_ease-out_infinite_alternate]">🎓</div>
            <div className="text-3xl sm:text-5xl animate-[innovation-spark_3s_ease-in-out_infinite]">💡</div>
            <div className="text-3xl sm:text-5xl animate-[hardwork-bounce_2s_ease-in-out_infinite]">💪</div>
            <div className="text-3xl sm:text-5xl animate-[development-slide_3s_ease-out_infinite_alternate]">📈</div>
            <div className="text-3xl sm:text-5xl animate-[career-path_6s_linear_infinite]">🚀</div>
          </div>
        </div>
        {/* Blinking sparks effect */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-sparkle" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white rounded-full animate-sparkle" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-white rounded-full animate-sparkle" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full animate-sparkle" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white rounded-full animate-sparkle" style={{ animationDelay: '2s' }}></div>
        </div>
        {/* Water bubbles effect */}
        <WaterBubbles />
        {/* Clean brain animation (conceptual, represented by subtle glow) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="w-48 h-48 bg-purple-500 rounded-full opacity-20 animate-pulse-glow"></div>
        </div>
      </section>
    </>
  );
}

const AnimatedText = ({ phrases }: { phrases: string[] }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentFullPhrase = phrases[currentPhraseIndex];
      if (isDeleting) {
        setCurrentText(currentFullPhrase.substring(0, currentText.length - 1));
        setTypingSpeed(75); // Faster deleting
      } else {
        setCurrentText(currentFullPhrase.substring(0, currentText.length + 1));
        setTypingSpeed(150); // Normal typing
      }

      if (!isDeleting && currentText === currentFullPhrase) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause at end of phrase
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    const typingInterval = setInterval(handleTyping, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [currentText, isDeleting, currentPhraseIndex, typingSpeed, phrases]);

  return (
    <span className="animated-text">
      {currentText}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

const WaterBubbles = () => {
  const [bubbles, setBubbles] = useState<any[]>([]);
  const colors = ['bg-blue-300', 'bg-green-300', 'bg-purple-300', 'bg-red-300', 'bg-yellow-300'];

  useEffect(() => {
    const generatedBubbles = [...Array(30)].map((_, i) => ({
      key: i,
      width: `${Math.random() * 20 + 10}px`,
      height: `${Math.random() * 20 + 10}px`,
      left: `${Math.random() * 100}%`,
      bottom: `${Math.random() * 10}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 10 + 5}s`,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setBubbles(generatedBubbles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.key}
          className={`absolute ${bubble.color} rounded-full opacity-50 animate-bubble`}
          style={{
            width: bubble.width,
            height: bubble.height,
            left: bubble.left,
            bottom: bubble.bottom,
            animationDelay: bubble.animationDelay,
            animationDuration: bubble.animationDuration,
          }}
        ></div>
      ))}
    </div>
  );
};
