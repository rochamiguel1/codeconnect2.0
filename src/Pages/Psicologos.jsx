import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import MixStrategy from '../components/Strategy/MixStrategy'
import ApropiateWeb2 from '../components/ApropiateWeb/ApropiateWeb2'
import MixPsi from '../components/MixAgency/MixPsi'
import ScrollToTop from '../components/ScrollToTop'

export default function Psicologos() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <MixPsi text1={'Agencia de Marketing para Psicólogos'}
        text2={'Consigue más pacientes con estrategias rentables y escalables adaptadas a tu contexto'}
      />
      <ApropiateWeb2
        text1={'Consigue que tu proyecto funcione con las estrategias de Marketing para Psicólogos más efectivas'}
        text2={'Es muy probable que en tu localidad y las de alrededor exista un considerable número de psicólogos y centros de psicología. Si acabas de empezar, posiblemente estés pasando por un incierto periodo en el que necesitas abrirte camino y darte a conocer. Si ya llevas un tiempo desarrollando tu actividad, puede que sea un poco angustioso ver cómo tu proyecto no termina de arrancar; o quizás combinas periodos en los que tienes un buen flujo de pacientes con otros en los que todo está muy parado, con la inestabilidad que ello conlleva.Por ello, para lograr destacar entre otros psicólogos y conectar en mayor medida con tus potenciales pacientes, ponemos a tu disposición las herramientas y estrategias de marketing para psicólogos que mejor se ajustan en cada momento a las características y circunstancias de tu proyecto.'}
        point1={'¿Eres un buen psicólogo y no estás recibiendo suficientes llamadas?'}
        point2={'La competencia en el sector de la psicología es elevada, pero también hay oportunidades'}
        point3={'Desarrollamos planes de marketing para psicólogos adaptados a tu contexto'}
        point4={'Te ayudamos a conseguir más pacientes y consolidar a los que ya han confiado en ti'}
        point5={'Puedes aprovechar mejor el impulso de los seguros privados y minimizar tu dependencia de ellos'}
        point6={'Trabajar adecuadamente la comunicación y el marketing favorece una mejor asistencia'}
      />
      <MixStrategy />
      <Footer />

    </div>
  )
}
