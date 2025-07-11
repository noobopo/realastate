import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"

const Header = () => {
    return (
        <div className=' min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{ backgroundImage: "url('/header_img.png')" }} id='Header'>
            <Navbar />
            <motion.div
            initial ={{opacity:0, y:100}}
            transition={{duration:1.5}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
             className=' flex flex-col items-center justify-center w-full text-white'>
                <h1 className=' text-6xl font-bold text-center'>Explore homes that fite your dreams</h1>
                <div className=' flex gap-4 m-8 '>
                    <a className=' border border-white px-4.5 py-1.5 rounded' href="#Projects">Projects</a>
                    <a  className=' bg-blue-500  px-3 py-1.5 rounded' href="#contact">Contuct Us</a>
                </div>
            </motion.div>

        </div>
    )
}

export default Header