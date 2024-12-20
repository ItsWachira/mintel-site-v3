import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0c4160] mb-4">Contact Us</h2>
          <p className="text-gray-600">Get in touch with our team</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#eef5fd] p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-[#0c4160] mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-[#f7941d] mr-3" />
                <span>contact@techsphere.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-[#f7941d] mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-[#f7941d] mr-3" />
                <span>123 Tech Street, Silicon Valley, CA 94025</span>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f7941d] focus:ring focus:ring-[#f7941d] focus:ring-opacity-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f7941d] focus:ring focus:ring-[#f7941d] focus:ring-opacity-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f7941d] focus:ring focus:ring-[#f7941d] focus:ring-opacity-50"></textarea>
            </div>
            <button className="w-full bg-[#f7941d] text-white px-6 py-3 rounded-md hover:bg-[#e88710]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;