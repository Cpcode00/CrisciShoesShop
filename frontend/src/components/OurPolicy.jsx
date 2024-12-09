import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className=' font-semibold'>Politica di scambio facile</p>
        <p className=' text-gray-400'>Offriamo una politica di cambio senza problemi</p>
      </div>
      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className=' font-semibold'>Politica di restituzione di 7 giorni</p>
        <p className=' text-gray-400'>Forniamo una politica di restituzione gratuita di 7 giorni</p>
      </div>
      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className=' font-semibold'>Il miglior supporto clienti</p>
        <p className=' text-gray-400'>Forniamo assistenza clienti 24 ore su 24, 7 giorni su 7</p>
      </div>

    </div>
  )
}

export default OurPolicy
