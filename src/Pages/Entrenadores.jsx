import React from 'react'
import Header from '../components/Header/Header'
import MixEnt from '../components/MixAgency/MixEnt'
import ApropiateWeb2 from '../components/ApropiateWeb/ApropiateWeb2'
import MixStrategy from '../components/Strategy/MixStrategy'
import Footer from '../components/Footer/Footer'

export default function Entrenadores() {
  return (
    <div>
      < Header />
      <MixEnt text1={'Agencia de Marketing para Dentistas'}
        text2={'Especialistas en marketing para clínicas y consultas privadas'}
      />
      <ApropiateWeb2
        text1={'La consulta o clinica dental que deseas es posible'}
        text2={'Cuenta con estrategias de marketing médico éticas y efectivas para disfrutar de la clínica o consulta privada que deseas.'}
        point1={'Gana visibilidad'}
        point2={'Reduce la dependencia de los seguros médicos'}
        point3={'Consigue más pacientes'}
        point4={'Estrategias éticas y efectivas'}
        point5={'Nos adaptamos a tu contexto'}
        point6={'Ofrece una mejor asistencia'}
      />
      <MixStrategy/>
      <Footer/>
    </div>
  )
}
