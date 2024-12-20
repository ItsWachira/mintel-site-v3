import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0c4160] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-[#f7941d] mb-4">TechSphere</h3>
            <p className="text-sm text-gray-300">
              Empowering businesses through innovative technology solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-[#f7941d]">Home</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-[#f7941d]">Products</a></li>
              <li><a href="#company" className="text-gray-300 hover:text-[#f7941d]">Company</a></li>
              <li><a href="#resources" className="text-gray-300 hover:text-[#f7941d]">Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>123 Tech Street</li>
              <li>Silicon Valley, CA 94025</li>
              <li>contact@techsphere.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#f7941d]">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#f7941d]">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#f7941d]">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#f7941d]">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} TechSphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;