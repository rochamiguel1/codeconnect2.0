import React from 'react'
import Header from '../components/Header/Header'
import MixSeo from '../components/MixAgency/MixSeo'
import ApropiateWeb2 from '../components/ApropiateWeb/ApropiateWeb2'
import MixStrategy from '../components/Strategy/MixStrategy'
import Footer from '../components/Footer/Footer'
import MixCopy from '../components/MixAgency/MixCopy'

export default function CopyWriting() {
  return (
    <div>
      <Header />
      <MixCopy text1={'Agencia especializada en copywriting y redacción de contenidos de salud'}
        text2={'Divulga salud y consigue más pacientes'}
      />
      <ApropiateWeb2
        text1={'Apuesta por contenidos de calidad que ayuden a los lectores de tu web y te sirvan para llegar a más personas'}
        text2={'El servicio de Redacción Médica y Copywriting Sanitario se centra en los contenidos de la web de tu clínica o consulta para ayudarte a conseguir más pacientes. Combinamos la divulgación de contenidos y la empatía con recursos de marketing online como el Diseño web, el SEO, el Email marketing, los Anuncios de pago o las Redes sociales, con el objetivo de lograr el mayor rendimiento posible de cada uno de ellos.'}
        point1={'Conecta con tus posibles pacientes'}
        point2={'Mantén el vínculo con tus pacientes actuales y potenciales'}
        point3={' Mejora tu posicionamiento web (SEO)'}
        point4={'  Multiplica los beneficios de la redacción médica y el copywriting sanitario'}
        point5={' Divulga información médico-sanitaria de calidad: ayuda a la sociedad'}
        point6={'Ofrece una mejor asistencia'}
      />
      <MixStrategy />
      <Footer />

    </div>
  )
}
