import { Smartphone, CreditCard, MessageSquare, } from 'lucide-react';
import SolutionCard from './SolutionCard';

export default function Solutions() {
  const solutions = [
    {
      icon: Smartphone,
      title: 'Mobile Banking Suite',
      description: 'Complete mobile banking solutions for SACCOs including M-PESA, Airtel Money, and Equitel integrations.'
    },
    {
      icon: MessageSquare,
      title: 'USSD & SMS Services',
      description: 'Branded SMS notifications and USSD services for transactions, loans, and account management.'
    },
    {
      icon: CreditCard,
      title: 'Payment Solutions',
      description: 'Integrated payment solutions including VISA, Mastercard, and mobile money services.'
    },
    {
      icon: CreditCard,
      title: 'Core Banking Systems',
      description: 'Comprehensive core banking solutions for SACCOs with cloud and hybrid deployment options.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#eef5fd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[#0c4160] mb-4">
            Comprehensive SACCO Solutions
          </h2>
          <p className="text-xl text-gray-600">
            Integrated mobile banking and financial solutions for modern SACCOs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
}