import React from 'react'
import Benefits from './Benefits'
import arrow from '../../assets/up.png'

export default function ApropiateWeb({ text1, text2, letter1, letter2, letter3, letter4, letter5, letter6, benefit1, benefit2, benefit3, benefit4, benefit5, benefit6 }) {
    return (
        <>
            <div className=''>
                <p className=" ">{text1}</p>
                <p className=''>{text2}</p>
            </div>
            <div className=" ">
                <div className=" ">
                    <div className=''>
                        <Benefits preg={letter1} icon={arrow} text={benefit1} />
                        <Benefits preg={letter2} icon={arrow} text={benefit2} />
                        <Benefits preg={letter3} icon={arrow} text={benefit3} />
                    </div>

                    <div className=''>
                        <Benefits preg={letter4} icon={arrow} text={benefit4} />
                        <Benefits preg={letter5} icon={arrow} text={benefit5} />
                        <Benefits preg={letter6} icon={arrow} text={benefit6} />
                    </div >

                </div>

            </div>


        </>
    )

}
