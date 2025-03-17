import React from 'react'
import { Link } from 'react-router-dom'
import { tarifListesi } from '../data'

const Tarifler = () => {
  return (
    <div className='min-h-screen pt-50 flex justify-center items-center'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-x-40 gap-y-9'>
        {tarifListesi.map(tarif => (
          <Link to={`/tarif/${tarif.id}`} key={tarif.id}>
            <div className='bg-white rounded-lg shadow-xl p-4'>
              <img src={tarif.resim} alt={tarif.isim} className='w-full h-32 object-cover rounded-t-lg' />
              <div className='p-4'>
                <h2 className='text-gray-800 text-lg font-bold'>{tarif.isim}</h2>
                <p className='text-gray-600'>{tarif.kisaAciklama}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Tarifler