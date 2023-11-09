import React, { useState } from 'react'

export default function Benefits({preg,icon,text}) {
    const [hiddenText, setHiddenText] = useState(true)

    const handleClick = () => {
        setHiddenText(prev => !prev)
    }

  return (
    <>

    <div className="contenedorbenefits">
        <div onClick={handleClick} >
            <h1>{preg}</h1>
            <img src={icon} alt="" className={`flex justify-between items-center w-2 h-1 ${hiddenText ? 'rotate-180' : ''}`} />
        </div>
        <div className={` border  ${hiddenText ? 'hidden' : ''} `} > </div>
        <div className={` flex justify-center p-2 text-lg font-normal leading-4  ${hiddenText ? 'hidden' : ''}`} >
            <p>{text}</p>
        </div>
    </div>

</>

  )
}
