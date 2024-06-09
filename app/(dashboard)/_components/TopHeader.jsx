"use client";
import { UserButton } from '@clerk/nextjs';
import { AlignCenter, AlignJustifyIcon } from 'lucide-react'
import Image from 'next/image';
import React, { useState } from 'react'
import SideBar from './SideBar';

function TopHeader({togglebar}) {

  return (
    <div  className='mt-4 p-2 md:p-4 flex justify-between items-center shadow-lg'>
        
        
        <div className='flex items-center justify-around gap-x-4 md:hidden'>
          <button onClick={togglebar} >
            <AlignJustifyIcon/>
            </button>        
            <Image src="/logo.svg" width={50} height={50}/>
            <h1 className='text-blue-500 text-3xl font-bold'>Fily</h1>
        </div>
        <div className='ml-auto'> 
        <UserButton />
        </div>
       
    </div>
  )
  }

export default TopHeader;