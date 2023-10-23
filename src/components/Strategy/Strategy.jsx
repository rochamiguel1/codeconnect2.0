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
                <Link to='/Contact' target='top'><button className=''>Cuentanos tu caso</button> </Link>
            </div>
            <div className=' contenedortexto '>
                <div className='grupo1     '>
                   <Enlaces text={'Médicos'} /> 
                    <Link to='/Fisios'><Enlaces text={'Fisios'} /> </Link>
                    <Link to='/Nutricionistas'><Enlaces text={'Nutricionistas'} /> </Link>
                </div>
                <div className='grupo2 '>
                    <Link to='/Psicologos'><Enlaces text={'Psicólogos'} /> </Link>
                    <Link to='/Dentistas'> <Enlaces text={'Dentistas'} /> </Link>
                    <Link to='/Entrenadores'><Enlaces text={'Entrenadores'} /> </Link>
                </div>
            </div>

        </div>


    )
}
