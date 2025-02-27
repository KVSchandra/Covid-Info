import React from 'react'
import { motion } from "framer-motion";
import Logo from "../../assets/logo.png"

function Navbar() {
  return (
    <motion.header
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}>
        <div className='container py-5 flex items-center justify-between'>
            {/* Logo Section */}
            <div>
                <a href="#">
                    <img src={Logo} alt="Logo" className='w-40'/>
                </a>
            </div>
            {/* NavLinks Section */}
            <div>
                <ul className='hidden md:flex items-center gap-5'>
                    <li>
                        <a href="#">Products</a>
                    </li>
                    <li>
                        <a href="#">Customer Stories</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Blogs</a>
                    </li>
                </ul>
            </div>
            {/* Button Section */}
            <div>
                <button className='border border-gray-400 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300'> Get in touch </button>
            </div>
        </div>
    </motion.header>
  )
}

export default Navbar