
import React from 'react';
import { Target, Eye, Users, Heart, Award, Linkedin } from 'lucide-react';
import { TEAM_MEMBERS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-20 pb-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Building the Future of IT Training</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Founded with a vision to democratize high-end tech skills, Aditya Skill Gate IT Solutions has grown into a hub for digital excellence and industry-leading development services.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="bg-blue-600 p-12 rounded-[2rem] text-white relative overflow-hidden shadow-2xl shadow-blue-500/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
            <Target className="w-12 h-12 mb-6 text-blue-200" />
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-blue-50 leading-relaxed text-lg">
              To empower individuals with practical, industry-relevant technical skills and provide businesses with innovative IT solutions that drive growth and digital transformation.
            </p>
          </div>
          <div className="bg-slate-900 dark:bg-slate-800 p-12 rounded-[2rem] text-white relative overflow-hidden border border-slate-700 shadow-2xl shadow-slate-900/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -mr-16 -mt-16" />
            <Eye className="w-12 h-12 mb-6 text-green-400" />
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-slate-400 dark:text-slate-400 leading-relaxed text-lg">
              To be a global leader in IT education and services, recognized for our commitment to excellence, integrity, and fostering the next generation of digital innovators.
            </p>
          </div>
        </div>

        {/* Founder's Message */}
        <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-3xl p-12 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 mb-24 flex flex-col md:flex-row gap-12 items-center">
          <div className="relative flex-shrink-0">
             <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-green-500 rounded-[2.5rem] opacity-20 blur-2xl" />
             <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600" alt="Founder" className="w-64 h-80 rounded-[2rem] object-cover shadow-2xl relative z-10" />
          </div>
          <div>
            <span className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-2 block">Message from Founder</span>
            <h2 className="text-3xl font-bold mb-6">"Education is the most powerful tool for change."</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-lg italic">
              "We started Aditya Skill Gate with a simple goal: to make quality IT training accessible. Today, we don't just teach coding; we build careers. Our focus remains on practical skills and real-world results that translate directly to industry value."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-1 bg-green-500 rounded-full" />
              <div>
                <p className="font-bold text-xl">Aditya Kumar</p>
                <p className="text-slate-500 dark:text-slate-400">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">Our Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Award className="text-blue-600" />, title: 'Excellence', desc: 'Highest standards of quality' },
              { icon: <Users className="text-green-600" />, title: 'Community', desc: 'Growing together as one' },
              { icon: <Heart className="text-red-500" />, title: 'Integrity', desc: 'Honesty in every action' },
              { icon: <Target className="text-purple-600" />, title: 'Results', desc: 'Success-driven outcomes' }
            ].map((value, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white p-8 rounded-2xl text-center shadow-lg shadow-slate-100 dark:shadow-none border border-slate-50 dark:border-slate-700 hover:-translate-y-2 transition-all">
                <div className="flex justify-center mb-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-full w-16 h-16 mx-auto shadow-inner">{value.icon}</div>
                <h3 className="font-bold mb-1">{value.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Meet Our Experts</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="group bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-3xl overflow-hidden shadow-xl shadow-slate-100 dark:shadow-none border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center p-6 hover:shadow-2xl hover:border-blue-500 transition-all">
                <div className="relative w-40 h-40 mb-6 group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-green-500 rounded-full animate-pulse opacity-0 group-hover:opacity-20" />
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full rounded-full object-cover border-4 border-slate-50 dark:border-slate-700 group-hover:scale-110 transition-transform shadow-lg" 
                  />
                  <div className="absolute -bottom-2 right-0 flex gap-1">
                    <div className="p-2 bg-blue-600 rounded-full text-white shadow-lg cursor-pointer hover:scale-110 transition-all"><Linkedin size={14} /></div>
                  </div>
                </div>
                <h4 className="font-bold text-xl mb-1">{member.name}</h4>
                <p className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-wider mb-3">{member.designation}</p>
                <div className="px-4 py-1.5 bg-slate-100 dark:bg-slate-700 rounded-full">
                  <p className="text-slate-600 dark:text-slate-300 text-xs font-semibold">{member.specialist}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
