"use client";
import React from 'react'
import { useSelector } from 'react-redux'

function ProgressBar() {
  const progress =  useSelector((state)=>state.file.progress);

  return (
    <div className='bg-gray-400 w-full  mt-3  rounded-full'>
      <div style={{width:`${progress}%`}} className={`bg-blue-600  rounded-full h-full`}>
          <h1 className='text-white self-center '>{progress.toFixed(0)}%</h1>
      </div>
    </div>
  )
}

export default ProgressBar
 