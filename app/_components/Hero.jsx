"use client";
import React from 'react'
import constant from '../_utils/constant'
import Link from 'next/link'
import { useUser } from '@clerk/nextjs'

function Hero() {
  const { isSignedIn,user} =  useUser();
  return (
<section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex ">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
       <span className='text-blue-700'>Upload ,Save </span>  
        and easily <span className='text-blue-700'>share</span> your files in one place 
      </h1>

      <p className="mt-4 sm:text-xl/relaxed text-gray-500">
        {constant.desc}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href={isSignedIn?"/upload":"/sign-in"}
        >
          Get Started
        </Link>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
