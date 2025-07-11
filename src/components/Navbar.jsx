import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    const [mobile, setmobile] = useState(false)
    const click = ()=>{
        setmobile(!mobile)
    }
    return (
        <>
            <div className=' absolute z-100  py-3 px-8 md:px-15 lg:px-25  top-0 w-full '>
                <div className=' flex items-center justify-between transition-all duration-300'>
                    <img src={assets.logo} alt="" />
                    <ul className=' hidden md:flex gap-12 text-white'>
                        <a className=' group flex flex-col justify-center items-center cursor-pointer' href="#Header">
                            <p>Home</p>
                            <div className=' opacity-0 group-hover:opacity-100 w-[125%] h-0.5 bg-white transition-all duration-500'></div>
                        </a>
                        <a className=' group flex flex-col justify-center items-center cursor-pointer' href="#About">
                            <p>About</p>
                            <div className=' opacity-0 group-hover:opacity-100 w-[125%] h-0.5 bg-white transition-all duration-500'></div>
                        </a>
                        <a className=' group flex flex-col justify-center items-center cursor-pointer' href="#Projects">
                            <p>Projects</p>
                            <div className=' opacity-0 group-hover:opacity-100 w-[125%] h-0.5 bg-white transition-all duration-500'></div>
                        </a>
                        <a className=' group flex flex-col justify-center items-center cursor-pointer' href="#Testimonials">
                            <p>Testimonials</p>
                            <div className=' opacity-0 group-hover:opacity-100 w-[125%] h-0.5 bg-white transition-all duration-500'></div>
                        </a>
                    </ul>
                    <button className=' hidden md:block bg-white hover:bg-transparent hover:border hover:text-white transition-all duration-500 px-8 py-1 cursor-pointer rounded-2xl'>Sign Up</button>
                    <img onClick={click} src={assets.menu_icon} alt="" className='md:hidden w-7 ' />
                </div>

                {/* mobile menu */}
                <div className={`md:hidden ${mobile ? 'fixed w-[50%]' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all duration-300`}>
                    <div className=' flex justify-end p-3'>
                        <img onClick={click} src={assets.cross_icon} alt="" className='w-5 cursor-pointer' />
                    </div>
                    <ul className=' flex flex-col justify-center gap-5 mx-auto'>
                        <a onClick={click}  className=' group flex flex-col justify-center items-center cursor-pointer' href="#Header">
                            Home
                        </a>
                        <a onClick={click}  className=' group flex flex-col justify-center items-center cursor-pointer' href="#About">
                            About
                        </a>
                        <a onClick={click}  className=' group flex flex-col justify-center items-center cursor-pointer' href="#Projects">
                            Projects
                        </a>
                        <a onClick={click}  className=' group flex flex-col justify-center items-center cursor-pointer' href="#Testimonials">
                            Testimonials
                        </a>
                        <button onClick={click}  className=''>Sign Up</button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar