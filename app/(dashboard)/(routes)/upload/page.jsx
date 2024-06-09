"use client";
import React, { useEffect, useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import UploadForm from "./_components/UploadForm";
import { app } from "../../../../firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { changeprogress } from "../../../store/FileSlice";
import AlertComp from "./_components/AlertComp";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useUser } from "@clerk/nextjs";
import { generatedRandomString } from "../../../_utils/GeneratedRandomString";
import { useRouter } from "next/navigation";

function upload() {
  const db = getFirestore(app);
  const storage = getStorage(app);
  const dispatch = useDispatch();
  const [showalert, setalert] = useState(true);
  const progress = useSelector((state) => state.file.progress);
  const { user } = useUser();
  const [fileDocId,setFileDocId] =useState(null);
  const router = useRouter(); 

  const uploadfile = async (file) => {
    console.log(file?.name);
    const storageRef = ref(storage, "file-upload/" + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, file?.type);
    uploadTask.on("state_changed", (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      dispatch(changeprogress(progress));
      console.log("Upload is " + progress + "% done");
      progress == 100 &&
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setalert(true);
          saveInfo(file, downloadURL);
          
        });
    });
  };
  const saveInfo = async (file, fileurl) => {
    const docId = generatedRandomString().toString();
    console.log("docid",docId);
    console.log("filedoc",fileDocId);
    await setDoc(doc(db, "files", docId), {
      id: docId,
      fileName: file.name,
      fileSize: file.size,
      filetype: file.type,
      fileurl: fileurl,
      userEmail: user.primaryEmailAddress.emailAddress,
      userName: user.fullName,
      password: "",
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL +"f/"+ docId,
    }).then(()=>{
      setFileDocId(docId);

    });

  };

  useEffect(()=>{
    if(progress==100&&fileDocId){
      setTimeout(() => {
        dispatch(changeprogress(0));
        router.push('/file-preview/'+fileDocId);
      }, 2000);
    }
   
  },[progress==100,fileDocId])
  return (
    <div className="p-5 px-8">
      {showalert && progress == 100 && (
        <AlertComp
          dismiss={() => {
            setalert(false);
          }}
        />
      )}

      <h2 className="text-3xl text-center m-5">
        Start <strong className="text-blue-600"> Uploading </strong>
        File and <strong className="text-blue-600">Share</strong> it
      </h2>
      <UploadForm uploadBtnClick={(file) => uploadfile(file)} />
    </div>
  );
}

export default upload;
