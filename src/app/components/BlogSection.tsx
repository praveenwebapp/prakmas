'use client';

import React from 'react';

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">From Our Blog</h2>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-8">Latest Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
            <div className="w-full h-48 relative rounded-lg overflow-hidden mb-4">
              <img src="/two.jpg" alt="Blog Post 1" className="object-cover w-full h-full" />
            </div>
            <h4 className="text-xl font-bold mb-2">The Art of Web Design</h4>
            <p className="text-gray-600 text-sm mb-4">By John Doe | October 18, 2025</p>
            <p className="text-gray-700">
              Discover the principles of modern web design and how to create stunning user experiences.
            </p>
            <a href="#" className="text-purple-600 hover:underline mt-4 inline-block">Read More &rarr;</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
            <div className="w-full h-48 relative rounded-lg overflow-hidden mb-4">
              <img src="/three.jpg" alt="Blog Post 2" className="object-cover w-full h-full" />
            </div>
            <h4 className="text-xl font-bold mb-2">E-commerce Trends 2025</h4>
            <p className="text-gray-600 text-sm mb-4">By Jane Smith | October 17, 2025</p>
            <p className="text-gray-700">
              Stay ahead of the curve with the latest trends shaping the e-commerce landscape.
            </p>
            <a href="#" className="text-purple-600 hover:underline mt-4 inline-block">Read More &rarr;</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
            <div className="w-full h-48 relative rounded-lg overflow-hidden mb-4">
              <img src="/four.jpg" alt="Blog Post 3" className="object-cover w-full h-full" />
            </div>
            <h4 className="text-xl font-bold mb-2">Building a Strong Brand</h4>
            <p className="text-gray-600 text-sm mb-4">By Peter Jones | October 16, 2025</p>
            <p className="text-gray-700">
              Learn how to develop a compelling brand identity that resonates with your audience.
            </p>
            <a href="#" className="text-purple-600 hover:underline mt-4 inline-block">Read More &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
}
