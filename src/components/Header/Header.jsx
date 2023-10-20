
import React from 'react'
import Logo from './Logo/Logo'
import NavLinks from './NavLinks/NavLinks'
import '../Header/Header.css'



export default function Header() {
  return (
    <div className= 'contenedorheader '>
        <Logo />
        <NavLinks/>
    </div>
  )
}
