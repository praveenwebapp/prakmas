'use client';

import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-32 bg-cover bg-center text-white" style={{ backgroundImage: 'url(/two.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto relative z-10 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our Story
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          We are a team of passionate creators dedicated to bringing your ideas to life. With a focus on modern design and user experience, we craft websites that stand out.
        </p>
        <button className="bg-white text-gray-800 font-bold py-3 px-8 rounded-full transition duration-300 hover:bg-gray-200">
          LEARN MORE
        </button>
      </div>
    </section>
  );
}
