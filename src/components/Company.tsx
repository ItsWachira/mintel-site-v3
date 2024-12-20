import React from 'react';
import { Users, Target, Award } from 'lucide-react';

const Company = () => {
  return (
    <div id="company" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0c4160] mb-4">Our Company</h2>
          <p className="text-gray-600">Building the future of technology together</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Users className="w-12 h-12 text-[#f7941d] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#0c4160] mb-2">Our Team</h3>
            <p className="text-gray-600">Expert professionals dedicated to your success</p>
          </div>
          <div className="text-center">
            <Target className="w-12 h-12 text-[#f7941d] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#0c4160] mb-2">Our Mission</h3>
            <p className="text-gray-600">Empowering businesses through innovative technology</p>
          </div>
          <div className="text-center">
            <Award className="w-12 h-12 text-[#f7941d] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#0c4160] mb-2">Our Values</h3>
            <p className="text-gray-600">Excellence, integrity, and customer success</p>
          </div>
        </div>

        <div className="mt-16">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
            alt="Company Office"
            className="rounded-lg shadow-xl w-full object-cover h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Company;