import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <div
            className=' flex flex-col justify-center items-center mx-auto p-12 md:px-20 w-full overflow-hidden' id='About'>
            <h1 className=' text-2xl md:text-5xl font-bold mb-3'>About <span className=' underline underline-offset-4 decoration-1 font-light'>Our Brand</span></h1>
            <p className='  text-center mb-20'>Passinate About Propaties, Dedicate To Your Vision</p>
            <motion.div
                initial={{ opacity: 0, x: 200 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className=' flex flex-col md:flex-col lg:flex-row items-center md:items-start md:gap-35'>
                <img src={assets.brand_img} alt="" className=' h-[45vh] md:h-[65vh]' />
                <div className=' flex flex-col items-center md:items-start mt-20'>
                    <div className=' grid grid-cols-2 gap-6 w-full'>
                        <div>
                            <p className=' text-3xl font-bold'>10+</p>
                            <p>Years of Experiance</p>
                        </div>
                        <div>
                            <p className=' text-3xl font-bold'>12+</p>
                            <p>Priject Compleated</p>
                        </div>
                        <div>
                            <p className=' text-3xl font-bold'>20+</p>
                            <p>Mn. Sq. Ft. Delevered</p>
                        </div>
                        <div>
                            <p className=' text-3xl font-bold'>25+</p>
                            <p>OnGoing Projects</p>
                        </div>
                    </div>
                    <p className='my-10 max-w-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, corporis officia. Nam deleniti aliquam culpa earum doloribus eveniet inventore sequi minus error, dignissimos quos, eos velit placeat molestias illum, autem non distinctio fuga. Temporibus similique quas sequi eligendi excepturi a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, delectus!</p>
                    <button className=' px-10 py-2 bg-gray-900 text-white rounded'>Learn More</button>
                </div>
            </motion.div>
        </div>
    )
}

export default About