"use client";

import Link from "next/link";
import React from "react";

const ItemRow = ({ item }) => {
  return (
    <>
      <tr className="border-b transition duration-300 ease-in-out hover:bg-gray-200">
        <td className="whitespace-nowrap px-6 py-4 font-medium">
          {item.fileName}
        </td>
        <td className="whitespace-nowrap px-6 py-4">{item.filetype}</td>
        <td className="whitespace-nowrap px-6 py-4">{item.fileSize} Bytes</td>
        <td className="whitespace-nowrap px-6 py-4">
          <Link
            className="bg-blue-600 px-5 py-2 text-white rounded-3xl"
            href={"/file-preview/" + item.id}
          >
            view
          </Link>
        </td>
      </tr>
    </>
  );
};

export default ItemRow;
