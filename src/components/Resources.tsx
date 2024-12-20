import React from 'react';
import { BookOpen, FileText, Video } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      icon: <BookOpen className="w-8 h-8 text-[#f7941d]" />,
      title: 'Knowledge Base',
      description: 'Access our comprehensive guides and documentation'
    },
    {
      icon: <FileText className="w-8 h-8 text-[#f7941d]" />,
      title: 'Case Studies',
      description: 'Read about our successful client implementations'
    },
    {
      icon: <Video className="w-8 h-8 text-[#f7941d]" />,
      title: 'Video Tutorials',
      description: 'Watch step-by-step guides and product demos'
    }
  ];

  return (
    <div id="resources" className="bg-[#eef5fd] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0c4160] mb-4">Resources</h2>
          <p className="text-gray-600">Everything you need to succeed with our solutions</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{resource.icon}</div>
              <h3 className="text-xl font-semibold text-[#0c4160] mb-2">{resource.title}</h3>
              <p className="text-gray-600">{resource.description}</p>
              <button className="mt-4 text-[#f7941d] font-semibold hover:text-[#0c4160]">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;