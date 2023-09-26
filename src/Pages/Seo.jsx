import React from 'react'
import Header from '../components/Header/Header'
import MixSeo from '../components/MixAgency/MixSeo'
import ApropiateWeb2 from '../components/ApropiateWeb/ApropiateWeb2'
import MixStrategy from '../components/Strategy/MixStrategy'
import Footer from '../components/Footer/Footer'

export default function Seo() {
  return (
    <div>
<Header />
<MixSeo  text1={'Agencia especializada en posicionamiento SEO de clínicas y profesionales sanitarios'}
        text2={'Logra más visitas estando en los primeros puestos de buscadores como Google'}
/>
<ApropiateWeb2 
text1={'Una web mal posicionada es una web desaprovechada'}
text2={'Multiplica Salud es una agencia especializada en el posicionamiento orgánico (SEO) de webs de clínicas y profesionales de la salud, aplicando para ello las estrategias que mejor funcionan en este sector.'}
point1={'Consigue que la web de tu clínica o consulta tenga más visitas relevantes'}
point2={'Apuesta por estrategias de posicionamiento SEO adaptadas al sector de la salud'}
point3={' Mejora tu posicionamiento SEO Local'}
point4={' Evita el Black Hat SEO'}
point5={'Potencia el posicionamiento web con otros servicios de marketing online'}
point6={'Ofrece una mejor asistencia'}
/>
<MixStrategy/>
<Footer/>

    </div>
  )
}
