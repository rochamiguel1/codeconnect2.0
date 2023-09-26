import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({text}) {
  return (
    <div>
       <Link to='/Contact'> <button className=' bg-azul text-verde h-12 w-40 justify-center items-center rounded '>{text}</button></Link> 
    </div>
  )
}
