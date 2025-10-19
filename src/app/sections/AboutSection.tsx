'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 text-gray-800 relative overflow-hidden" style={{ backgroundImage: 'url("/four.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="absolute inset-0 bg-white opacity-80 z-0"></div> {/* Overlay for readability */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <p className="text-blue-600 text-sm font-semibold uppercase mb-2">ABOUT US</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Why Prakmas?
            </h2>
            <p className="text-lg mb-6">
              We’re more than a technology company. Prakmas was built on curiosity, creativity, and a drive to make a real difference — blending software, consulting, innovation, and emerging industries like food tech under one vision.
            </p>
            <p className="text-lg">
              Our goal is simple: to turn smart ideas into meaningful experiences that empower businesses and people alike. Whether it’s building intelligent digital systems, optimizing operations, or innovating sustainable solutions — we’re here to redefine what’s possible.
            </p>
            <p className="text-lg">
              Because at Prakmas, we believe technology isn’t just about progress — it’s about purpose.
            </p>
          </div>
          <div className="md:w-1/2 relative flex items-center justify-center">
            <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-blue-700 to-purple-800 flex items-center justify-center">
              <Image
                src="/logomain.png"
                alt="Prakmas Logo"
                width={200}
                height={200}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
