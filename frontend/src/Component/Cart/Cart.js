import axios from 'axios'
import "./Cart.css"
import React, { useState, useEffect } from 'react'
// import { Navigate, useNavigate } from 'react-router-dom'

export default function Cart() {
const [up,setUp]=useState([])

   

useEffect(()=>{
    const tempu=async()=>{

        try {
            const temp=(await axios('http://localhost:5000/api/userdisplay')).data
            setUp(temp.response)
            console.log(temp.response[1].foodimg)
        } catch (error) {
           console.log({error})   
        }
    }
    tempu();
},[])
// console.log(up[1].foodimg)
  return (
    <div>
        <div className='box1'>
            {up.map(item=>
                <h2> Id={item._id}+{item.username}+{item.foodname} +{item.foodquantity}+{item.emailid}+{item.phonenumber}+{item.address}+{item.foodprice}+{item.foodimg} + Total price = {item.totalprice}</h2>
            )}
        </div>
        <h1>thank you for order
            {/* <img src={up[1].foodimg}/> */}
        </h1>
    </div>
  )
}
