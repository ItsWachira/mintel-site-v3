import { Server, Shield, Smartphone, Headphones } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Smartphone className="w-12 h-12 text-[#f7941d]" />,
      title: 'Mobile Solutions',
      description: 'SMS, USSD, Mobile Money, and Mobile Applications integrations.'
    },
    {
      icon: <Server className="w-12 h-12 text-[#f7941d]" />,
      title: 'Software Solutions',
      description: 'ERP, CRM, BI & Core Banking Applications tailored to your needs.'
    },
    {
      icon: <Shield className="w-12 h-12 text-[#f7941d]" />,
      title: 'IT Security',
      description: 'Comprehensive security solutions to protect your digital assets.'
    },
    {
      icon: <Headphones className="w-12 h-12 text-[#f7941d]" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance services.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0c4160] mb-4">Our Services</h2>
          <p className="text-gray-600">Comprehensive technology services for financial institutions</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#eef5fd] p-6 rounded-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#0c4160] mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}