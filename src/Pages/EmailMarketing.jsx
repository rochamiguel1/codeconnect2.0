import React from 'react'
import Header from '../components/Header/Header'
import MixSeo from '../components/MixAgency/MixSeo'
import ApropiateWeb2 from '../components/ApropiateWeb/ApropiateWeb2'
import MixStrategy from '../components/Strategy/MixStrategy'
import Footer from '../components/Footer/Footer'
import MixEm from '../components/MixAgency/MixEm'

export default function EmailMarketing() {
  return (
    <div>
       <Header />
      <MixEm text1={'Agencia especializada en Email Marketing para clínicas y profesionales de la salud'}
        text2={'Logra que tus pacientes actuales y potenciales te tengan en mente cuando necesiten asistencia sanitaria como la que ofreces'}
      />
      <ApropiateWeb2
        text1={'Multiplica la tasa de conversión de tu centro gracias al Email marketing sanitario'}
        text2={'El servicio de Email Marketing para clínicas y profesionales sanitarios te ofrece la posibilidad de comunicarte estratégicamente con tus pacientes actuales y potenciales por medio del correo electrónico. Aunque en principio no parezca una alternativa “revolucionaria”, si se enfoca adecuadamente, el Email Marketing puede suponer una gran ayuda para mejorar la tasa de conversión de tu clínica o consulta.'}
        point1={'Cuenta con un plan que funcione para conseguir más pacientes'}
        point2={'Consolida la vinculación con las personas que ya has tratado'}
        point3={' Automatiza tu estrategia de Email marketing para clínicas y profesionales sanitarios'}
        point4={'Elige la modalidad de trabajo que mejor se ajuste a tu caso'}
        point5={'Te ayuda a fidelizar clientes y a reforzar tu imagen de marca.'}
        point6={'Ofrece una mejor asistencia'}
      />
      <MixStrategy />
      <Footer />

    </div>
  )
}
