import React from 'react'


export default function Formulario() {
  return (
    <div>
      <div className='h-[227px] bg-azul flex justify-center items-center text-blanco text-5xl font-bold'>Contacto
      </div>

      <div className='flex justify-around pt-20 pb-32'>
        <div className='flex flex-col bg-[#E9E9E9] justify-center items-center h-[181px] w-[347px] gap-8'>
          <p className='text-blanco text-xl font-semibold drop-shadow-2xl'>Tlf / Whatsapp</p>
          <p className='text-azul text-xl font-semibold'>633 261 963</p>
        </div>
        <div className='flex flex-col bg-[#E9E9E9] justify-center items-center h-[181px] w-[347px] gap-8'>
          <p className='text-blanco text-xl font-semibold drop-shadow-2xl'>Email</p>
          <p className='text-azul text-xl font-semibold'>info@codeconnect.es</p>
        </div>
        <div className='flex flex-col bg-[#E9E9E9] justify-center items-center h-[181px] w-[347px] gap-8'>
          <p className='text-blanco text-xl font-semibold drop-shadow-2xl'>Horario</p>
          <p className='text-azul text-xl font-semibold'>L - V: 8:00-18:00</p>
        </div>
      </div>


      <section className='flex bg-support h-[410px] text-blanco justify-around'>

        <div className='  '>
          <h1 className='font-semibold text-3xl justify-center h-[74px] mt-24 '>Respondemos en menos de 24 horas laborables</h1>
          <div className='flex gap-10'>

            <div className='flex-col'>
              <p className='font-semibold text-xl'>Whatsapp</p>
              <p className='h-[69px] w-[289px] font-semibold'>Si lo prefieres podemos comunicarnos por este canal mediante audio y texto.</p>
            </div>
            <div>
              <p className='font-semibold text-xl '>Videollamada</p>
              <p className='h-[69px] w-[325px] font-semibold '>También podemos reunirnos mediante este canal en plataformas como Zoom, Skype o Google Meet.</p>
            </div>
          </div>
        </div>

        <div className='h-[580px] w-[445px] bg-[#E9E9E9] flex justify-center items-center p-4 rounded relative bottom-24 border-2 border-gris'>
          <form className="flex flex-col gap-2 ">
            <input className="border border-border rounded h-[47px] w-[347px] " type="text" id="name" placeholder=' Nombre Completo' />
            <input className="border border-border rounded h-[47px] w-[347px]" type="email" name="mail" id="" placeholder=' Email' />
            <input className="border border-border rounded h-[47px] w-[347px] " type="tel" name="phone" id="phone" placeholder=" Teléfono" />
            <textarea className="border border-border rounded " name="ayuda" placeholder=" ¿En qué podemos ayudarte?" id="ayuda" rows="10"
              cols="10"></textarea>
            <div className=" flex justify-start max-w-[470px] gap-1 text-negro">
              <input type="checkbox" name="agree" id="agree" />
              <label htmlFor="agree">Acepto la Política de Privacidad y los Términos y condiciones.
              </label>
            </div>
            <input className="bg-azul text-blanco bg-green-800 text-sm p-2 w-20 rounded-lg m-5" type="submit" name="Enviar" />
          </form>
        </div>

      </section>



    </div>
  )
}
