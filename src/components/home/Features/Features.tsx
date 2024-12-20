import { Shield, Smartphone, CreditCard, Zap } from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function Features() {
  const features = [
    {
      icon: Smartphone,
      title: 'Mobile Banking',
      description: 'Complete mobile banking suite with M-PESA, Airtel Money, and Equitel integrations.'
    },
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Bank-grade security infrastructure with advanced fraud prevention.'
    },
    {
      icon: CreditCard,
      title: 'Payment Solutions',
      description: 'Integrated payment card solutions including VISA and Mastercard.'
    },
    {
      icon: Zap,
      title: 'Fast Integration',
      description: 'Quick and seamless integration with existing banking systems.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#eef5fd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[#0c4160] mb-4">
            Enterprise-Grade Features
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features designed for modern SACCOs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}