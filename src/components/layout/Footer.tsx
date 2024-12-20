import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0c4160] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-[#f7941d] mb-4">Mintel Solutions</h3>
            <p className="text-sm text-gray-300">
              Market leader in mobile banking solutions integrations for SACCOs.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#solutions" className="text-gray-300 hover:text-[#f7941d]">Solutions</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-[#f7941d]">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-[#f7941d]">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-[#f7941d]">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#f7941d]" />
                contact@mintelsolutions.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#f7941d]" />
                +254 (700) 000-000
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-[#f7941d]" />
                Nairobi, Kenya
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
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
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Mintel Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}