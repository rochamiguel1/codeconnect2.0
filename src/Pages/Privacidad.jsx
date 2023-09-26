import React from 'react'
import Header from '../components/Header/Header'

export default function Privacidad() {
  return (
    <div>
      <Header />
      <h1 className='flex font-bold justify-center pt-5 text-4xl'>Política de Privacidad</h1>
      <p className=' text-lg ml-4 pt-5 ' > A continuación se indica la Política de Privacidad seguida por Code Connect, cuyo sitio web es codeconnect.es (en adelante, LA WEB).</p>

      <h3 className='font-normal text-2xl pt-10 pl-4'>1. Finalidad de los datos recabados y consentimiento al tratamiento</h3>
      <p className=' text-lg ml-4 pt-5 '>1.1 Suscripción al boletín de Code Connect </p>
      <p className=' text-lg ml-4 pt-5 '>Se informa al USUARIO de que, mediante los formularios de suscripción al boletín de Code Connect ofrecidos en LA WEB, se recaban datos (nombre y correo electrónico), que se almacenan en un fichero denominado “SUSCRIPTORES BOLETÍN MS”, con la exclusiva finalidad de envío de comunicaciones electrónicas, tales como: boletines (newsletters), ofertas relacionadas únicamente con los servicios ofrecidos en LA WEB,  nuevas entradas (posts), así como otras comunicaciones que EL PROPIETARIO DE LA WEB entienda interesantes para sus USUARIOS. Los campos marcados como de cumplimentación obligatoria son imprescindibles para realizar la finalidad expresada.

        Únicamente el titular tendrá acceso a sus datos y, bajo ningún concepto, estos datos serán cedidos, compartidos, transferidos, ni vendidos a ningún tercero.

        La aceptación de la política de privacidad, mediante el procedimiento establecido de doble opt-in en el formulario de suscripción al boletín de Multiplica Salud, se entenderá a todos los efectos como la prestación de consentimiento expreso e inequívoco, así como la aceptación de la transferencia internacional de datos que se produce, exclusivamente debido a la ubicación física de las instalaciones de los proveedores de servicios y encargados del tratamiento de datos que se enunciarán en el punto 2.</p>
      <p className=' text-lg ml-4 pt-5 '>1.2 Formularios de contacto</p>
      <p className=' text-lg ml-4 pt-5 '>No se llevará a cabo ningún tratamiento de datos de carácter personal cuando el USUARIO utilice cualquiera de los formularios de contacto que hay en la WEB, los cuáles únicamente están destinados a que pueda comunicarse con el PROPIETARIO DE LA WEB con el fin de solucionar cualquier duda que tenga relacionada con los servicios ofrecidos en LA WEB.

        Sólo en el caso de que se entable una relación profesional, los datos del USUARIO se incorporarán a un fichero de clientes, en cuyo caso será debidamente informado con carácter previo.</p>
      <h3 className='font-normal text-2xl pt-10 pl-4'>2.Exactitud y veracidad de los datos</h3>
      <p className=' text-lg ml-4 pt-5 '>El usuario es el único responsable de la veracidad y corrección de los datos incluidos e informados, exonerándose a EL RESPONSABLE de cualquier responsabilidad al respecto.</p>

      <h3 className='font-normal text-2xl pt-10 pl-4'>3. Medidas de Seguridad</h3>
      <p className=' text-lg ml-4 pt-5 '>EL PROPIETARIO DE LA WEB ha adoptado las medidas de seguridad de índole técnica y organizativas necesarias para garantizar la seguridad de sus datos de carácter personal y evitar su alteración, pérdida y tratamiento y/o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos, ya provengan de la acción humana o del medio físico o natural.

        Además, EL PROPIETARIO DE LA WEB ha establecido medidas adicionales en orden a reforzar la confidencialidad e integridad de la información en su organización y mantiene continuamente la supervisión, control y evaluación de los procesos para asegurar el respeto a la privacidad de los datos.

        Por otro lado, este sitio web puede contener enlaces a otros sitios web que podrían almacenar información sobre los usuarios. EL RESPONSABLE no se hace responsable por la gestión de la información del usuario ni por las condiciones de protección de datos y confidencialidad de otros sitios web.</p>

      <h3 className='font-normal text-2xl pt-10 pl-4'>4.Cambios en la presente Política de Privacidad</h3>
      <p className=' text-lg ml-4 pt-5 '>EL RESPONSABLE se reserva el derecho a modificar su Política de Privacidad, de acuerdo a su propio criterio, o motivado por un cambio legislativo, jurisprudencial o doctrinal de la Agencia Española de Protección de Datos. Cualquier modificación de la Política de Privacidad será publicada al menos diez días antes de su efectiva aplicación. El uso de la Web después de dichos cambios implicará la aceptación de éstos.</p>

      <h3 className='font-normal text-2xl pt-10 pl-4'>5.Plazo de supresión de los datos</h3>
      <p className=' text-lg ml-4 pt-5 '>Los datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la que se recabaron y para determinar las posibles responsabilidades que se pudieran derivar de dicha finalidad y del tratamiento de los datos.</p>

      <h3 className='font-normal text-2xl pt-10 pl-4'>6.Derechos del usuario</h3>
      <p className=' text-lg ml-4 pt-5 '>El usuario puede ejercer los derechos de acceso, rectificación, supresión y, en su caso, oposición y portabilidad de los datos, así como la limitación de tratamiento de los mismos, enviando una solicitud acompañada de documento identificativo al correo electrónico: info@codeconnect.es
        Asimismo, el usuario tiene la posibilidad de ejercer su derecho de presentación de una reclamación ante una Autoridad de Control en materia de Protección de Datos competente, si no obtiene satisfacción en el ejercicio de sus derechos.</p>

      <h3 className='font-normal text-2xl pt-10 pl-4'>7.Política de cookies</h3>
      <p className=' text-lg ml-4 pt-5 pb-5 '>El sitio web de EL PROPIETARIO DE LA WEB usa cookies técnicas propias necesarias para el funcionamiento del sistema. Dado que, también, usa cookies analíticas de terceros (Google Analytics) para analizar hábitos de navegación, que no recogen información de carácter personal, se pide su consentimiento previo a la instalación de las mismas.

        Para una información clara y completa de la tipología de cookies, de las cookies usadas en nuestro sitio web, de nuestra Política de cookies, de la revocación del consentimiento y/o del procedimiento para configurar o eliminar cookies, le rogamos que continúe su lectura pinchando aquí.</p>

      <div className='flex bg-verde justify-center items-center h-16 text-blanco'>
        <p>Todos los derechos reservados CodeConnect</p>
      </div>
    </div>

  )
}
