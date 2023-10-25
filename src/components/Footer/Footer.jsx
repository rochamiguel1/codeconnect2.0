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

            <div className='contenedorfooter flex bg-verde text-azul justify-around p-10'>

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
                    <Link to='/DiseñoWeb'  target='_top' className=' especialidades2'><Enlaces text={'Diseño Web'} /></Link>
                    <Link to='/SEO' target='_top' className='especialidades2 ' ><Enlaces text={'Seo'} /></Link>
                    <Link to='/Copywriting' target='_top' className='especialidades2 ' ><Enlaces text={'Copywriting'} /></Link>
                    <Link to='/EmailMarketing' target='_top' className='especialidades2 ' ><Enlaces text={'Email Marketing'} /></Link>
                    <Link to='/ADS' target='_top' className='especialidades2 ' ><Enlaces text={'ADS'} /></Link>
                    <Link to='/RedesSociales' target='_top'  className='especialidades2 ' ><Enlaces text={'Redes Sociales'} /></Link>
                </div>
                <div className='contenedorespecialidades3'>
                    <h2 >Otros Servicios</h2>
                    <p className='especialidades3 text-blanco p-1 hover:text-azul' target='top'>Plan 360</p>
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

            <div className='contenedoravisos flex bg-verde justify-between'>

                <div className="contenedorprivacidad flex bg-verde text-blanco justify-start  pb-5 gap-2 ">
                    <Link to='/Privacidad' target='_top'><p className='privacidadtexto ' target='top'>Privacidad</p></Link>
                    <div className='privacidaddiv  '></div>
                    <Link to='/Aviso' target='_top'><p className='privacidadtexto ' target='top'>Aviso Legal</p> </Link>
                    <div className='privacidaddiv'></div>
                    <Link to='/Cookies' target='_top'> <p className='privacidadtexto ' >Cookies</p></Link>
                    <div className='privacidaddiv'></div>
                    <Link to={'/Contact'} target='_top'><p className='privacidadtexto' >Contacto</p> </Link>

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
