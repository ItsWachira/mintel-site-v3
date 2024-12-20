import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including finance, healthcare, retail, and manufacturing, providing tailored technology solutions for each sector.'
    },
    {
      question: 'How do you ensure data security?',
      answer: 'We implement multiple layers of security including encryption, regular security audits, and compliance with international security standards.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on scope and complexity. We provide detailed project plans during initial consultations.'
    },
    {
      question: 'Do you offer support after implementation?',
      answer: 'Yes, we provide comprehensive post-implementation support including maintenance, updates, and 24/7 technical assistance.'
    }
  ];

  return (
    <div className="bg-[#eef5fd] py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0c4160] mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Find answers to common questions about our services</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-[#0c4160]">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#f7941d]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#f7941d]" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;