import React from 'react'
import Header from '../components/Header/Header'
import MixStrategy from '../components/Strategy/MixStrategy'
import Footer from '../components/Footer/Footer'
import MixDw from '../components/MixAgency/MixDw'
import ApropiateWeb2 from '../components/ApropiateWeb/ApropiateWeb2'
import MixAds from '../components/MixAgency/MixAds'
import ScrollToTop from '../components/ScrollToTop'

export default function Ads() {
  return (
    <>

    <ScrollToTop/>
      <Header />

      <MixAds text1={'Agencia especializada en Facebook y Google Ads para profesionales sanitarios'}
        text2={'Campañas de anuncios de pago en Google, Facebook, Instagram y otras plataformas para impulsar con mayor rapidez y eficacia tu clínica o consulta'} />
      <ApropiateWeb2
        text1={'Agencia especializada en Facebook y Google Ads para profesionales sanitarios'}
        text2={'CodeConnect desarrolla estrategias diseñadas específicamente para el sector sanitario con el objetivo de lograr campañas rentables que sean adecuadas tanto desde un punto de vista legal como deontológico. En función de los objetivos de cada proyecto sanitario, del grado de competencia existente y del presupuesto disponible, pueden interesar algunas plataformas, o determinadas combinaciones de ellas, por encima de otras Las principales alternativas para publicitar tu clínica o consulta en la Red son: Google Ads, Facebook Ads, Twitter Ads, Bing Ads, LinkedIn Ads o determinados directorios.'}
        point1={'Apuesta por estrategias enfocadas 100 x 100 al ámbito de la salud'}
        point2={'Elige un diseño web centrado en los pacientes'}
        point3={'Consigue la visibilidad que necesitas'}
        point4={'Multiplica los efectos del diseño web acertando con el contenido'}
        point5={'Logra una mejor conversión'}
        point6={'Consigue una web bien adaptada a cada dispositivo'} />
      <MixStrategy />
      <Footer />
    </>

  )
}
