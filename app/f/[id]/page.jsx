"use client";
import React, {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFileInfo } from '../../store/FileSlice';
import Image from 'next/image';

function FileView({params}) {
    const file = useSelector(state=> state.file.filedata);
    const dispatch = useDispatch();
    const [passinput,setpassinput] = useState();
  useEffect(()=>{
        params.id&&dispatch(getFileInfo(params.id));
    },[params.id]);

  const disablesHandling= (file)=>{
        if(file.password="")
          {return;}
        return passinput!=file.password ;  
      }    
  return (
   
    <div className='flex flex-col justify-center  items-center h-screen '>
        <div className='absolute top-1 left-3 flex  items-center gap-x-3'>
        <Image src="/logo.svg" width={50} height={50}  />
        <h1 className='text-blue-700 font-bold text-3xl'>Filey</h1>
        </div>
        <div className='border border-blue-500 border-dashed rounded-3xl p-5 flex flex-col items-center'>
          <div className='flex flex-col items-center text-center'>
            <h1 className='text-2xl font-bold'>
              <span className='text-2xl text-blue-700 '>{file.userName} </span> 
              shared the file with you</h1>
              <h2 className='text-gray-400 text-lg'>find file details below</h2>
          </div>
          <Image src="/file.gif" width={300} height={300} />
          <div className='text-center flex flex-col gap-y-3'>
            <h1>{file.fileName}⚡{file.filetype}⚡{((file.fileSize)/1024/1024/1024).toFixed(2)}MB</h1>
            {file.password!=""&&
            <input  onChange={(event)=>setpassinput(event.target.value)} className="self-center bg-gray-300 border-none font-[20px] focus:outline-none focus:ring-0 rounded-lg px-5 py-2" type="text" /> }
            <button 
            onClick={()=>window.open(file.fileurl)}
            disabled={()=>disablesHandling(file)}
            className='px-6 py-3 bg-blue-600 disabled:bg-gray-400 rounded-full text-white'>Download</button>
          </div>
          
      </div>
    </div>
  )
}

export default FileView
