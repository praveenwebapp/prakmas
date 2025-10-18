'use client';

import React from 'react';

export default function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-8">Dedicated Experts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
            <div className="w-32 h-32 mx-auto relative rounded-full overflow-hidden shadow-lg mb-4">
              <img src="/two.jpg" alt="Team Member 1" className="object-cover w-full h-full" />
            </div>
            <h4 className="text-xl font-bold mb-2">John Doe</h4>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
            <div className="w-32 h-32 mx-auto relative rounded-full overflow-hidden shadow-lg mb-4">
              <img src="/three.jpg" alt="Team Member 2" className="object-cover w-full h-full" />
            </div>
            <h4 className="text-xl font-bold mb-2">Jane Smith</h4>
            <p className="text-gray-600">Lead Designer</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
            <div className="w-32 h-32 mx-auto relative rounded-full overflow-hidden shadow-lg mb-4">
              <img src="/four.jpg" alt="Team Member 3" className="object-cover w-full h-full" />
            </div>
            <h4 className="text-xl font-bold mb-2">Peter Jones</h4>
            <p className="text-gray-600">Lead Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
