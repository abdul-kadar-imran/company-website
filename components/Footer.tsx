
import React from 'react';
import { Facebook, Instagram, Linkedin, Send, Rocket } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white">
                <Rocket size={18} />
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">Aditya Skill Gate</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm mb-6">
              Empowering the next generation of tech leaders through industry-standard training and cutting-edge IT solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="p-2 bg-white dark:bg-slate-800 rounded-full text-blue-600 shadow-sm hover:scale-110 transition-transform">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="p-2 bg-white dark:bg-slate-800 rounded-full text-pink-500 shadow-sm hover:scale-110 transition-transform">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="p-2 bg-white dark:bg-slate-800 rounded-full text-blue-700 shadow-sm hover:scale-110 transition-transform">
                <Linkedin size={20} />
              </a>
              <a href="https://wa.me/9100000000" className="p-2 bg-white dark:bg-slate-800 rounded-full text-green-500 shadow-sm hover:scale-110 transition-transform">
                <Send size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li><a href="#/" className="hover:text-blue-600">Home</a></li>
              <li><a href="#/" className="hover:text-blue-600">About Us</a></li>
              <li><a href="#/" className="hover:text-blue-600">Courses</a></li>
              <li><a href="#/" className="hover:text-blue-600">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Contact Info</h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
              <li>123 Tech Avenue, Skill City</li>
              <li>New Delhi, India - 110001</li>
              <li>info@adityaskillgate.com</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Aditya Skill Gate IT Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
