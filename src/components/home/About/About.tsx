import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function About() {
  const features = [
    'Over 15 financial institutions served',
    'Comprehensive mobile banking solutions',
    'Secure and reliable integrations',
    'Expert technical support',
  ];

  return (
    <section id="about" className="py-20 bg-[#eef5fd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
              alt="Mintel Solutions Office"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-[#0c4160] mb-6">Why Choose Mintel Solutions?</h2>
            <p className="text-gray-600 mb-8">
              Mintel Solutions is a technology company specializing in mobile solutions integrations
              and hosted online applications. We build long-term relationships with customers in
              specific vertical industry segments, offering competitive, integrated solutions.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-[#f7941d] w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}