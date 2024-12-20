import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-[#0c4160] fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-[#f7941d] text-2xl font-bold">TechSphere</div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-white hover:text-[#f7941d] px-3 py-2">Home</a>
              <a href="#products" className="text-white hover:text-[#f7941d] px-3 py-2">Products</a>
              <a href="#company" className="text-white hover:text-[#f7941d] px-3 py-2">Company</a>
              <a href="#resources" className="text-white hover:text-[#f7941d] px-3 py-2">Resources</a>
              <a href="#contact" className="bg-[#f7941d] text-white px-4 py-2 rounded-md">Contact Us</a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0c4160]">
            <a href="#home" className="text-white block px-3 py-2">Home</a>
            <a href="#products" className="text-white block px-3 py-2">Products</a>
            <a href="#company" className="text-white block px-3 py-2">Company</a>
            <a href="#resources" className="text-white block px-3 py-2">Resources</a>
            <a href="#contact" className="bg-[#f7941d] text-white block px-3 py-2 rounded-md">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;