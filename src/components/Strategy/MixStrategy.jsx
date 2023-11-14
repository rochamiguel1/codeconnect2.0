import React from 'react'
import { Link } from 'react-router-dom'
import Enlaces from './Enlaces'
import Button from '../Header/Button/Button'
import './Mixstrategy.css'

export default function MixStrategy() {
    return (
        <div className='contenedorMstra'>
            <div className='textoMstra '>
                <h2 className=' '>Marketing Online</h2>
                <h3 className=''>Servicios adaptados al sector sanitario</h3>
                <Link to='/Contact' ><button className=''>Cuentanos tu caso</button></Link>
            </div>
            <div className='contenedorenlacesMstra  '>
                <div className='mstra1 '>
                    <Link to='/DiseñoWeb' className='diseño'> <Enlaces text={'Diseño Web'} /> </Link>
                    <Link to='/Seo' className='diseño' ><Enlaces text={'SEO'} /> </Link>
                    <Link to='/CopyWriting' className='diseño'>< Enlaces text={'Copy Writing'} /> </Link>
                </div>
                <div className=' mstra2  '>
                    <Link to='/EmailMarketing' className='diseño'><Enlaces text={'Email Marketing'} /> </Link>
                    <Link to='/Ads' className='diseño'> <Enlaces text={'ADS'} /> </Link>
                    <Link to='/RedesSociales'className='diseño'><Enlaces text={'Redes Sociales'} /> </Link>
                </div>
                {/* <div className='mstra3 '>
                    <Link to='/TiendasOnline'><Enlaces text={'Tiendas Online'} /> </Link>
                </div> */}
            </div>

        </div>
    )
}
