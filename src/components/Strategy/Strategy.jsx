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
                    <Link to='/Medicos' target='top'> <Enlaces text={'Medicos'} /> </Link>
                    <Link to='/Fisios' target='top'><Enlaces text={'Fisios'} /> </Link>
                    <Link to='/Nutricionistas' target='top'><Enlaces text={'Nutricionistas'} /> </Link>
                </div>
                <div className='grupo2 '>
                    <Link to='/Psicologos' target='top'><Enlaces text={'Psicologos'} /> </Link>
                    <Link to='/Dentistas' target='top'> <Enlaces text={'Dentistas'} /> </Link>
                    <Link to='/Entrenadores' target='top'><Enlaces text={'Entrenadores'} /> </Link>
                </div>
            </div>

        </div>


    )
}
