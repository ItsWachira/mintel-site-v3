import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="group relative bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c4160]/5 to-[#f7941d]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <Icon className="w-12 h-12 text-[#f7941d] mb-6" />
        <h3 className="text-xl font-semibold text-[#0c4160] mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;