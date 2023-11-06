import React from 'react'
import Header from '../components/Header/Header'
import MixStrategy from '../components/Strategy/MixStrategy'
import Footer from '../components/Footer/Footer'
import ApropiateWeb2 from '../components/ApropiateWeb/ApropiateWeb2'
import MixRs from '../components/MixAgency/MixRs'
import ScrollToTop from '../components/ScrollToTop'

export default function RedesSociales() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <MixRs text1={'Agencia especializada en la gestión de Redes Sociales de clínicas y profesionales sanitarios'}
        text2={'Conecta tus pacientes actuales y potenciales'} />
      <ApropiateWeb2
        text1={'Consigue que las Redes Sociales sean eficaces para tu proyecto de salud'}
        text2={'Las Redes Sociales suelen ser poco útiles para las clínicas y los profesionales de la salud cuando solo se está en ellas “por estar”, pero si se eligen las adecuadas y se aplican estrategias adaptadas al sector de la salud pueden suponer una buena ayuda para generar nuevas conexiones y consolidar a los pacientes.'}
        point1={'Define los objetivos y estrategias que más convienen en cada Red Social'}
        point2={'Llega a más pacientes potenciales'}
        point3={'Genera confianza y consolida la vinculación con tus lectores y pacientes'}
        point4={' Difunde contenidos sanitarios de calidad: ayuda a la sociedad'}
        point5={'Refuerza la visibilidad de tu clínica o consulta en entornos muy competitivos con la ayuda de Google Ads y Facebook Ads'}
        point6={'Ofrece una mejor asistencia'}
      />

      <MixStrategy />
      <Footer />

    </div>
  )
}
