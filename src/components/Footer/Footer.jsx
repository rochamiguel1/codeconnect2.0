import React from 'react'
import { Link } from 'react-router-dom'
import lf from '../../assets/2.svg'
import lfb from '../../assets/1.jpg'
import ws from '../../assets/whatsapp.png'
import int from '../../assets/instagram.png'
import lkd from '../../assets/linkedin.png'
import '../Footer/Footer.css'
import Enlaces from '../Strategy/Enlaces'
import lk from '../../assets/lknegro.png'
import bla from '../../assets/instagramblack.png'
import wn from '../../assets/whatsappblack.png'




export default function Footer() {
    return (
        <>

            <div className='contenedorfooter'>

                <div className='contenedorespecialidades1'>
                    <h2>Especialidades</h2>
                    <Link to='/Medicos'  className='especialidades1 ' ><p>Medicos</p></Link>
                    <Link to='/Fisios'  className='especialidades1 ' ><p>Fisios</p> </Link>
                    <Link to='/Psicologos'   className='especialidades1 ' ><p>Psicologos</p></Link>
                    <Link to='/Nutricionistas'  className='especialidades1 ' ><p>Nutricionistas</p></Link>
                    <Link to='/Dentistas'  className='especialidades1 '><p>Dentistas</p> </Link>
                    <Link to='/Entrenadores'   className='especialidades1 ' ><p>Entrenadores</p> </Link>

                </div>

                <div className='contenedorespecialidades2'>
                    <h2 >Marketing Digital</h2>
                    <Link to='/DiseñoWeb'   className=' especialidades2'><p>Diseño Web</p></Link>
                    <Link to='/Seo'  className='especialidades2 ' ><p>Seo</p></Link>
                    <Link to='/Copywriting'  className='especialidades2 ' ><p>Copywriting</p> </Link>
                    <Link to='/EmailMarketing'  className='especialidades2 ' ><p>Email Marketing</p> </Link>
                    <Link to='/Ads'  className='especialidades2 ' ><p>Ads</p></Link>
                    <Link to='/RedesSociales'  className='especialidades2 ' ><p>Redes Sociales</p> </Link>
                </div>
                <div className='contenedorespecialidades3'>
                    <h2 >Otros Servicios</h2>
                    <p className='especialidades3 ' >Plan 360</p>
                    <p className='especialidades3 ' >Consultoria</p>
                    <p className='especialidades3 '>Formacion</p>
                    <p className='especialidades3 '>Comunicacion</p>
                    <p className='especialidades3 '>Branding</p>
                </div>

                <div className='contenedorlogo'>
                    <Link to='/'><img src={lfb} alt="" /> </Link>
                    <p >Code Connect ayuda a clínicas y consultas privadas a ganar visibilidad y llegar a más pacientes.</p>
                </div>
            </div>

            <div className='contenedoravisos'>

                <div className="contenedorprivacidad">
                    <Link to='/Privacidad' ><p className='privacidadtexto '>Privacidad</p></Link>
                    <div className='privacidaddiv'></div>
                    <Link to='/Aviso' ><p className='privacidadtexto '>Aviso Legal</p> </Link>
                    <div className='privacidaddiv'></div>
                    <Link to='/Cookies' > <p className='privacidadtexto ' >Cookies</p></Link>
                    <div className='privacidaddiv'></div>
                    <Link to={'/Contact'} ><p className='privacidadtexto' >Contacto</p> </Link>

                    {/* <p className='privacidadtexto ' target='top'>Acerca de</p>
                    <div className='privacidaddiv'></div> */}
                </div>
                <div className='contenedorredes '>
                    <Link to='https://wa.me/34633261963'><img src={wn} alt="whatsapp" /></Link>
                    <Link to='https://www.instagram.com/codeconnectsl/'><img src={bla} alt="Instagram" /></Link>
                    <Link to='https://www.linkedin.com/company/codeconnectsl/'><img src={lk} alt="linkedin" /></Link>
                    
                </div>
            </div>


            <div className='contenedorderechos'>
                <p>Todos los derechos reservados CodeConnect</p>
            </div>
        </>


    )
}
