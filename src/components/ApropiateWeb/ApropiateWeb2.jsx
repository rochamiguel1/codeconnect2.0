import React from 'react'

export default function ApropiateWeb2({ text1, text2, point1, point2, point3, point4, point5, point6 }) {
    return (
        <>
            <div className=' flex flex-col pt-20 pb-10 justify-center pl-10 pr-10 bg-azul'>
                <p className=" text-blanco text-[42px] font-sans font-semibold leading-none ">{text1}</p>
                <p className='text-blanco text-[16px] font-semibold pt-4'>{text2}</p>
            </div>
            <div className="flex bg-azul ">
                <div className=" text-blanco flex mb-10 text-[14px] font-semibold ">
                    <div className='flex-col m-3 pl-7'>
                        <div className='flex gap-2 '>
                            <p className='font-bold text-3xl'>01</p>
                            <div >
                                <p className='mt-1'>{point1}</p>
                                <div className=' border h-[1px] w-[560px] mb-4 mt-1'></div>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <p className='font-bold text-3xl'>02</p>
                            <div>
                                <p className='mt-1'>{point2}</p>
                                <div className=' border h-[1px] w-[560px] mt-1 mb-4'></div>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <p className='font-bold text-3xl'>03</p>
                            <div>
                                <p className='mt-1'>{point3}</p>
                                <div className=' border h-[1px] w-[560px] mt-1 mb-4'></div>
                            </div>
                        </div>
                    </div>

                    <div className='flex-col m-3 pl-7 '>

                        <div className='flex gap-2'>
                            <p className='font-bold text-3xl '>04</p>
                            <div>
                                <p className='mt-1'>{point4}</p>
                                <div className=' border h-[1px] w-[560px] mt-1 mb-4'></div>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <p className='font-bold text-3xl '>05</p>
                            <div>
                                <p className='mt-1'>{point5}</p>
                                <div className=' border h-[1px] w-[560px] mt-1 mb-4'></div>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <p className='font-bold text-3xl'>06</p>
                            <div>
                                <p className='mt-1'>{point6}</p>
                                <div className=' border h-[1px] w-[560px] mt-1 mb-4'></div>
                            </div>
                        </div>


                    </div >

                </div>

            </div>

        </>
    )
}
