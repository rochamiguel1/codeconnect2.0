import React from 'react'
import Header from '../components/Header/Header'
import ScrollToTop from '../components/ScrollToTop'

export default function Cookies() {
    return (
        <div>
            <ScrollToTop />
            < Header />

            <h1 className='flex font-bold justify-center pt-5 text-4xl'>POLÍTICA DE COOKIES</h1>
            <p className=' text-lg ml-4 pt-5 ' > El sitio web Codeconnect.es usa cookies, archivos que se pueden descargar en su equipo terminal (que puede ser un ordenador personal, un teléfono móvil, una tableta, etc.) a través de nuestro sitio web, aplicaciones o plataformas. Son dispositivos de almacenamiento y recuperación de datos que tienen un papel esencial para la prestación de numerosos servicios de la sociedad de la información. Entre otros, permiten a un sitio web almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información obtenida, se pueden usar para reconocer al usuario, mejorar el servicio ofrecido y proporcionarle una mejor experiencia en su navegación.</p>

            <h3 className='font-semibold text-3xl pt-10 pl-4'>Tipos de cookies</h3>
            <h3 className='font-normal text-2xl pt-10 pl-4'>1. Según la entidad que gestione las cookies, pueden ser:</h3>
            <p className=' text-lg ml-4 '>Cookies propias: se almacenan en su equipo terminal procedentes de nuestro equipo o dominio y desde el que le prestamos un servicio solicitado por usted.</p>
            <p className=' text-lg ml-4 '> Cookies de terceros: se almacenan en su equipo terminal procedentes de un equipo o dominio que no es gestionado por nosotros, sino por otra entidad que trata los datos obtenidos a través de sus cookies. También, pertenecen a este tipo las cookies cuya información, aunque se instalen procedentes de nuestro equipo o dominio, es tratada por un tercero.</p>


            <h3 className='font-normal text-2xl pt-10 pl-4'>2. Según la duración de las cookies, pueden ser:</h3>
            <p className=' text-lg ml-4 '>Cookies de sesión: recaban y almacenan datos que solo interesa conservar para la prestación del servicio solicitado por usted en una sola ocasión hasta que abandona nuestro sitio web.</p>
            <p className=' text-lg ml-4 '> Cookies persistentes: almacenan datos en su equipo terminal que pueden ser accesibles y tratados cada vez que se visita nuestro sitio web por usted durante un plazo de tiempo definido por el responsable de la cookie.</p>


            <h3 className='font-normal text-2xl pt-10 pl-4'>3. Según la finalidad de las cookies, pueden ser:</h3>
            <p className=' text-lg ml-4 '> <strong>Cookies técnicas:</strong> permiten la navegación en un sitio web y el uso de las diferentes opciones o servicios que en ella existan como, por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, realizar el proceso de compra de un pedido, realizar la solicitud de inscripción o participación en un evento, usar elementos de seguridad durante la navegación, almacenar contenidos para la difusión de videos o sonido o compartir contenidos a través de redes sociales.</p>
            <p className=' text-lg ml-4 '><strong>Cookies de personalización:</strong> permiten acceder al servicio con características predefinidas en función de una serie de criterios en su equipo terminal como, por ejemplo, el idioma, el tipo de navegador usado, la configuración regional desde donde usted accede al servicio, etc.</p>
            <p className=' text-lg ml-4 '><strong>Cookies de análisis:</strong> permiten, al responsable de las mismas, realizar un seguimiento y análisis del comportamiento de los usuarios del sitio web a las que están vinculadas. La información recogida se usa en la medición de la actividad de los sitios web, aplicaciones o plataformas y para la elaboración de perfiles de navegación de los usuarios de dichas sitios web, aplicaciones y plataformas, con el fin de introducir mejoras en función del análisis de los datos de uso que hacen los usuarios del servicio.</p>
            <p className=' text-lg ml-4 '><strong>Cookies publicitarias:</strong> permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que se pudieran incluir en un sitio web, aplicación o plataforma desde la que presta el servicio solicitado en base a criterios como el contenido editado o la frecuencia en la que se muestran los anuncios..</p>
            <p className=' text-lg ml-4 '><strong>Cookies de publicidad comportamental:</strong> permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que se pudieran incluir en un sitio web, aplicación o plataforma desde la que presta el servicio solicitado, almacenando información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del mismo.</p>


            <h3 className='font-semibold text-3xl pt-10 pl-4'>Cookies utilizadas en codeconnect.es</h3>
            <p className=' text-lg ml-4 '>Siguiendo las directrices de la AEPD, codeconnect.es quiere informarle de manera clara y precisa sobre las cookies usadas en nuestro sitio web detallando la entidad que las gestiona, su duración y finalidad.</p>

            <p className=' text-lg ml-4 '>Cookies propias</p>
            <p className=' text-lg ml-4 font-semibold'>Nombre: cookie_notice_accepted</p>
            <p className=' text-lg ml-4 '>Finalidad: Técnica</p>
            <p className=' text-lg ml-4 '>Duración: Persistente</p>
            <p className=' text-lg ml-4 '>Descripción: Gestión del consentimiento del usuario para el uso de cookies en nuestro sitio web: recuerda aquellos usuarios que han aceptado o rechazado el uso de cookies y no vuelve a mostrar información al respecto en la parte inferior del sitio web </p>

            <p className=' text-lg ml-4 '>Cookies de terceros</p>
            <p className=' text-lg ml-4 font-semibold'>Nombre: _ga Analítica</p>
            <p className=' text-lg ml-4 '>Finalidad: Analítica</p>
            <p className=' text-lg ml-4 '>Duración: Persistente</p>
            <p className=' text-lg ml-4 '>Terceros: Google Analytics</p>
            <p className=' text-lg ml-4 font-semibold'>Nombre: _gat Analítica</p>
            <p className=' text-lg ml-4 '>Finalidad: Analítica</p>
            <p className=' text-lg ml-4 '>Duración: Sesión</p>
            <p className=' text-lg ml-4 '>Terceros: Google Analytics</p>



            <p className=' text-lg ml-4 '>Terceros que gestionan cookies en nuestro sitio web</p>
            <p className=' text-lg ml-4 font-semibold'>Tercero: Google Analytics</p>
            <p className=' text-lg ml-4 ' >Finalidad: Analítica</p>
            <p className=' text-lg ml-4 '>Descripción: Herramienta de análisis que ayuda a los propietarios de sitios web a medir cómo interactúan los usuarios con el contenido del sitio: número de páginas vistas, frecuencia y repetición de las visitas, duración de las visitas, navegador usado, operador que presta el servicio, idioma, terminal usado o la ciudad a la que está asignada su dirección IP. Para garantizar el anonimato, Google Analytics trunca la dirección IP antes de almacenarla. Más información en los siguientes enlaces: Política de Privacidad de Google Analytics / Sobre el uso que Google da a las cookies </p>
            <p className=' text-lg ml-4 pb-5'></p>

            <h3 className='font-semibold text-3xl pt-10 pl-4'>Aceptación de la Política de Cookies</h3>
            <p className=' text-lg ml-4 '>
                codeconnect.es muestra información sobre su Política de Cookies en la parte inferior del sitio web cuando desde un determinado dispositivo y/o navegador se inicia una sesión por primera vez o ha trascurrido más de un mes desde el último acceso, para que el usuario sea consciente de nuestro uso de cookies. Dicha información desaparece en el momento en que el usuario acepta o rechaza el uso de las cookies analíticas de terceros antes enunciadas. Las cookies analíticas de terceros no se descargan en el equipo terminal del usuario si no se ha producido, previamente, su aceptación.

                Ni este sitio web ni sus representantes legales se hacen responsables ni del contenido ni de la veracidad de las políticas de privacidad que puedan tener los terceros mencionados en esta Política de Cookies.

                La aceptación de la presente Política de Cookies implica que el usuario ha sido informado de una forma clara y completa sobre el uso de dispositivos de almacenamiento y recuperación de datos (cookies) así como que codeconnect.es dispone del consentimiento del usuario para el uso de las mismas tal y como establece el artículo 22 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE).

                Para cualquier duda o consulta acerca de esta Política de Cookies, el usuario puede comunicarse con nosotros a través de la dirección de correo electrónico: info@codeconnect.es</p>

            <h3 className='font-semibold text-3xl pt-10 pl-4'>Revocación del consentimiento</h3>
            <p className=' text-lg ml-4 '>El usuario de nuestro sitio web podrá retirar en cualquier momento su consentimiento relacionado con la Política de Cookies y podrá eliminar las cookies almacenadas en su equipo terminal.</p>

            <h3 className='font-semibold text-3xl pt-10 pl-4'>Cómo configurar o eliminar cookies</h3>
            <p className=' text-lg ml-4 pb-5'>
                El usuario puede permitir o bloquear el uso de cookies así como eliminar las cookies instaladas en su equipo terminal mediante los ajustes y configuraciones de su navegador web (que es la herramienta encargada de almacenar cookies). Estas acciones se realizan de forma diferente en función del navegador que esté usando. En los siguientes enlaces, tiene a su disposición información para configurar o eliminar cookies en algunos navegadores:

                <p> <strong>Firefox:</strong> http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we</p>

                <p> <strong>Chrome:</strong> https://support.google.com/chrome/answer/95647?hl=es</p>

                <p><strong>Explorer:</strong> http://windows.microsoft.com/es-ar/windows-vista/block-or-allow-cookies</p>

                <p><strong>Safari:</strong> http://support.apple.com/kb/ph5042</p>

                <p><strong>Opera:</strong> https://blogs.opera.com/news/2015/08/how-to-manage-cookies-in-opera/</p>

                También, le informamos de la existencia de herramientas de terceros en otros sitios web que facilitan a los usuarios la tarea de detectar las cookies en cada sitio web que visita y gestionar su desactivación.</p>



            <div className='flex bg-verde justify-center items-center h-16 text-blanco'>
                <p>Todos los derechos reservados CodeConnect</p>
            </div>

        </div>
    )
}
