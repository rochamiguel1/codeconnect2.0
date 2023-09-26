
import React from 'react'
import Logo from './Logo/Logo'
import NavLinks from './NavLinks/NavLinks'

export default function Header() {
  return (
    <div className='flex bg-verde items-center gap-12 h-14'>
        <Logo />
        <NavLinks/>
    </div>
  )
}
