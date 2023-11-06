import React from 'react'
import Header from '../components/Header/Header'
import MixFi from '../components/MixAgency/MixFi'
import ApropiateWeb2 from '../components/ApropiateWeb/ApropiateWeb2'
import MixStrategy from '../components/Strategy/MixStrategy'
import Footer from '../components/Footer/Footer'
import ScrollToTop from '../components/ScrollToTop'

export default function Fisios() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <MixFi text1={'Agencia de Marketing para Fisioterapeutas'}
        text2={'Desarrollamos planes rentables adaptados al contexto de tu clínica'}
      />
      <ApropiateWeb2
        text1={'Impulsa a tu centro de fisioterapia'}
        text2={'En buena parte de las ciudades de España existe una elevada competencia en el sector; a lo que habría que sumar la distorsión del mercado que producen los seguros privados de salud y el elevado intrusismo. Desde Code Connect, te proponemos desarrollar las estrategias que mejor suelen funcionar en proyectos como el tuyo y adaptarlas para tratar de alcanzar los mejores resultados posibles.'}
        point1={' Conocer las dificultades que tienen que afrontar en España los fisios es clave para plantear proyectos viables'}
        point2={'Te ayudamos a detectar las oportunidades de mercado y enfocar adecuadamente tus servicios'}
        point3={'Consigue más pacientes y que te tengan en cuenta en mayor medida los que ya han confiado en ti'}
        point4={'Apuesta por estrategias de marketing para fisioterapeutas adaptadas a tu contexto'}
        point5={'Reduce tu dependencia de los seguros privados y aprovecha mejor su impulso si trabajas con ellos'}
        point6={'Ofrece una mejor asistencia'}
      />
      <MixStrategy />
      <Footer />
    </div>
  )
}
