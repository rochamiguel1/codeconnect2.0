import React from 'react'
import Header from '../components/Header/Header'
import HealthAgency from '../components/HealthAgency/HealthAgency'
import Strategy from '../components/Strategy/Strategy'
import Footer from '../components/Footer/Footer'
import ScrollToTop from '../components/ScrollToTop'


export default function Home() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <HealthAgency text1={'Agencia de Marketing Sanitario'}
        text2={'En Code Connect somos especialistas en ayudar a profesionales de la salud a ganar visibilidad, generar confianza y conseguir más pacientes'}
      />
      <Strategy />
      <Footer />
    </div>
  )
}
