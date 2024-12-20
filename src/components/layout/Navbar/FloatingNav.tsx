"use client"

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/utils/cn';

export default function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed w-full z-50 transition-all duration-300',
      isScrolled ? 'py-4 bg-white/80 backdrop-blur-lg shadow-lg' : 'py-6 bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#0c4160] to-[#f7941d] bg-clip-text text-transparent">
              Mintel Solutions
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <button className="bg-[#0c4160] text-white px-6 py-2 rounded-full hover:bg-[#0c4160]/90 transition-colors">
              Contact Sales
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <MobileNavLinks />
          </div>
        </div>
      )}
    </nav>
  );
}

const NavLinks = () => (
  <>
    <a href="#solutions" className="text-gray-700 hover:text-[#0c4160] transition-colors">Solutions</a>
    <a href="#services" className="text-gray-700 hover:text-[#0c4160] transition-colors">Services</a>
    <a href="#about" className="text-gray-700 hover:text-[#0c4160] transition-colors">About</a>
    <a href="#contact" className="text-gray-700 hover:text-[#0c4160] transition-colors">Contact</a>
  </>
);

const MobileNavLinks = () => (
  <div className="flex flex-col space-y-4">
    <NavLinks />
    <button className="bg-[#0c4160] text-white px-6 py-2 rounded-full hover:bg-[#0c4160]/90 transition-colors">
      Contact Sales
    </button>
  </div>
);