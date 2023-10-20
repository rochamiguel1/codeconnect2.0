import React from 'react'
import '../Button/Button.css'

export default function Button({text}) {
  return (
    <div>
        <button className='boton bg-azul text-verde  h-12 w-40  justify-center items-center rounded '>{text}</button>
    </div>
  )
}
