import { AlertCircle } from 'lucide-react'
import React from 'react'

function AlertMessage({msg}) {
  return (
    <div className='mt-5 bg-red-600 rounded-lg text-white p-5 flex items-center gap-5 lg:mx-52'>
      <AlertCircle />
      <h1 className=' font-bold text-lg'>{msg}</h1>
    </div>
  )
}

export default AlertMessage; 


// 
