'use client';

import React from 'react';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#1a1a2e] text-white overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center p-8 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-center animate-bounce-in">
          Coming Soon
        </h1>
        <p className="text-xl md:text-2xl text-center mb-8 animate-slide-up">
  We&apos;re working hard to bring you something amazing. Stay tuned!
</p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-sm text-gray-300 z-10">
        &copy; {new Date().getFullYear()} Prakmas. All rights reserved.
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes bounceIn {
          0%, 20%, 40%, 60%, 80%, 100% {
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }
          0% {
            opacity: 0;
            transform: scale3d(0.3, 0.3, 0.3);
          }
          20% {
            transform: scale3d(1.1, 1.1, 1.1);
          }
          40% {
            transform: scale3d(0.9, 0.9, 0.9);
          }
          60% {
            opacity: 1;
            transform: scale3d(1.03, 1.03, 1.03);
          }
          80% {
            transform: scale3d(0.97, 0.97, 0.97);
          }
          100% {
            opacity: 1;
            transform: scale3d(1, 1, 1);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0% { opacity: 0.2; }
          50% { opacity: 0.3; }
          100% { opacity: 0.2; }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-bounce-in {
          animation: bounceIn 1s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 1s ease-out forwards 0.5s; /* Delayed start */
        }
        .animate-fade-in-delay {
          animation: fadeIn 1s ease-out forwards 1s; /* Delayed start */
        }
        .animate-pulse {
          animation: pulse 2s infinite alternate;
        }
      `}</style>
    </div>
  );
}
