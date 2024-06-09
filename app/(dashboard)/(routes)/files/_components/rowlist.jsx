"use client";
import React from 'react'
import { useSelector } from 'react-redux'
import ItemRow from './itemrow';

const RowList = () => {
    const allfiles =  useSelector(state=>state.file.allfiles);
  return (
    <>
    {allfiles.map((item)=><ItemRow item={item} />)}
    </>
  )
}

export default RowList
