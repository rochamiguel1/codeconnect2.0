import React from 'react'
import '../Button/Button.css'

export default function Button({text}) {
  return (
    <div>
        <button className='boton'>{text}</button>
    </div>
  )
}
