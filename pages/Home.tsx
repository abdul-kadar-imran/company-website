
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star, Quote } from 'lucide-react';
import { PARTNERS, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1920" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-20 dark:opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-blue-50/80 dark:from-slate-900 dark:via-slate-900/95 dark:to-blue-900/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <span className="inline-block py-1 px-4 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold uppercase tracking-widest">
              Empowering Careers
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1]">
              Elevate Your <span className="text-blue-600">Tech Future</span> with Aditya Skill Gate
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
              We provide industry-focused IT training and digital solutions designed to transform beginners into professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/Services" 
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-xl shadow-blue-500/30 hover:bg-blue-700 hover:scale-105 transition-all text-center flex items-center justify-center gap-2"
              >
                Our Services <ArrowRight size={18} />
              </Link>
              <Link 
                to="/courses" 
                className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-bold shadow-lg shadow-slate-200/50 dark:shadow-none hover:shadow-xl transition-all text-center"
              >
                Start Learning
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative">
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl" />
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
             <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
              alt="IT Training" 
              className="rounded-3xl shadow-2xl relative z-10 border-4 border-white dark:border-slate-800"
            />
          </div>
        </div>
      </section>

      {/* 2. Why Choose Aditya Skill Gate */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why Choose Us?</h2>
            <div className="w-20 h-1.5 bg-green-500 mx-auto rounded-full mb-6" />
            <p className="text-slate-600 dark:text-slate-400">We bridge the gap between academic education and industry requirements.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Industry-Focused Training', 
                desc: 'Our curriculum is designed by working professionals from top MNCs to ensure you learn what is relevant.',
                color: 'bg-blue-50 dark:bg-blue-900/10 text-blue-600'
              },
              { 
                title: 'Practical Learning', 
                desc: 'Build real-world projects and gain hands-on experience that you can showcase on your portfolio.',
                color: 'bg-green-50 dark:bg-green-900/10 text-green-600'
              },
              { 
                title: 'Career-Oriented Benefits', 
                desc: '100% placement assistance, resume building workshops, and mock interview sessions with experts.',
                color: 'bg-purple-50 dark:bg-purple-900/10 text-purple-600'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-md shadow-slate-100 dark:shadow-none hover:shadow-2xl hover:-translate-y-2 transition-all group bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
                <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform`}>
                  <CheckCircle size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What Our Students Say */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Student Testimonials</h2>
            <p className="text-slate-600 dark:text-slate-400">Join thousands of successful graduates who changed their careers with us.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 relative overflow-hidden group hover:scale-[1.02] transition-transform">
                <Quote className="absolute -top-4 -right-4 w-24 h-24 text-slate-100 dark:text-slate-700/20 -z-0" />
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full border-2 border-blue-500 p-1 object-cover" />
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{t.role}</p>
                    <div className="flex text-yellow-400 mt-1">
                      {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 italic leading-relaxed relative z-10">"{t.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Hiring Partners */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-12">Trusted by Global Tech Leaders</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {PARTNERS.map(partner => (
              <div 
                key={partner.name} 
                className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-md shadow-slate-100 dark:shadow-none hover:shadow-2xl hover:border-blue-500/30 dark:hover:border-blue-400/30 hover:-translate-y-2 transition-all duration-300 group flex items-center justify-center min-h-[140px]"
              >
                <div className="relative w-full h-12 flex items-center justify-center opacity-100 group-hover:scale-110 transition-transform duration-500">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-[80%] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
