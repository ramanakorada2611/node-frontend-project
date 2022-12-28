import React from 'react'
import{NavLink} from'react-router-dom'
import {ImCross,ImMenu} from 'react-icons/im'
import { useRef } from 'react'
export const Appnavbar = () => {
  const navref=useRef();
  let NavStyling=({isActive})=>(isActive ? "active-nav" : "active-selector")
  const Navbarfunction=()=>{
    navref.current.classList.toggle("responsive-nav")
  }
  return (
    <>
    <header>
       <div className='top'>
         <p className='rotate'>The</p>
        <p className='siren'>Siren</p>
    </div><hr className='container hr-line'></hr>
       <nav className="Navbar" ref={navref}>
           <NavLink to='/' className={NavStyling}>Home</NavLink>
           <NavLink to='/Hollywood' className={NavStyling}>Hollywood</NavLink>
           <NavLink to='/Bollywood' className={NavStyling}>Bollywood</NavLink>
           <NavLink to='/Technology' className={NavStyling}>Technology</NavLink>
           <NavLink to='/Food' className={NavStyling}>Food</NavLink>
           <NavLink to='/Fitness' className={NavStyling}>Fitness</NavLink>
           <button onClick={Navbarfunction} className="nav-close-btn nav-close-btn1 "><ImCross/></button>
        </nav>
        <button onClick={Navbarfunction} className="nav-btn"><ImMenu/></button>
  </header>
    </>
  )
}















