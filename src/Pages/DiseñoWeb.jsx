import React from 'react'
import Header from '../components/Header/Header'
import MixDw from '../components/MixAgency/MixDw'
import Footer from '../components/Footer/Footer'
import MixStrategy from '../components/Strategy/MixStrategy'
import ApropiateWeb2 from '../components/ApropiateWeb/ApropiateWeb2'


export default function DiseñoWeb() {
    return (
        <div>
            < Header />
            < MixDw text1={'Agencia especializada en diseño web para clínicas y profesionales de la salud'}
                text2={'Gana visibilidad, genera confianza y consigue más pacientes'}
            />
            <ApropiateWeb2
             text1={'Cuenta con un sitio web adecuado a tu proyecto sanitario'}
             text2={'Acertar con las características y elementos diferenciales del diseño web de tu clínica o consulta juega un papel clave para que los potenciales pacientes que buscan en Internet a un especialista de tu área, o tratamientos como los que ofreces en tu centro, elijan tus servicios en lugar de otros.'}
             point1={'Apuesta por estrategias enfocadas 100 x 100 al ámbito de la salud'}
             point2={'Elige un diseño web centrado en los pacientes'}
             point3={'Consigue la visibilidad que necesitas'}
             point4={'Multiplica los efectos del diseño web acertando con el contenido'}
             point5={'Logra una mejor conversión'}
             point6={'Consigue una web bien adaptada a cada dispositivo'}/>
           
            <MixStrategy />
            < Footer />
        </div>
    )
}
