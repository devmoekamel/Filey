"use client";
import React, { useState } from "react";
import SideBar from "../_components/SideBar";
import TopHeader from "../_components/TopHeader";
import { AlignCenter } from "lucide-react";
import { Providers } from "../../store/Providers";


function layout({ children }) {
  const [showbar,setbar]=useState(false); 
  const togglebar = ()=>{
    setbar(!showbar);
  }
  return (
    <div >
      <div className={`fixed inset-y-0   md:w-64  ${showbar?" w-64":"w-0"}`}>
        <SideBar isopen={showbar} />
        {/* <AlignCenter className="absolute"/> */}
      </div>
      <div className={`md:ml-64 ${showbar ? 'ml-64' : ''}`}>
        <TopHeader  togglebar={togglebar}/>
         {children} 
         
    </div>
    </div>
  );
}

export default layout;
