'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    // In a real application, you would send this data to your API endpoint
    // For now, we'll simulate a successful send
    setTimeout(() => {
      setStatus('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    }, 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 text-white relative overflow-hidden" style={{ backgroundImage: 'url("/three.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="absolute inset-0 bg-gray-900 opacity-80 z-0"></div> {/* Overlay for readability */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Send Us A Message</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12">
            The diversity of solutions, advancement with technology and trending ourselves with the world has made us what we are, today.
          </p>

          <div className="flex flex-col md:flex-row items-start justify-between bg-white text-gray-800 rounded-lg shadow-lg p-6 md:p-8">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 pr-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">PraKMas</h3>
              <p className="text-lg mb-2">At PraKMas, we are dedicated to innovation and delivering exceptional solutions.</p>
            </div>

            <div className="md:w-1/2 w-full max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
                {status && <p className="mt-4 text-center text-sm font-medium">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
