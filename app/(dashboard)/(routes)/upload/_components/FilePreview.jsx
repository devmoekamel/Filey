import { X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function FilePreview({file,removfile}) {
  return (
    <div className='mt-5  flex items-center justify-between border border-dashed border-blue-500 rounded-lg p-5 '>
       <div className='flex items-center gap-4 md:gap-10 '>
       <Image src="/file.png" width={70} height={70} alt='file'/>
        <div className='text-left'>
            <h2 className='font-bold text-lg'>{file.name}</h2>
            <h2 className='text-sm text-gray-400'>{file?.type} / {(file.size/1024/1024).toFixed(2)} MB</h2>
        </div>
       </div>
       <button onClick={removfile}>
            <X className='text-red-600 cursor-pointer' />
        </button>
       
    </div>
  )
}

export default FilePreview
