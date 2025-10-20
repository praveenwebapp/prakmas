'use client';

import React from 'react';
import Image from 'next/image';

export default function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 text-foreground relative overflow-hidden" style={{ backgroundImage: 'url("/prakmaslogo.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="absolute inset-0 bg-background opacity-80 z-0"></div> {/* Overlay for readability */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-primary-red text-sm font-semibold uppercase mb-2">OUR TEAM</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Meet Our Visionaries
              </h2>
              <p className="text-lg mb-6">
                At PraKMas, our team is built on collaboration, innovation, and excellence. Our Leadership and Strategy team defines the vision, sets goals, and ensures every project aligns with our mission and long-term growth. The Innovation and Product Development team brings creative ideas to life, focusing on technology, design, and problem-solving to deliver high-quality solutions. Our Operations and Delivery team forms the backbone of our organization, making sure plans are executed smoothly, deadlines are met, and quality remains uncompromised. The Customer Success and Engagement team connects with our clients and users, ensuring satisfaction, trust, and long-term partnerships. Behind the scenes, our Support and Infrastructure team handles IT, HR, finance, and compliance, keeping everything running efficiently so innovation never stops. Together, we form a passionate and driven team committed to turning ideas into impactful realities.
              </p>
            </div>
            <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-dark-gray to-primary-red flex items-center justify-center">
              <Image
                src="/team1.jpg"
                alt="Our Team"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
