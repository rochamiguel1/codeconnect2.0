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
                    <Link to='/Medicos' > <Enlaces text={'Medicos'} /> </Link>
                    <Link to='/Fisios' ><Enlaces text={'Fisios'} /> </Link>
                    <Link to='/Nutricionistas' ><Enlaces text={'Nutricionistas'} /> </Link>
                </div>
                <div className='grupo2 '>
                    <Link to='/Psicologos' ><Enlaces text={'Psicologos'} /> </Link>
                    <Link to='/Dentistas' > <Enlaces text={'Dentistas'} /> </Link>
                    <Link to='/Entrenadores' ><Enlaces text={'Entrenadores'} /> </Link>
                </div>
            </div>

        </div>


    )
}
