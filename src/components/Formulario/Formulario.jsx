import React from 'react'
import { Link } from 'react-router-dom'
import './Formulario.css'

export default function Formulario() {
  return (
    <div>
      <div className='contactoazul'>Contacto </div>

      <div className='contenedormaneras '>
        <div className='contenedorwhatsapp '>
          <h3 className=' '>Tlf / Whatsapp</h3>
          <Link to='https://wa.me/34633261963'><p className=''>633 261 963</p></Link>
        </div>
        <div className='contenedorwhatsapp '>
          <h3 className=''>Email</h3>
          <Link to='mailto:info@codeconnect.es'><p className=''>info@codeconnect.es</p> </Link>
        </div>
        <div className='contenedorwhatsapp '>
          <h3 className=' '>Horario</h3>
          <h4 className=''>L - V: 8:00-18:00</h4>
        </div>
      </div>

      <div className='contenedor24 '>

        <section className=' contenedorseccion '>

          <div className='contenedortexto24'>
            <h1 className=' '>Respondemos en menos de 24 horas laborables</h1>

            <div className='contenedorpreferencias '>
              <div className='preferencias '>
                <h2 className=''>Whatsapp</h2>
                <h3 className=''>Si lo prefieres podemos comunicarnos por este canal mediante audio y texto.</h3>
              </div>
              <div className='preferencias '>
                <h2 className=' '>Videollamada</h2>
                <h3 className=' '>También podemos reunirnos mediante este canal en plataformas como Zoom, Skype o Google Meet.</h3>
              </div>
            </div>
          </div>

          <div className='contenedorformulario '>
            <form action='https://formsubmit.co/info@codeconnect.es' method='POST' className="formulario ">
              <input className="formularioetiqueta " type="text" name='nombre' id="name" placeholder=' Nombre Completo' pattern='^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$' required />
             
              <input className="formularioetiqueta  " type="email" name="mail" id="mail" placeholder=' Email' pattern='^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$' required />
             
              <input className="formularioetiqueta   " type="tel" name="phone" id="phone" placeholder=" Teléfono" />
             
              <textarea className="formulariotexto  " name="ayuda" placeholder=" ¿En qué podemos ayudarte?" id="ayuda" rows="10"
                cols="10"></textarea>
              <div className="autorizar ">
                <input type="checkbox" name="agree" id="agree" />
                <label htmlFor="agree">Acepto la Política de Privacidad y los Términos y condiciones.
                </label>
              </div>
              <input className="botonenviar " type="submit" name="Enviar" value="enviar" />
              
              <input type="hidden" name="_next" value="https://codeconnect.es"/>
            </form>
          </div>

        </section>
      </div>

    </div>
  )
}
