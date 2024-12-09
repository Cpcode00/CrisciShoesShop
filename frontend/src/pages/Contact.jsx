import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'Contattaci'} text2={''} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Il nostro negozio</p>
          <p className=' text-gray-500'>Via Amedeo Bordiga, 10 <br />80011 Acerra (NA) <br/>Italia</p>
          <p className=' text-gray-500'>Tel: +390818857768 <br /> Email: info@criscishoes.com</p>
          <p className='font-semibold text-xl text-gray-600'>Carriera in CrisciShoes</p>
          <p className=' text-gray-500'>Per saperne di più sui nostri team e sulle offerte di lavoro.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Esplora le offerte di lavoro</button>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default Contact
