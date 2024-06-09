import React from 'react'
import ItemList from "./rowlist";
const TableComp = () => {




  return (

    <div className="flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" className="px-6 py-4">FileName</th>
                <th scope="col" className="px-6 py-4">Type</th>
                <th scope="col" className="px-6 py-4">Size</th>
                <th scope="col" className="px-6 py-4">#</th>
              </tr>
            </thead>
            <tbody>
           {/* items */}
             <ItemList/>
           
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TableComp;



{/* <tr
className="border-b transition duration-300 ease-in-out hover:bg-gray-200">
<td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
<td className="whitespace-nowrap px-6 py-4">Larry</td>
<td className="whitespace-nowrap px-6 py-4">Wild</td>
<td className="whitespace-nowrap px-6 py-4">@twitter</td>
</tr> */}