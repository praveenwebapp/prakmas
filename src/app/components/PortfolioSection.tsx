'use client';

import React from 'react';

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-8">Recent Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
            <div className="w-full h-48 relative rounded-lg overflow-hidden mb-4">
              <img src="/five.jpg" alt="Portfolio Item 1" className="object-cover w-full h-full" />
            </div>
            <h4 className="text-xl font-bold mb-2">Project Alpha</h4>
            <p className="text-gray-600">Web Development</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
            <div className="w-full h-48 relative rounded-lg overflow-hidden mb-4">
              <img src="/six.jpg" alt="Portfolio Item 2" className="object-cover w-full h-full" />
            </div>
            <h4 className="text-xl font-bold mb-2">Project Beta</h4>
            <p className="text-gray-600">UI/UX Design</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
            <div className="w-full h-48 relative rounded-lg overflow-hidden mb-4">
              <img src="/one.jpg" alt="Portfolio Item 3" className="object-cover w-full h-full" />
            </div>
            <h4 className="text-xl font-bold mb-2">Project Gamma</h4>
            <p className="text-gray-600">Branding</p>
          </div>
        </div>
      </div>
    </section>
  );
}
