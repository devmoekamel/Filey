"use client";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { app } from "../../../../../../firebaseConfig";

function FileShare({ file }) {
    const db = getFirestore(app);
    const [enablepass,setenable]=useState(false); 
    const [pass,setpass] = useState();

   const setfilepass=async(pass)=>{
        const docref= doc(db,"files",file.id);
      await  updateDoc(docref,{
        password:pass
      }).then(()=>{
        // console.log("password updated with this"+pass);
      }
      )
   }
  return (
    <div className="mx-2 mb-20 flex flex-col  ">
      <div className="flex items-center  gap-2 p-4 border border-gray-400 border-dashed rounded-lg">
        <div className="bg-blue-600 p-4 rounded-xl text-white">
          <h1>Url</h1>
        </div>
        <input
          id="fileurl"
          disabled
          readonly
          value={file.shortUrl}
          className="bg-gray-300 border rounded-lg px-8 py-4"
          type="url"
        />
      </div>
      <div className="mt-5 flex flex-col gap-y-5 ">
        <div className="flex items-center gap-x-2 ">
        <input
          className=" w-4 h-4 accent-blue-600 rounded-xl"
          type="checkbox"
            onChange={()=>setenable(!enablepass)}
        />
        <h2 className="font-bold text-lg">Enable Password ?</h2>
        </div>
        <div className="flex items-center gap-x-2">
        <input
        onChange={(event)=>setpass(event.target.value)}
        disabled={!enablepass}
          id="filepassword"
          className="bg-gray-300 border-none font-[20px] focus:outline-none focus:ring-0 rounded-lg px-8 py-4"
          type="password"
        />
        <button 
        disabled={!enablepass}
        onClick={()=>{pass.length>3&&setfilepass(pass)}}
        className="bg-blue-700 hover:bg-blue-900 duration-700 disabled:bg-gray-500 text-white px-6 py-3 rounded-2xl">Save</button>
        </div>
      </div>
    </div>
  );
}

export default FileShare;
