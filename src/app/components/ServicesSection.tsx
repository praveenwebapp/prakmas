'use client';

import React from 'react';

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 text-sm font-semibold uppercase mb-2">Features</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Features & Services.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center transform transition duration-300 hover:scale-105">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <img src="/globe.svg" alt="Communications Icon" className="w-10 h-10 text-purple-600" />
            </div>
            <h4 className="text-xl font-bold mb-2">Communications</h4>
            <p className="text-gray-600 mb-4">
              Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.
            </p>
            <button className="text-purple-600 hover:text-purple-800 font-bold transition duration-300">
              LEARN MORE &rarr;
            </button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center transform transition duration-300 hover:scale-105">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <img src="/file.svg" alt="Inspired Design Icon" className="w-10 h-10 text-purple-600" />
            </div>
            <h4 className="text-xl font-bold mb-2">Inspired Design</h4>
            <p className="text-gray-600 mb-4">
              Nunc consequat interdum varius sit amet mattis vulputate enim nulla risus feugiat.
            </p>
            <button className="text-purple-600 hover:text-purple-800 font-bold transition duration-300">
              LEARN MORE &rarr;
            </button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center transform transition duration-300 hover:scale-105">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <img src="/window.svg" alt="Happy Customers Icon" className="w-10 h-10 text-purple-600" />
            </div>
            <h4 className="text-xl font-bold mb-2">Happy Customers</h4>
            <p className="text-gray-600 mb-4">
              Nisl purus in mollis nunc sed id semper. Rhoncus aenean vel elit scelerisque mauris.
            </p>
            <button className="text-purple-600 hover:text-purple-800 font-bold transition duration-300">
              LEARN MORE &rarr;
            </button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center transform transition duration-300 hover:scale-105">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <img src="/globe.svg" alt="Strategic Planning Icon" className="w-10 h-10 text-purple-600" />
            </div>
            <h4 className="text-xl font-bold mb-2">Strategic Planning</h4>
            <p className="text-gray-600 mb-4">
              Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo.
            </p>
            <button className="text-purple-600 hover:text-purple-800 font-bold transition duration-300">
              LEARN MORE &rarr;
            </button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center transform transition duration-300 hover:scale-105">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <img src="/file.svg" alt="Brand Identity Icon" className="w-10 h-10 text-purple-600" />
            </div>
            <h4 className="text-xl font-bold mb-2">Brand Identity</h4>
            <p className="text-gray-600 mb-4">
              Egestas integer eget aliquet nibh praesent tristique magna sit amet purus.
            </p>
            <button className="text-purple-600 hover:text-purple-800 font-bold transition duration-300">
              LEARN MORE &rarr;
            </button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center transform transition duration-300 hover:scale-105">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <img src="/window.svg" alt="Digital Marketing Icon" className="w-10 h-10 text-purple-600" />
            </div>
            <h4 className="text-xl font-bold mb-2">Digital Marketing</h4>
            <p className="text-gray-600 mb-4">
              Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing.
            </p>
            <button className="text-purple-600 hover:text-purple-800 font-bold transition duration-300">
              LEARN MORE &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
