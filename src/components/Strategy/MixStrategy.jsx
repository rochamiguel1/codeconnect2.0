import React from 'react'
import { Link } from 'react-router-dom'
import Enlaces from './Enlaces'
import Button from '../Header/Button/Button'

export default function MixStrategy() {
    return (
        <div className='bg-mofondo backdrop-opacity-20 bg-cover p-20 h-[344px] flex gap-6 '>
            <div className='flex flex-col justify-start h-[148px] w-[345px]'>
                <h3 className=' text-[32px] leading-9 font-bold text-2xl'>MARKETING ONLINE</h3>
                <h3 className='text-[32px] left-9 text-xl font-bold mb-12'>Servicios adaptados al sector sanitario</h3>
                <Button text={'cuentanos tu caso'}/>
            </div>
            <div className='flex flex-col gap-4 ml-48 items-center h-[70px] w-[490px] text-[#8c1f27] '>
                <div className='flex gap-4 '>

                    <Link to='/DiseñoWeb'> <Enlaces text={'Diseño Web'} /> </Link>
                    <Link to='/Seo'><Enlaces text={'SEO'} /> </Link>
                    <Link to='/CopyWriting'>< Enlaces text={'Copy Writing'} /> </Link>
                </div>
                <div className='flex gap-4'>
                    <Link to='/EmailMarketing'><Enlaces text={'Email Marketing'} /> </Link>
                    <Link to='/Ads'> <Enlaces text={'ADS'} /> </Link>
                    <Link to='/RedesSociales'><Enlaces text={'Redes Sociales'} /> </Link>
                </div>
                <div className='flex gap-4'>
                    <Link to='/TiendasOnline'><Enlaces text={'Tiendas Online'} /> </Link>
                </div>
            </div>

        </div>
    )
}
