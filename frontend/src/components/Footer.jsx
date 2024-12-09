import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Calzaturificio Nuova Crisci Srl<br/>
            Via Amedeo Bordiga, 10<br/>
            80011 Acerra (NA)<br/>
            Italia
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>Azienda</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>Chi siamo</li>
                <li>Spedizioni</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>Resta in contatto</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+39 0818857768</li>
                <li>info@criscishoes.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ crischishoes.com - Tutti i diritti riservati.</p>
        </div>

    </div>
  )
}

export default Footer