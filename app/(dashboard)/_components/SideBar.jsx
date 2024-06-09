"use client";
import { AlignJustifyIcon, File, Shield, Upload } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

function SideBar({isopen}) {
    const router = useRouter();

    const [activeindex,setindex]= useState(0);
    const menulist = [
        {
            id:1,
            name:"Upload",
            icon:Upload,
            path:"/upload"
        },
        {
            id:4,
            name:"Files",
            icon:File,
            path:"/files"
        },
        {
            id:3,
            name:"Upgrade",
            icon:Shield,
            path:"/upgrade"
        },
    //     {
    //         id:1,
    //         name:"Upload",
    //         icon:Upload,
    //         path:"/upload"
    // },
    ];
    const handleClick = (index, path) => {
        setindex(index);
        router.push(path);
    };
  return (
    <div className={` w-full h-full border-r shadow-lg ${isopen?"block":"hidden"} md:block`}>
        <div className='p-5 border-b flex items-center gap-x-4'>
        <Image src="/logo.svg" width={50} height={50} />
        <h1 className='text-blue-500 text-3xl font-bold'>Filey</h1>
        
       </div>
        <div className=' gap-y-5 mt-4 md:gap-y-5 md:flex md:flex-col '>
         {menulist.map((item,index)=>(
            
                  <button onClick={()=>handleClick(index, item.path)} key={index}   className={` flex gap-4 p-4  hover:bg-gray-100 w-full ${activeindex==index?"text-blue-500":"text-gray-400"}`}   >
                    <item.icon/>
                    <h1>{item.name}</h1>
                </button>
            ))}
        </div>
    </div>
  )
}

export default SideBar;
