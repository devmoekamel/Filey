import Image from 'next/image'
import React from 'react'

function FileInfo({file}) {
   // const  file = useSelector(state=>state.file.filedata); 

  return (
    <div className="p-5 flex flex-col items-center md:border border-blue-700 border-dashed   ">
    {file.filetype !="" ?
    <img  src={file.fileurl}  width={300} height={300}/>: 
     <Image  src="/file.png" width={300} height={300}/> }
     <div className='text-center mt-3'>
        <h1 className='text-xl font-bold'>{file.fileName}</h1>
        <h2 className='text-gray-400'>{file.filetype}</h2>
     </div>
  </div>
  )
}

export default FileInfo
