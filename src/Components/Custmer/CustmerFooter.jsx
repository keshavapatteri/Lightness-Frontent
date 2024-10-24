import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
const CustmerFooter = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Lightness Industries</h2>
          <p className="text-gray-400">
            Powering the future with cutting-edge Electronics solutions.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#about" className="hover:text-yellow-400">About Us</a>
            </li>
            <li className="mb-2">
              <a href="#services" className="hover:text-yellow-400">Services</a>
            </li>
            <li className="mb-2">
              <a href="#projects" className="hover:text-yellow-400">Projects</a>
            </li>
            <li className="mb-2">
              <a href="#contact" className="hover:text-yellow-400">Contact Us</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Stay Connected</h3>
          <div className="flex space-x-4 mb-6">
            <a href="https://twitter.com" className="text-gray-400 hover:text-yellow-400">
              <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
            </a>
            <a href="https://facebook.com" className="text-gray-400 hover:text-yellow-400">
              <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-yellow-400">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </a>
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 w-full bg-gray-700 border border-gray-600 text-white rounded-md mb-2"
            />
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 py-2 px-4 rounded-md transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-600 pt-4 text-center">
        <p className="text-gray-500">&copy; 2024 Lightness Industries. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default CustmerFooter
