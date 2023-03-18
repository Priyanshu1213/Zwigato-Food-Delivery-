import React from 'react'

import { useNavigate, useLocation } from 'react-router-dom'
// import Order from '../../Order/Order'
import "./Cartlog.css"
export default function Cartlog(props) {
  const location=useLocation()

  const Navigate= new useNavigate()
function changer(){
  Navigate("/order" ,{state:{foodimg:props.priya.foodimg,
    foodname:props.priya.foodname,foodprice:props.priya.foodprice,
    foodquantity:props.priya.foodquantity,totalprice:props.priya.totalprice
  
  }})
}

  return (

    <>
        <div className='Cartlog_1'>

            <div className='Cartlog_11'>
              <img src={props.priya.foodimg} width={100} height={100}/>
            </div>
            <div className='Cartlog_12'>
            <div className='Cartlog_121'>
             <h2> {props.priya.foodname}</h2>
             <h4 className='rating1'> {props.priya.foodrating}</h4>
            </div>

            <div className='Cartlog_122'>
            <h4> {props.priya.foodprice}</h4>
            <button className='btu'  onClick={changer}>Order</button>
           </div>
            </div>
        </div>
    </>
  )
}
