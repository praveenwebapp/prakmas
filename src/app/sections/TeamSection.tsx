'use client';

import React from 'react';
import Image from 'next/image';

export default function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 text-gray-800 relative overflow-hidden" style={{ backgroundImage: 'url("/six.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="absolute inset-0 bg-white opacity-80 z-0"></div> {/* Overlay for readability */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg mb-4">
                At PraKMas, our team is built on collaboration, innovation, and excellence. Our Leadership and Strategy team defines the vision, sets goals, and ensures every project aligns with our mission and long-term growth. The Innovation and Product Development team brings creative ideas to life, focusing on technology, design, and problem-solving to deliver high-quality solutions. Our Operations and Delivery team forms the backbone of our organization, making sure plans are executed smoothly, deadlines are met, and quality remains uncompromised. The Customer Success and Engagement team connects with our clients and users, ensuring satisfaction, trust, and long-term partnerships. Behind the scenes, our Support and Infrastructure team handles IT, HR, finance, and compliance, keeping everything running efficiently so innovation never stops. Together, we form a passionate and driven team committed to turning ideas into impactful realities.
              </p>
            </div>
            <div className="md:w-1/2 relative flex items-center justify-center">
              <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-dark-gray to-primary-red flex items-center justify-center">
                <Image
                  src="/team.jpg"
                  alt="Our Team"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
