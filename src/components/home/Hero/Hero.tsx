import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import GradientBackground from './GradientBackground';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      <GradientBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-[#0c4160] to-[#f7941d] bg-clip-text text-transparent">
                Mobile Banking Solutions
              </span>
              <br />
              for Modern SACCOs
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Market leader in mobile banking solutions integrations. We integrate M-PESA,
              Airtel Money, and Equitel Eazzy Pay for over 15 financial institutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#0c4160] text-white px-8 py-3 rounded-full hover:bg-[#0c4160]/90 transition-all transform hover:scale-105">
                Get Started <ArrowRight className="inline ml-2" size={20} />
              </button>
              <button className="border-2 border-[#0c4160] text-[#0c4160] px-8 py-3 rounded-full hover:bg-[#0c4160] hover:text-white transition-all">
                Contact Sales
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0c4160]/20 to-[#f7941d]/20 rounded-3xl transform rotate-3" />
            <Image
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3"
              alt="Mobile Banking Solutions"
              width={600}
              height={400}
              className="relative rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}