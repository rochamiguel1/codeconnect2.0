import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import Header from '../components/Header/Header'


export default function Aviso() {
    return (
        <div>
            <ScrollToTop/>
            <Header/>
            <h1 className='flex font-bold justify-center pt-5 text-4xl'>AVISO LEGAL </h1>
            <h3 className='font-semibold text-2xl pt-10 pl-4'>1. Información general</h3>
            <p className=' text-lg ml-4 '>El presente aviso legal regula el uso del sitio web CodeConnect.es (en adelante, LA WEB).
                La navegación por el sitio web atribuye la condición de USUARIO del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.
                El usuario se obliga a hacer un uso correcto del sitio web de conformidad con las leyes, la buena fe, el orden público, los usos del tráfico y el presente Aviso Legal. El usuario responderá frente a LA WEB o frente a terceros, de cualesquiera daños y perjuicios que pudieran causarse como consecuencia del incumplimiento de dicha obligación.
                LA WEB tiene carácter informativo y de exclusivo uso personal, teniendo por objeto facilitar el conocimiento -al público en general- de los servicios ofrecidos y divulgar información relacionada con el desarrollo de proyectos de marketing sanitario. El acceso al sitio Web es, en principio, gratuito, sin perjuicio de que la contratación de productos o servicios ofrecidos a través del sitio Web esté sujeta a una contraprestación económica.
                Con la finalidad de dar cumplimiento a las disposiciones recogidas en el artículo 10 de la Ley 34/ 2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, te facilitamos los siguientes datos de información general: </p>

            <p className='ml-4'>Nombre o denominación social: Code Connect SL</p>
            <p className='ml-4'>Nombre comercial: Code Connect SL</p>
            <p className='ml-4'>Domicilio social:</p>
            <p className='ml-4'>Teléfono:</p>
            <p className='ml-4'>E-mail: info@codeconnect.es</p>

            <h3 className='font-semibold text-2xl p-4 '>2. Legislación Aplicable</h3>
            <p className=' text-lg ml-4'>
                Cualquier cuestión litigiosa o, en general, controversia que pueda suceder en relación con el uso de esta web se tendrá que resolver de conformidad a la legislación Española, a los que las partes se someterán de forma expresa y renunciando al propio fuero que pueda corresponder, si no se soluciona de mutuo acuerdo
            </p>
            <h3 className='font-semibold text-2xl p-4'>3. Propiedad intelectual</h3>
            <p className=' text-lg ml-4'>
                Todos los contenidos de la presente página web, incluyendo sin carácter limitativo, textos, gráficos, imágenes, su diseño y los derechos de propiedad intelectual que pudieran corresponder a dichos contenidos, así como todas las marcas, nombres comerciales o cualquier otro signo distintivo son propiedad del propietario de la web, quedando reservados todos los derechos sobre los mismos.

                Queda prohibido cualquier acto de reproducción de los contenidos, en todo o en parte, en cualquier forma o medio, sea mecánico, electrónico, reprográfico u otro, así como cualquier acto de difusión, comunicación pública o distribución, sin la previa autorización por escrito del propietario de esta web.

                El propietario de esta web no será responsable de los daños o perjuicios que pudieran derivarse de la utilización de los contenidos por parte de los usuarios o de la infracción por parte de éstos de cualquier disposición legal vigente.
            </p>
            <h3 className='font-semibold text-2xl p-4'>4. Enlaces</h3>
            <p className=' text-lg ml-4'>
                Este sitio web (codeconnect.es) puede incluir hipervínculos (enlaces) a otros sitios web externos que no son gestionados por el propietario de este sitio web y, por esta razón, el propietario de este sitio web no garantiza ni se hace responsable de la licitud, fiabilidad, utilidad, veracidad y actualidad de los contenidos de tales sitios web externos o de sus prácticas de privacidad.

                Antes de proporcionar su información personal a estos sitios web externos, ha de tener en cuenta que sus prácticas de privacidad pueden diferir de las aplicadas en este sitio web.
            </p>
            <h3 className='font-semibold text-2xl p-4'>5. Modificaciones</h3>
            <p className=' text-lg ml-4'>
                EL PROPIETARIO DE LA WEB se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
            </p>
            <h3 className='font-semibold text-2xl p-4'>6. Validez legal</h3>
            <p className=' text-lg ml-4'>
                La información administrativa facilitada a través de LA WEB no sustituye la publicidad legal de las leyes, normativas, planes, disposiciones generales y actos que tengan que ser publicados formalmente a los diarios oficiales de las administraciones públicas, que constituyen el único instrumento que da fe de su autenticidad y contenido. La información disponible en este sitio web debe entenderse como una guía sin propósito de validez legal.
            </p>
            <h3 className='font-semibold text-2xl p-4'>7. Duración y terminación del Aviso legal</h3>
            <p className=' text-lg ml-4 pb-5'>
                La duración del presente Aviso Legal es indefinida. No obstante, EL PROPIETARIO DE LA WEB podrá dar por terminada o suspender la accesibilidad de cualquiera de los contenidos ofrecidos en el WEB. Asimismo, EL PROPIETARIO DE LA WEB, podrá modificar el contenido del presente Aviso Legal en cualquier momento, con la finalidad de adecuarlo a futuros cambios legislativos o tecnológicos. Estas modificaciones se considerarán que han sido eficazmente notificadas desde su publicación en la web siendo válidas desde ese momento.
            </p>
            
            <div className='flex bg-verde justify-center items-center h-16 text-blanco'>
                <p>Todos los derechos reservados CodeConnect</p>
            </div>
        </div>
    )
}
