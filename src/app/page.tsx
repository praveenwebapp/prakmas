'use client';

import React from 'react';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import TeamSection from './components/TeamSection';
import PriceSection from './components/PriceSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TeamSection />
      <PriceSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
