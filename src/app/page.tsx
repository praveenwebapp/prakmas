'use client';

import React from 'react';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import TeamSection from './sections/TeamSection';
import ContactSection from './sections/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
    </div>
  );
}
