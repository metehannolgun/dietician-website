import React from 'react'
import Logo from '../assets/logo.png'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 w-full z-[1000] bg-black/50 backdrop-blur-md shadow-md"
      initial={{opacity: 0, y: -100}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.6}}
    >
      <div className='container mx-auto py-3 flex items-center justify-between'>
        {/* Logo Section */}
        <div>
          <img src={Logo} alt='' className='w-40'/>
        </div>
        {/* Navlinks Section */}
        <ul className='hidden md:flex items-center gap-4'>
          <li className='px-3 py-1.5 rounded-lg hover:bg-red-100/50 transition-all duration-300'>
            <Link to="/" className='text-white hover:text-red-200'>Danışanlarımızdan</Link>
          </li>
          <li className='px-3 py-1.5 rounded-lg hover:bg-red-100/50 transition-all duration-300'>
            <Link to="/hakkımda" className='text-white hover:text-red-200'>Hakkımda</Link>
          </li>
          <li className='px-3 py-1.5 rounded-lg hover:bg-red-100/50 transition-all duration-300'>
            <Link to="/saglikli-tarifler" className='text-white hover:text-red-200'>Sağlıklı Tarifler</Link>
          </li>
        </ul>
        {/* Button Section */}
        <button className='border border-white text-white px-3 py-1.5 rounded-lg hover:bg-red-400 hover:text-white transform duration-300'>İletişim</button>
      </div>
    </motion.header>
  )
}

export default Navbar


