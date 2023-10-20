import React from 'react'
import './ApropiateWeb2.css'


export default function ApropiateWeb2({ text1, text2, point1, point2, point3, point4, point5, point6 }) {
    return (
        <>
            <div className='contenedortitulos '>
                <h2 className="  ">{text1}</h2>
                <h3 className=''>{text2}</h3>
            </div>
            <div className="contenedorpuntos ">
                <div className="contenedorpuntos2 ">

                    <div className=' caja3puntos '>

                        <div className='titulo '>
                            <p className='subtitulopunto'>01</p>
                            <div className='puntos'>
                                <p className=''>{point1}</p>
                                <div className=' '></div>
                            </div>
                        </div>
                        <div className='titulo '>
                            <p className='subtitulopunto '>02</p>
                            <div className='puntos'>
                                <p className=''>{point2}</p>
                                <div className=''></div>
                            </div>
                        </div>
                        <div className='titulo '>
                            <p className='subtitulopunto '>03</p>
                            <div className='puntos'>
                                <p className=''>{point3}</p>
                                <div className=''></div>
                            </div>
                        </div>
                    </div>

                    <div className=' caja3puntos '>

                        <div className='titulo '>
                            <p className=' subtitulopunto '>04</p>
                            <div className='puntos'>
                                <p className=''>{point4}</p>
                                <div className=''></div>
                            </div>
                        </div>
                        <div className='titulo '>
                            <p className='subtitulopunto '>05</p>
                            <div className='puntos'>
                                <p className=''>{point5}</p>
                                <div className=' '></div>
                            </div>
                        </div>
                        <div className='titulo '>
                            <p className=' subtitulopunto '>06</p>
                            <div className='puntos'>
                                <p className=''>{point6}</p>
                                <div className=''></div>
                            </div>
                        </div>


                    </div >

                </div>

            </div>

        </>
    )
}
