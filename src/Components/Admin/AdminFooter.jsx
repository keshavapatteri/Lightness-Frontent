import React from 'react';

const AdminFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        {/* Copyright Section */}
        <p className="text-sm mb-4">&copy; {new Date().getFullYear()} Admin Panel. All rights reserved.</p>

        {/* Footer Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-gray-400">Terms of Service</a>
          <a href="/contact" className="hover:text-gray-400">Contact Us</a>
        </div>

        {/* Social Media Icons (Placeholder for now) */}
        <div className="flex justify-center space-x-4">
          <a href="#" aria-label="Facebook" className="hover:text-gray-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default AdminFooter;
