import React from 'react';
import { Cloud, Shield, Database, Code } from 'lucide-react';

const Products = () => {
  const services = [
    {
      icon: <Cloud className="w-12 h-12 text-[#f7941d]" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for enterprise needs.'
    },
    {
      icon: <Shield className="w-12 h-12 text-[#f7941d]" />,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets.'
    },
    {
      icon: <Database className="w-12 h-12 text-[#f7941d]" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our analytics solutions.'
    },
    {
      icon: <Code className="w-12 h-12 text-[#f7941d]" />,
      title: 'Custom Development',
      description: 'Tailored software solutions for your unique business needs.'
    }
  ];

  return (
    <div id="products" className="bg-[#eef5fd] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0c4160] mb-4">Our Solutions</h2>
          <p className="text-gray-600">Comprehensive technology services for modern businesses</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#0c4160] mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;