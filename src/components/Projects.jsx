import React, { useRef } from 'react';
import { assets, projectsData } from '../assets/assets';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion'

const Projects = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='mx-auto py-4  px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
            <h1 className=' text-2xl sm:text-5xl text-center font-bold '>Projects <span className=' font-light underline underline-offset-4 decoration-1'>Completed</span></h1>
            <p className='text-center mb-8 max-w-96 py-2 mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, laboriosam</p>

            {/* slider button */}
            <div className='flex justify-end items-center mb-8'>
                <button className='p-3 bg-gray-200 rounded mr-2' onClick={() => sliderRef.current.slickPrev()} aria-label='Previous Project'>
                    <img src={assets.left_arrow} alt="Previous" />
                </button>
                <button className='p-3 bg-gray-200 rounded mr-2' onClick={() => sliderRef.current.slickNext()} aria-label='Next Project'>
                    <img src={assets.right_arrow} alt="Next" />
                </button>
            </div>

            {/* project slider */}
            <div className='overflow-hidden'>
                <Slider ref={sliderRef} {...settings}>
                    {projectsData.map((item, index) => (
                        <div className='relative px-4' key={index}>
                            <img src={item.image} alt="" className='mb-14 w-full h-auto rounded' />
                            <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md rounded-md'>
                                    <h2 className='text-xl font-semibold text-gray-800'>{item.title}</h2>
                                    <p className='text-sm text-gray-500'>{item.price} <span></span>{item.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </motion.div>
    );
};

export default Projects;
