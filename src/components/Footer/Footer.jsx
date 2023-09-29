import React from 'react'
import { Link } from 'react-router-dom'
import lf from '../../assets/2.svg'
import ws from '../../assets/whatsapp.png'
import int from '../../assets/instagram.png'


export default function Footer() {
    return (
        <>

            <div className=' flex bg-verde text-azul justify-around p-10'>
                <div className='flex flex-col'>
                    <h2 className=' text-2xl pb-5'>Especialidades</h2>
                    <Link to='/Médicos' className='text-blanco p-1 hover:text-azul'>Médicos</Link>
                    <Link to='/Fisios' className='text-blanco p-1 hover:text-azul'>Fisios</Link>
                    <Link to='/Psicologos' className='text-blanco p-1 hover:text-azul'>Psicologos</Link>
                    <Link to='/Nutricionistas' className='text-blanco p-1 hover:text-azul'>Nutricionistas</Link>
                    <Link to='/Dentistas' className='text-blanco p-1 hover:text-azul'>Dentistas</Link>
                    <Link to='/Entrenadores' className='text-blanco p-1 hover:text-azul'>Entrenadores</Link>
                </div>

                <div className='flex flex-col'>
                    <h2 className=' text-2xl pb-5 '>Marketing Digital</h2>
                    <Link to='/DiseñoWeb' className=' text-blanco p-1 hover:text-azul'>Diseño Web</Link>
                    <Link to='/SEO' className=' text-blanco p-1 hover:text-azul'>SEO</Link>
                    <Link to='/Copywriting' className=' text-blanco p-1 hover:text-azul'>Copywriting</Link>
                    <Link to='/EmailMarketing' className=' text-blanco p-1 hover:text-azul'>Email Marketing</Link>
                    <Link to='/ADS' className=' text-blanco p-1 hover:text-azul'>ADS</Link>
                    <Link to='/RedesSociales' className=' text-blanco p-1 hover:text-azul'>Redes Sociales</Link>
                </div>
                <div className='flex flex-col'>
                    <h2 className=' text-2xl pb-5 '>Otros Servicios</h2>
                    <Link to='/Plan360' className=' text-blanco p-1 hover:text-azul'>Plan 360</Link>
                    <Link to='/Consultoria' className=' text-blanco p-1 hover:text-azul'>Consultoria</Link>
                    <Link to='/EmailMKT' className=' text-blanco p-1 hover:text-azul'>Formación</Link>
                    <Link to='/Redes' className=' text-blanco p-1 hover:text-azul'>Comunicación</Link>
                    <Link to='/Branding' className=' text-blanco p-1 hover:text-azul'>Branding</Link>
                </div>
                <div >
                    <Link to='/'><img src={lf} alt="" className='h-32 w-32 z-10 ' /> </Link>
                    <p className='text-blanco w-72 z-20 relative bottom-10'>Code Connect ayuda a clínicas y consultas privadas a ganar visibilidad y llegar a más pacientes.</p>
                </div>
            </div>

            <div className='flex bg-verde justify-between'>

                <div className="flex bg-verde text-blanco justify-start pl-28 pb-5 gap-2 ">
                    <Link to='/Privacidad' ><p className='hover:text-azul'>Privacidad</p></Link>
                    <div className='bg-blanco h-5 w-[2px] '></div>
                    <Link to='/Aviso'><p className='hover:text-azul'>Aviso Legal</p> </Link>
                    <div className='bg-blanco h-5 w-[2px] '></div>
                    <Link to='/Cookies'> <p className='hover:text-azul'>Cookies</p></Link>
                    <div className='bg-blanco h-5 w-[2px] '></div>
                    <Link to='/AboutUs'> <p className='hover:text-azul'>Acerca de</p></Link>
                    <div className='bg-blanco h-5 w-[2px] '></div>
                    <Link to={'/Contact'}><p className='hover:text-azul'>Contacto</p> </Link>
                </div>
                <div className='flex gap-4 mr-40'>
                    <Link to='https://wa.me/34633261963'><img src={ws} alt="whatsapp" className='h-[40px] w-[40px]' /></Link>
                    <Link to='https://www.instagram.com/codeconnectsl/'><img src={int} alt="Instagram" className='h-[40px] w-[40px]' /></Link>
                </div>
            </div>


            <div className='flex bg-verde justify-center items-center h-16 text-blanco'>
                <p>Todos los derechos reservados CodeConnect</p>
            </div>
        </>


    )
}
