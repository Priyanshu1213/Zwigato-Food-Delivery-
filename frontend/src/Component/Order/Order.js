// import React from 'react'
import React, { useState } from 'react'
import "./Order.css"
import { useLocation } from 'react-router-dom'
export default function Order() {

    const location=new useLocation();
    const foodname=location.state.foodname
    const foodimg=location.state.foodimg
    const foodprice=location.state.foodprice
    const foodquantity=location.state.foodquantity
    const totalprice=location.state.totalprice

    const [data, setData]=useState({ Username:"",Foodquantity:"1", Emailid:"" ,Phonenumber:"",Address:""  })
    function Vickypapa(e){
        setData({...data,[e.target.name]:e.target.value})
        console.log(data)
    }
    
 async function print(event){
  event.preventDefault();
  const response=await fetch("http://localhost:5000/api/userdata",{
    method:"post",
    headers:{
      'content-Type':'application/json'
    },
    body:JSON.stringify({
      username:data.Username,
      foodquantity: data.Foodquantity,
      emailid:  data.Emailid,
      phonenumber: data.Phonenumber, 
      address:  data.Address,
      foodimg: foodimg,
      foodprice: foodprice,
      foodname:foodname,
      totalprice:foodprice*data.Foodquantity
      
    })
  })
  alert("done ")
}
 
  return (
    <div className='container'>
        <div className='container1'>
            <img src={foodimg}/>
            <h2>{foodname}</h2>
            <h3>Price of 1 quantity = {foodprice}</h3>
            <h4>Total Price of {data.Foodquantity} quantity = {foodprice*data.Foodquantity}</h4>

        </div>
    
    <div className='container2'>
    <form>
      <label>
        User name:
        <input type='text' onChange={Vickypapa} name='Username' value={data.Username} />
      </label>
      <label>
        Food quantity:
        <input  type='number' onChange={Vickypapa} name='Foodquantity' value={data.Foodquantity}/>
      </label>
      <label>
        Email id:
        <input type='text' onChange={Vickypapa} name='Emailid' value={data.Emailid}/>
      </label>
      <label>
        Phone number:
        <input type='Number' onChange={Vickypapa} name='Phonenumber' value={data.Phonenumber} />
      </label>
      <label>
        Address:
        <textarea name='Address' onChange={Vickypapa} value={data.Address}></textarea>
      </label>
      
   </form>
      <button className='pay'onClick={print}>Pay</button>
      </div>
    </div>
  )
}
