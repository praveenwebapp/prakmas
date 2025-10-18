'use client';

import React from 'react';
import { FaLaptopCode, FaShieldAlt, FaPalette, FaBug, FaRobot, FaCalendarAlt, FaUtensils, FaShoppingCart, FaChalkboardTeacher, FaUserTie } from 'react-icons/fa';

export default function ServicesSection() {
  const services = [
    {
      title: 'Software Consultancy',
      icon: <FaLaptopCode className="w-10 h-10 text-white" />,
      description: 'Detailed software development report from our software experts',
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
    {
      title: 'AI Integrations',
      icon: <FaRobot className="w-10 h-10 text-white" />,
      description: 'Seamless integration of AI solutions to enhance business processes and efficiency',
    },
    {
      title: 'Event Organizing',
      icon: <FaCalendarAlt className="w-10 h-10 text-white" />,
      description: 'Comprehensive event management services from planning to execution',
    },
    {
      title: 'Food Industry Solutions',
      icon: <FaUtensils className="w-10 h-10 text-white" />,
      description: 'Innovative technology solutions tailored for the food and beverage sector',
    },
    {
      title: 'E-commerce Development',
      icon: <FaShoppingCart className="w-10 h-10 text-white" />,
      description: 'Building robust and scalable e-commerce platforms for online businesses',
    },
    {
      title: 'Technology Trainings',
      icon: <FaChalkboardTeacher className="w-10 h-10 text-white" />,
      description: 'Providing comprehensive training programs on various cutting-edge technologies',
    },
    {
      title: 'Job Consultancy',
      icon: <FaUserTie className="w-10 h-10 text-white" />,
      description: 'Offering job search assistance and career support to help individuals find their ideal roles',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-blue-800 to-purple-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Customized services
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12">
          Explore our comprehensive range of services, including software consultancy, quality assurance, UX/UI design, code audit, AI integrations, event organizing, food industry solutions, e-commerce development, technology trainings, and job consultancy.
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
