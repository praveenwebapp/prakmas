'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl flex flex-col md:flex-row w-full max-w-[360px] md:max-w-[420px] overflow-hidden">
        {/* Left Section: Signup Form */}
        <div className="w-full md:w-full p-4 md:p-8">
          <div className="flex items-center mb-4">
            <Image src="/logoicon.png" alt="Prakmas Logo" width={80} height={25} />
          </div>
          <h2 className="text-2xl font-bold mb-1">Sign up</h2>
          <p className="text-gray-600 mb-3 text-xs">
            Already have an account? <Link href="/auth/login" className="text-green-700 hover:underline">Sign in</Link>
          </p>

          <form>
            <div className="mb-2">
              <label htmlFor="name" className="block text-gray-700 text-xs font-bold mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full h-[40px] px-2 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="block text-gray-700 text-xs font-bold mb-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full h-[40px] px-2 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="block text-gray-700 text-xs font-bold mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="shadow appearance-none border rounded w-full h-[40px] px-2 text-sm text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="@#*%"
                />
                <span className="absolute inset-y-0 right-0 pr-2 flex items-center text-xs leading-5 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.955 9.955 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.879 16.121A4.995 4.995 0 0112 15c1.414 0 2.757-.483 3.879-1.379M6.268 6.268L2.5 2.5m11.393 11.393L21.5 21.5" />
                    </svg>
                  ) : (
                    <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </span>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="confirm-password" className="block text-gray-700 text-xs font-bold mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-password"
                  className="shadow appearance-none border rounded w-full h-[40px] px-2 text-sm text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="@#*%"
                />
                <span className="absolute inset-y-0 right-0 pr-2 flex items-center text-xs leading-5 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? (
                    <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.955 9.955 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.879 16.121A4.995 4.995 0 0112 15c1.414 0 2.757-.483 3.879-1.379M6.268 6.268L2.5 2.5m11.393 11.393L21.5 21.5" />
                    </svg>
                  ) : (
                    <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </span>
              </div>
            </div>
            <div className="mb-3">
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white font-bold h-[44px] py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Sign up
              </button>
            </div>
            <div className="text-center text-gray-500 mb-3">OR</div>
            <div className="mb-2">
              <button
                type="button"
                onClick={() => signIn('google')}
                className="flex items-center justify-center border border-gray-300 text-gray-700 font-bold h-[44px] py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                <Image src="/globe.svg" alt="Google Logo" width={16} height={16} className="mr-1" />
                Continue with Google
              </button>
            </div>
            <div>
              <button
                type="button"
                className="flex items-center justify-center border border-gray-300 text-gray-700 font-bold h-[44px] py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                <Image src="/file.svg" alt="Facebook Logo" width={16} height={16} className="mr-1" />
                Continue with Facebook
              </button>
            </div>
          </form>
        </div>

        {/* Right Section: Promotional Content */}
        <div className="hidden md:flex w-full md:w-1/2 bg-green-700 text-white p-4 rounded-r-xl items-center justify-center relative overflow-hidden">
          <Image src="/one.jpg" alt="Computer related image" layout="fill" objectFit="cover" className="absolute inset-0 z-0 opacity-70" />
          <div className="absolute top-0 right-0 m-4 flex items-center text-white z-10">
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 10.828L5.636 14.364m0-5.656l3.536-3.536M12 2v10m0 0v10m0-10h10m-10 0H2" />
            </svg>
            Support
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
