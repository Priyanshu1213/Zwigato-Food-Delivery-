import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Filtter from './Component/ViewPage/Filtter/Filtter'
import DisplayArea from './Component/ViewPage/Display/DisplayArea'
export default function firstpage() {
  return (
  <>
  <Navbar/>
  
  <Filtter/>
    <DisplayArea/>
  </>
  )
}
