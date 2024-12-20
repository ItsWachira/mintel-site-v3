import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="pt-16 bg-gradient-to-b from-[#0c4160] to-[#1a5580]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transforming Business Through
              <span className="text-[#f7941d]"> Technology</span>
            </h1>
            <p className="text-[#eef5fd] text-lg mb-8">
              Empowering enterprises with cutting-edge solutions in cloud computing,
              fintech, and digital transformation.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#f7941d] text-white px-6 py-3 rounded-md flex items-center gap-2">
                Get Started <ArrowRight size={20} />
              </button>
              <button className="border-2 border-[#eef5fd] text-white px-6 py-3 rounded-md">
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
              alt="Technology Innovation"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;