import React from 'react';
import { testimonialsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Testimonial = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
     className="py-16 px-4 md:px-20 bg-gray-50 w-full" id='Testimonials'>
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">
          Customer <span className="font-light underline underline-offset-4 decoration-2">Testimonials</span>
        </h1>
        <p className="mt-2 text-gray-600 max-w-sm mx-auto">
          Real stories from those who found a home with us.
        </p>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonialsData.map((data, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Avatar & Info */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={data.image}
                alt={data.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-gray-300"
              />
              <div>
                <h2 className="font-semibold text-lg">{data.name}</h2>
                <p className="text-sm text-gray-500">{data.title}</p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center mb-3">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < data.rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975h4.178c.969 0 1.371 1.24.588 1.81l-3.383 2.456 1.287 3.974c.3.921-.755 1.688-1.538 1.118L10 13.011l-3.37 2.249c-.783.57-1.838-.197-1.538-1.118l1.287-3.974-3.383-2.456c-.783-.57-.38-1.81.588-1.81h4.178L9.05 2.927z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 text-sm leading-relaxed">{data.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonial;
