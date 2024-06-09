"use client";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { app } from "../../../../../firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { getFileInfo } from "../../../../store/FileSlice";
import { SquareArrowLeft } from 'lucide-react';
import Image from "next/image";
import FileInfo from "./_components/FileInfo";
import Fileshare from "./_components/FileShare";
function FilePreview({ params }) {
  const dispatch =  useDispatch();
  const  file = useSelector(state=>state.file.filedata); 
  useEffect(() => {
    params.id && dispatch(getFileInfo(params.id));
    if(file!=null&&params.id)
        {
          
            console.log(file["fileurl"])
        }
 },
  [params.id,file!=null]);


  return (
    <div className="container   mt-10">
      <div className="mx-7 flex items-center  gap-5 text-2xl">
      <SquareArrowLeft />
      <h2>Back to upload</h2>
      </div>
      <div className="flex flex-col  md:flex-row gap-10 md:mx-32 mt-7">
        <FileInfo file={file}/>
        <Fileshare file={file}/>
      </div>
    </div>
  );
}


export default FilePreview;


// {
//   "password": "",
//   "fileName": "png.png",
//   "filetype": "image/png",
//   "shortUrl": "http://localhost:3000/rSnJy",
//   "fileSize": 4895,
//   "userEmail": "devmohamedkamel@gmail.com",
//   "userName": "devmohamed",
//   "fileurl": "https://firebasestorage.googleapis.com/v0/b/fileshare-ac1e2.appspot.com/o/file-upload%2Fpng.png?alt=media&token=50397d25-316f-4971-9a3e-c2746c7f7135",
//   "id": "rSnJy"
// }
