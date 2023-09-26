import React from 'react'
import Benefits from './Benefits'
import arrow from '../../assets/up.png'

export default function ApropiateWeb({ text1, text2, letter1, letter2, letter3, letter4, letter5, letter6, benefit1, benefit2, benefit3, benefit4, benefit5, benefit6 }) {
    return (
        <>
            <div className=' flex flex-col pt-20 pb-10 justify-center pl-10 pr-10 bg-azul'>
                <p className=" text-blanco text-[42px] font-sans font-semibold leading-none ">{text1}</p>
                <p className='text-blanco text-[16px] font-semibold pt-4'>{text2}</p>
            </div>
            <div className="flex bg-azul pb-20 ">
                <div className=" text-blanco flex flex-col">
                    <div className='flex justify-around'>
                        <Benefits preg={letter1} icon={arrow} text={benefit1} />
                        <Benefits preg={letter2} icon={arrow} text={benefit2} />
                        <Benefits preg={letter3} icon={arrow} text={benefit3} />
                    </div>

                    <div className='flex justify-around'>
                        <Benefits preg={letter4} icon={arrow} text={benefit4} />
                        <Benefits preg={letter5} icon={arrow} text={benefit5} />
                        <Benefits preg={letter6} icon={arrow} text={benefit6} />
                    </div >

                </div>

            </div>


        </>
    )

}
