import React from 'react'
import { Link } from 'react-router-dom'
import lf from '../../assets/2.svg'
import ws from '../../assets/whatsapp.png'
import int from '../../assets/instagram.png'
import '../Footer/Footer.css'
import Enlaces from '../Strategy/Enlaces'


export default function Footer() {
    return (
        <>

            <div className='contenedorfooter'>

                <div className='contenedorespecialidades1 '>
                    <h2>Especialidades</h2>
                    <Link to='/Medicos'  className='especialidades1 ' ><Enlaces text={'Medicos'} /></Link>
                    <Link to='/Fisios'  className='especialidades1 ' ><Enlaces text={'Fisios'} /></Link>
                    <Link to='/Psicologos'   className='especialidades1 ' ><Enlaces text={'Psicologos'} /></Link>
                    <Link to='/Nutricionistas'  className='especialidades1 ' ><Enlaces text={'Nutricionistas'} /></Link>
                    <Link to='/Dentistas'  className='especialidades1 '><Enlaces text={'Dentistas'} /></Link>
                    <Link to='/Entrenadores'   className='especialidades1 ' ><Enlaces text={'Entrenadores'} /></Link>

                </div>

                <div className='contenedorespecialidades2 '>
                    <h2 >Marketing Digital</h2>
                    <Link to='/DiseñoWeb'   className=' especialidades2'><Enlaces text={'Diseño Web'} /></Link>
                    <Link to='/Seo'  className='especialidades2 ' ><Enlaces text={'Seo'} /></Link>
                    <Link to='/Copywriting'  className='especialidades2 ' ><Enlaces text={'Copywriting'} /></Link>
                    <Link to='/EmailMarketing'  className='especialidades2 ' ><Enlaces text={'Email Marketing'} /></Link>
                    <Link to='/Ads'  className='especialidades2 ' ><Enlaces text={'Ads'} /></Link>
                    <Link to='/RedesSociales'  className='especialidades2 ' ><Enlaces text={'Redes Sociales'} /></Link>
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
                    <Link to='/' target='_top'><img src={lf} alt="" /> </Link>
                    <p >Code Connect ayuda a clínicas y consultas privadas a ganar visibilidad y llegar a más pacientes.</p>
                </div>
            </div>

            <div className='contenedoravisos'>

                <div className="contenedorprivacidad">
                    <Link to='/Privacidad' ><p className='privacidadtexto '>Privacidad</p></Link>
                    <div className='privacidaddiv  '></div>
                    <Link to='/Aviso' ><p className='privacidadtexto '>Aviso Legal</p> </Link>
                    <div className='privacidaddiv'></div>
                    <Link to='/Cookies' > <p className='privacidadtexto ' >Cookies</p></Link>
                    <div className='privacidaddiv'></div>
                    <Link to={'/Contact'} ><p className='privacidadtexto' >Contacto</p> </Link>

                    {/* <p className='privacidadtexto ' target='top'>Acerca de</p>
                    <div className='privacidaddiv'></div> */}
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
