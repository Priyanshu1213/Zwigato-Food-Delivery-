import React, { useEffect, useState } from 'react'
import Cartlog from './Cartlog/Cartlog';
import axios from "axios"
import "./MapforCartlog.css"

export default function MapforCartlog() {

    const [data,setData]=useState([]);

    useEffect(()=>{
  const temp=async ()=>{
    try {
        const fetcheddata=(await axios.get('http://localhost:5000/api/getdetails')).data
        setData(fetcheddata.response);
    } catch (error) {
        console.log(error)
    }
     
  } 
  temp()

    },[])
    console.log(data)
  return (
    <>
    <div className='Map1'>
    {data.map(item=>
      <Cartlog   priya={item}/>
      )}
    </div>

    </>
  )
}
