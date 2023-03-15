import React from 'react'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
  const  Navigate=new useNavigate()
  
     
   
  function dish(){
    Navigate('/cart')
  }
  return (
    <div>
      <div className='Navbar_1'>
      
<div className='Navbar_2'><img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" height={45} width={230}/></div>
  <div className='Navbar_21'>   
  <div className='Navbar_211' onClick={dish}>Cart</div>
<div className='Navbar_211'> Sing-in</div>
<div className='Navbar_211'>Sing-up</div>
</div>
      </div>
    </div>
  )
}
