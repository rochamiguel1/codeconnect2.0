import React from 'react'
import { Link } from 'react-router-dom'
import lf from '../../assets/2.svg'
import ws from '../../assets/whatsapp.png'
import int from '../../assets/instagram.png'
import '../Footer/Footer.css'


export default function Footer() {
    return (
        <>

            <div className='contenedorfooter flex bg-verde text-azul justify-around p-10'>
                


                    <div className='contenedorespecialidades '>
                        <h2>Especialidades</h2>
                        <Link to='/Médicos' className='especialidades1 '>Médicos</Link>
                        <Link to='/Fisios' className='especialidades1 '>Fisios</Link>
                        <Link to='/Psicologos' className='especialidades1 '>Psicologos</Link>
                        <Link to='/Nutricionistas' className='especialidades1 '>Nutricionistas</Link>
                        <Link to='/Dentistas' className='especialidades1 '>Dentistas</Link>
                        <Link to='/Entrenadores' className='especialidades1 '>Entrenadores</Link>
                    </div>

                    <div className='contenedorespecialidades '>
                        <h2 >Marketing Digital</h2>
                        <Link to='/DiseñoWeb' className=' especialidades1'>Diseño Web</Link>
                        <Link to='/SEO' className='especialidades1 text-blanco p-1 hover:text-azul'>SEO</Link>
                        <Link to='/Copywriting' className='especialidades1 '>Copywriting</Link>
                        <Link to='/EmailMarketing' className='especialidades1 '>Email Marketing</Link>
                        <Link to='/ADS' className='especialidades1 '>ADS</Link>
                        <Link to='/RedesSociales' className='especialidades1 '>Redes Sociales</Link>
                    </div>
                    <div className='contenedorespecialidades'>
                        <h2 >Otros Servicios</h2>
                     <p    className='especialidades1 text-blanco p-1 hover:text-azul'>Plan 360</p>
                     <p className='especialidades1 '>Consultoria</p> 
                     <p className='especialidades1 '>Formación</p>
                     <p  className='especialidades1 '>Comunicación</p>
                        <p className='especialidades1 '>Branding</p>
                    </div>
                
                <div className='contenedorlogo'>
                    <Link to='/'><img src={lf} alt="" /> </Link>
                    <p >Code Connect ayuda a clínicas y consultas privadas a ganar visibilidad y llegar a más pacientes.</p>
                </div>
            </div>

            <div className='contenedoravisos flex bg-verde justify-between'>

                <div className="contenedorprivacidad flex bg-verde text-blanco justify-start  pb-5 gap-2 ">
                    <Link to='/Privacidad' ><p className='privacidadtexto '>Privacidad</p></Link>
                    <div className='privacidaddiv  '></div>
                    <Link to='/Aviso'><p className='privacidadtexto '>Aviso Legal</p> </Link>
                    <div className='privacidaddiv'></div>
                    <Link to='/Cookies'> <p className='privacidadtexto '>Cookies</p></Link>
                    <div className='privacidaddiv'></div>
                    <Link to='/AboutUs'> <p className='privacidadtexto '>Acerca de</p></Link>
                    <div className='privacidaddiv'></div>
                    <Link to={'/Contact'}><p className='privacidadtexto '>Contacto</p> </Link>
                </div>
                <div className='contenedorredes '>
                    <Link to='https://wa.me/34633261963'><img src={ws} alt="whatsapp" /></Link>
                    <Link to='https://www.instagram.com/codeconnectsl/'><img src={int} alt="Instagram" /></Link>
                </div>
            </div>


            <div className='contenedorderechos'>
                <p>Todos los derechos reservados CodeConnect</p>
            </div>
        </>


    )
}
