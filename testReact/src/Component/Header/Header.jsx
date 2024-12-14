import React from 'react'
import '../Header/Header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate =useNavigate();

const goToHome =()=>{
  navigate ("/")

}
const goToContect =()=>{
  navigate ("/contect")

}

const goToProduct =()=>{
  navigate ("/product")

}

  return (
    <div>
      <div className=' header-wrapper'>
      <ul className='list'>
<img src="/public/logo.svg" alt="" />

        <li onClick={()=>goToHome()}> Home </li>
        <li  onClick={()=>goToContect()}>    Contect   </li>
        <li onClick={()=>goToProduct()}> Product </li>
      
       
    </ul>  
      </div>
    </div>
  )
}

export default Header
