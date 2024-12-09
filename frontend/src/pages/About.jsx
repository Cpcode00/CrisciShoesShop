import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'Chi'} text2={'siamo'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px] md:max-h-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <b className='text-gray-800'>Gli inizi</b>
              <p>Da quasi un secolo la famiglia Crisci produce calzature mantenendo e l’amore e l’energia del calzolaio Raffaele, iniziatore di una tradizione che poggia sulla passione e sulla cura meticolosa del suo lavoro. Oggi i giovani artigiani della Nuova Crisci, formati all’interno dell’azienda e seguiti dall’occhio scrupoloso di maestri di grandissima esperienza, iniziano a dare forma ai loro prodotti partendo dal taglio e dalle pelli. La modernizzazione e i macchinari al servizio del lavoro artigianale non hanno intaccato la tradizione Crisci che continua nella passione, cura e precisione dell’antica bottega. Il fondatore dell’antica bottega, mise a sua conoscenza tutte le procedure di origine nord-italia e estere al fine di migliorare la conoscenza del proprio mestiere permettendo all’azienda Crisci di affermarsi nell’arco di un secolo come uno dei più rispettosi dei canoni tradizionali.</p>
              <b className='text-gray-800'>1924</b>
              <p>Fin dal 1924, il giovanissimo Crisci Raffaele iniziò la sua attività nel piccolo laboratorio sotto casa nel paese di Arienzo, in provincia di Caserta, avvalendosi delle sue conoscenze e l’apporto di maestri formai della provincia di Salerno. La bottega fu trasferita, nel 1930, a Bagnoli diventando fabbrica con circa 30 operai e macchinari dell’epoca, tutt’ora funzionati e operanti nell’azienda. Con la II guerra mondiale, la fabbrica dovette sospendere la produzione, in quanto fu colpita dai bombardamenti che vi furono su Bagnoli del 1° novembre 1940.</p>
              <b className='text-gray-800'>1943</b>
              <p>A rimettere l’attività in esercizio fu il figlio, Antonio Crisci, non prima di aver superato una significativa esperienza di lavoro e dura selezione acquisita in altri calzaturifici della zona. Mettendosi in proprio con l’attivita, e rispettoso delle tecniche, la fabbrica si trasforma in un’azienda come punto di riferimento per gli artigiani del comprensorio.</p>
              <b className='text-gray-800'>1967</b>
              <p>Sempre facendo riferimento ai canoni tradizionali, con l’arrivo di Raffaele Crisci, si avvia la produzione di nuovi prodotti con nuove tecniche di lavorazione messe a punto a tempo in base alle richieste dei clienti.</p>
              <b className='text-gray-800'>Oggi</b>
              <p>Tutte le fasi per la produzione delle scarpe vengono eseguite esclusivamente all’interno dell’azienda senza delegare passaggi della lavorazione all’esterno al fine di tenere sotto controllo le procedure rigorose.</p>
              <p>L’offerta dei prodotti Crisci è finalizzata allo scopo di dare un prodotto competitivo sotto tutti i punti di vista: progettazione, calzata, esecuzione, target-status symbol. Oggi, l’innovazione non consiste solo nel rispettare la tradizione, ma costruire scarpe che hanno la funzionalità e la praticità di assecondare l’esigenza della clientela più competente.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'Perchè'} text2={'scegliere noi'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Garanzia di qualità:</b>
            <p className=' text-gray-600'>Selezioniamo e controlliamo meticolosamente ogni prodotto per garantire che soddisfi i nostri rigorosi standard di qualità.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenienza:</b>
            <p className=' text-gray-600'>Grazie alla nostra interfaccia user-friendly e al processo di ordinazione senza problemi, lo shopping non è mai stato così facile.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Servizio clienti eccezionale:</b>
            <p className=' text-gray-600'>Il nostro team di professionisti dedicati è qui per assistervi nel vostro percorso, assicurandovi che la vostra soddisfazione è la nostra massima priorità.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
