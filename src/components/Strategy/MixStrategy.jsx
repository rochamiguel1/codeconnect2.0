import React from 'react'
import { Link } from 'react-router-dom'
import Enlaces from './Enlaces'
import Button from '../Header/Button/Button'
import './Mixstrategy.css'

export default function MixStrategy() {
    return (
        <div className='contenedorMstra'>
            <div className='textoMstra '>
                <h2 className=' '>MARKETING ONLINE</h2>
                <h3 className=''>Servicios adaptados al sector sanitario</h3>
            <Link to='/Contact'>    <Button text={'cuentanos tu caso'} /></Link>
            </div>
            <div className='contenedorenlacesMstra  '>
                <div className='mstra1 '>
                    <Link to='/DiseñoWeb'> <Enlaces text={'Diseño Web'} /> </Link>
                    <Link to='/Seo'><Enlaces text={'SEO'} /> </Link>
                    <Link to='/CopyWriting'>< Enlaces text={'Copy Writing'} /> </Link>
                </div>
                <div className=' mstra2  '>
                    <Link to='/EmailMarketing'><Enlaces text={'Email Marketing'} /> </Link>
                    <Link to='/Ads'> <Enlaces text={'ADS'} /> </Link>
                    <Link to='/RedesSociales'><Enlaces text={'Redes Sociales'} /> </Link>
                </div>
                <div className='mstra3 '>
                    <Link to='/TiendasOnline'><Enlaces text={'Tiendas Online'} /> </Link>
                </div>
            </div>

        </div>
    )
}
