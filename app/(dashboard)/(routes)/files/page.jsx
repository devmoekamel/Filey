// pages/index.js or any component
"use client";
import { useEffect, useState } from 'react';
//import { db } from '../firebaseConfig';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { app } from '../../../../firebaseConfig';
import TableComp from "./_components/table";
import { useDispatch } from 'react-redux';
import { getAllFiles } from '../../../store/FileSlice';
const files = () => {
  const dispatch =useDispatch();
useEffect(()=>{
  dispatch(getAllFiles());
},[])

  return (
    <div className='mx-2 md:mx-20'>
      <div className='mt-10'>
      <h1 className='text-xl font-bold'>My Files</h1>
      <div className='my-3 border border-gray-500 p-5 text-xl font-bold text-gray-400'>
        <h1>Totalfile</h1>
      </div>
      </div>
      <div className='mx-20'>
      <TableComp/>
      </div>
    </div>
  );
};

export default files;
