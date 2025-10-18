'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white text-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
          <p className="text-blue-600 text-sm font-semibold uppercase mb-2">ABOUT US</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Why Clio?
          </h2>
          <p className="text-lg mb-6">
            We’re more than just a tech company. We’ve got goals, hopes, and dreams, just like you. We want to serve a better solution to a centuries old profession and do some good in the world while we’re at it—permanently.
          </p>
          <p className="text-lg">
            We know our technology changes lives. If that’s something that speaks to you—you belong here, too.
          </p>
        </div>
        <div className="md:w-1/2 relative">
          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/three.jpg"
              alt="Team working"
              fill
              style={{ objectFit: 'cover' }}
              quality={100}
            />
          </div>
          <div className="absolute bottom-0 right-0 bg-blue-600 text-white text-xs p-2 rounded-tl-lg">
            Our panel of judges enjoying a hackathon (an event where cross-functional teams collaborate on a software project) presentation.
          </div>
        </div>
      </div>
    </section>
  );
}
