import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">YourBrand</h2>
          <p className="text-gray-400 text-sm">
            Passionate about properties, dedicated to your vision. Let’s build your dream together.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#Header" className="hover:text-white transition">Home</a></li>
            <li><a href="#About" className="hover:text-white transition">About</a></li>
            <li><a href="#Projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#Testimonials" className="hover:text-white transition">Testimonials</a></li>
            <li><a href="#Contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400 text-sm mb-2">123 Dream Estate Ave, New Delhi, India</p>
          <p className="text-gray-400 text-sm mb-2">Email: support@yourbrand.com</p>
          <p className="text-gray-400 text-sm">Phone: +91 98765 43210</p>

          {/* Social Media */}
          <div className="flex gap-4 mt-4 text-white">
            <a href="#"><FaFacebookF className="hover:text-blue-400 transition" /></a>
            <a href="#"><FaTwitter className="hover:text-blue-300 transition" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-400 transition" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-blue-500 transition" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
