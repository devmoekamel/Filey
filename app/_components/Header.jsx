"use client";
import { SignIn } from '@clerk/clerk-react';
import { useUser,UserButton } from '@clerk/nextjs';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function Header() {
    const {isSignedIn ,user} =useUser();
    const [logged,setlogged] = useState(false);
     useEffect(()=>{
        isSignedIn?setlogged(true):setlogged(false);
     },[user]);
    return (
    <header className="bg-white shadow-lg">
    <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
      <a className="block text-teal-600" href="#">
        <span className="sr-only">Home</span>
        <Image src="/logo.svg"  width={50} height={50} />
      </a>
  
      <div className="flex flex-1 items-center justify-end md:justify-between">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About </a>
            </li>
  
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Careers </a>
            </li>
  
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> History </a>
            </li>
  
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Services </a>
            </li>
  
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
            </li>
  
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
         <div className="sm:flex sm:gap-4">
            <a
              className="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
              href="#"
            >
              Get Started
            </a>
  
          </div>

          {logged&&<UserButton/>}

  
          <button
            className="hidden   rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header
