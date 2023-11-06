import React from 'react'
import Header from '../components/Header/Header'
import MixMe from '../components/MixAgency/MixMe'
import ApropiateWeb2 from '../components/ApropiateWeb/ApropiateWeb2'
import MixStrategy from '../components/Strategy/MixStrategy'
import Footer from '../components/Footer/Footer'
import ScrollToTop from '../components/ScrollToTop'

export default function Medicos() {
  return (
    <div>
      
      <ScrollToTop/>

      <Header/>
      <MixMe text1={'Agencia de Marketing Médico'}
        text2={'Especialistas en marketing para clínicas y consultas privadas'}
      />
      <ApropiateWeb2
        text1={'La consulta o centro médico que deseas es posible'}
        text2={'Cuenta con estrategias de marketing médico éticas y efectivas para disfrutar de la clínica o consulta privada que deseas. Te ayudamos a ganar visibilidad, disminuir la dependencia de seguros médicos privados y enfocar el marketing de los servicios, especialidades y tratamientos que ofreces para que consigas más pacientes y logres una mayor rentabilidad.'}
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

