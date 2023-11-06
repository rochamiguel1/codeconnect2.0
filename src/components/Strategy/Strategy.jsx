import React from 'react'
import { Link } from 'react-router-dom'
import Enlaces from './Enlaces'
import '../Strategy/Strategy.css'

export default function Strategy() {
    return (

        <div className='contenedorstrategy  '>
            <div className='contenedortexto '>
                <h3 className='linea1'>Estrategias</h3>
                <h3 className='linea2'>Para cada especialidad</h3>
                <Link to='/Contact' ><button className=''>Cuentanos tu caso</button> </Link>
            </div>
            <div className=' contenedortexto '>
                <div className='grupo1     '>
                    <Link to='/Medicos' className='medicos'> <Enlaces text={'Medicos'} /> </Link>
                    <Link to='/Fisios' className='medicos' ><Enlaces text={'Fisios'} /> </Link>
                    <Link to='/Nutricionistas' className='medicos' ><Enlaces text={'Nutricionistas'} /> </Link>
                </div>
                <div className='grupo2 '>
                    <Link to='/Psicologos' className='medicos'><Enlaces text={'Psicologos'} /> </Link>
                    <Link to='/Dentistas' className='medicos'> <Enlaces text={'Dentistas'} /> </Link>
                    <Link to='/Entrenadores' className='medicos'><Enlaces text={'Entrenadores'} /> </Link>
                </div>
            </div>

        </div>


    )
}
