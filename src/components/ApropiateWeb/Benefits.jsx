import React, { useState } from 'react'

export default function Benefits({preg,icon,text}) {
    const [hiddenText, setHiddenText] = useState(true)

    const handleClick = () => {
        setHiddenText(prev => !prev)
    }

  return (
    <>

    <div className=" flex flex-col bg-white m-2 pl-10  w-full ">
        <div onClick={handleClick} className="flex items-center p-2 gap-2 ">
            <h1 className="text-lg leading-6 font-semibold">{preg}</h1>
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
