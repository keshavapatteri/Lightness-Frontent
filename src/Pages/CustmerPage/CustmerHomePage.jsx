import React from 'react'
import { Link } from 'react-router-dom'

const CustmerHomePage = () => {
  return (
    <div className="bg-gray-900 text-white relative">
        
    {/* Hero Section with Background Image */}
    <section className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage:
            "url('https://www.ledspace.co.uk/cdn/shop/articles/Led_only_1024x1024.jpg?v=1646930513')",
        }}
      ></div>

      {/* Overlay to make text visible */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Text Content */}
      <div className="relative flex items-center justify-center h-full text-center p-8">
        <div className="z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            Welcome to Lightness Industries
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Powering the future with innovative Electronics solutions.
          </p>
          <div>
           <Link to = '/custmer/custmerProduct' ><a
              
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 mr-4"
            >
              Products
            </a></Link> 
            <Link to = '/custmer/CustmerContact' >
             <a href="#contact"
              className="bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 text-white hover:text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold transition duration-300"
            >
              Contact Us
            </a></Link>
          </div>
        </div>
      </div>
    </section>

    {/* About Section */}
    <section id="about" className="py-16 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">About Lightness Industries</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-10">
          With over two decades of expertise in Electronics systems and components, Lightness Industries delivers high-performance products for industrial, residential, and commercial applications. Our innovative technology empowers a sustainable and energy-efficient future.
        </p>
        <a href="#services" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300">
          Explore Our Services
        </a>
      </div>
    </section>

    {/* Services Section */}
    <section id="services" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Industrial Power Solutions</h3>
            <p>
              From power distribution to advanced Electronics systems, we offer custom solutions to meet industrial needs.
            </p>
          </div>
          {/* Service 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Residential Installations</h3>
            <p>
              Safe and efficient Electronics systems for homes, including smart technology integration.
            </p>
          </div>
          {/* Service 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Commercial Projects</h3>
            <p>
              Tailored Electronics solutions for commercial buildings with a focus on energy efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
{/* review section */}
<section id="reviews" className="py-16 bg-gray-100 text-gray-900">
<div className="container mx-auto px-4 text-center">
  <h2 className="text-4xl font-bold mb-6">Customer Reviews</h2>
  <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-10">
    Hear what our customers have to say about their experience with Lightness Industries.
  </p>
  
  {/* Review Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Review 1 */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <img 
          src="https://randomuser.me/api/portraits/men/32.jpg" 
          alt="John Doe" 
          className="w-16 h-16 rounded-full mr-4"
        />
        <div className="text-left">
          <h3 className="text-xl font-semibold">John Doe</h3>
          <p className="text-gray-600">Industrial Client</p>
        </div>
      </div>
      <p className="text-gray-800 leading-relaxed">
        "Lightness Industries provided outstanding service for our industrial project. Their attention to detail and energy-efficient solutions are unparalleled. Highly recommend!"
      </p>
    </div>

    {/* Review 2 */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <img 
          src="https://randomuser.me/api/portraits/women/45.jpg" 
          alt="Jane Smith" 
          className="w-16 h-16 rounded-full mr-4"
        />
        <div className="text-left">
          <h3 className="text-xl font-semibold">Jane Smith</h3>
          <p className="text-gray-600">Residential Client</p>
        </div>
      </div>
      <p className="text-gray-800 leading-relaxed">
        "We had Lightness Industries install a smart Electronics system in our home, and we couldn't be happier. The team was professional, and the system works flawlessly."
      </p>
    </div>

    {/* Review 3 */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <img 
          src="https://randomuser.me/api/portraits/men/52.jpg" 
          alt="Michael Lee" 
          className="w-16 h-16 rounded-full mr-4"
        />
        <div className="text-left">
          <h3 className="text-xl font-semibold">Michael Lee</h3>
          <p className="text-gray-600">Commercial Client</p>
        </div>
      </div>
      <p className="text-gray-800 leading-relaxed">
        "Their expertise in commercial Electronics projects is second to none. The team at Lightness Industries delivered a top-notch solution that has improved our building's energy efficiency."
      </p>
    </div>
  </div>
</div>
</section>

  </div>
  )
}

export default CustmerHomePage
