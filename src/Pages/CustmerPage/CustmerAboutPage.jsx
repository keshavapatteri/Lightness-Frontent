import React from 'react';

const CustomerAboutPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Title and Intro */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Lightness Industries
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
            At Lightness Industries, we believe in lighting the way forward with eco-friendly and innovative solutions that enhance everyday life. Discover how we’re revolutionizing energy efficiency from the heart of Madikai.
          </p>
        </div>

        {/* Middle Section: Image and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side: Text */}
          <div>
            <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Our mission is simple: to bring light into every home and business while promoting sustainability and cutting-edge technology. We focus on creating energy-efficient products that not only serve customers but also preserve the planet.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              From the heart of Madikai, our team draws inspiration from nature to develop solutions that balance innovation with eco-conscious practices.
            </p>
          </div>

          {/* Right Side: Image */}
          <div className="flex justify-center">
            <img
              src="https://www.ledexpothailand.com/wp-content/uploads/2023/05/Untitled-design-6.jpg"
              alt="Sustainable Innovation"
              className="rounded-xl shadow-lg object-cover w-full h-96 transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Bottom Section: Vision & Values */}
        <div className="mt-20">
          <h2 className="text-4xl font-semibold text-center text-blue-600 dark:text-blue-400 mb-10">
            Vision & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                Sustainability
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We are committed to sustainability, creating eco-friendly solutions that contribute to a cleaner environment and healthier future.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                Innovation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Innovation is at the core of everything we do. We constantly explore new technologies to develop solutions that are both efficient and reliable.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                Community
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We are passionate about giving back to the community, supporting local initiatives, and empowering the regions we serve with sustainable opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerAboutPage;
