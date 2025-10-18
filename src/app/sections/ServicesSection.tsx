'use client';

import React from 'react';
import { FaLaptopCode, FaShieldAlt, FaPalette, FaBug } from 'react-icons/fa';

export default function ServicesSection() {
  const services = [
    {
      title: 'Software Consultancy',
      icon: <FaLaptopCode className="w-10 h-10 text-white" />,
      description: 'Detailed software development report form our software experts',
    },
    {
      title: 'Quality Assurance',
      icon: <FaShieldAlt className="w-10 h-10 text-white" />,
      description: 'Complete application audit for security and quality along with resolution services',
    },
    {
      title: 'UX/UI Design',
      icon: <FaPalette className="w-10 h-10 text-white" />,
      description: 'Designing of UI/UX for websites and mobile applications specific to client needs',
    },
    {
      title: 'Code Audit',
      icon: <FaBug className="w-10 h-10 text-white" />,
      description: 'Software and application development code review and debugging',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-blue-800 to-purple-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Customized services
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12">
          The slide showcases four areas of services from our experienced team of engineers which are software consultancy, UX/UI Design, Quality Assurance and Code Audit.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-blue-700 p-6 rounded-lg shadow-lg">
              {service.icon}
              <h4 className="text-xl font-bold mt-4">{service.title}</h4>
              <p className="text-base mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
