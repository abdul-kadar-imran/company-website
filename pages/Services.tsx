
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Code, 
  TrendingUp, 
  ShoppingCart, 
  Smartphone, 
  LineChart, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Globe,
  Settings,
  Search,
  MessageSquare
} from 'lucide-react';

const Services: React.FC = () => {
  const serviceEcosystem = [
    {
      title: 'Brand Identity & Strategy',
      category: 'Branding',
      price: '₹20,000',
      description: 'Establish a powerful market presence with a cohesive and memorable brand identity.',
      icon: <Briefcase className="text-blue-600" size={32} />,
      features: [
        'Logo Design & Visual Assets',
        'Comprehensive Brand Guidelines',
        'Custom Marketing Materials',
        'Digital Asset Creation',
        'Strategic Brand Positioning',
        'Social Media Identity Kit'
      ]
    },
    {
      title: 'Website Development',
      category: 'Development',
      price: '₹25,000',
      description: 'High-performance websites designed to convert visitors into loyal customers.',
      icon: <Code className="text-green-600" size={32} />,
      features: [
        'Fully Responsive Web Design',
        'SEO-Friendly Code Structure',
        'Performance & Speed Optimization',
        'Modern UI/UX Principles',
        'Custom CMS Integration',
        'Cross-Browser Compatibility'
      ]
    },
    {
      title: 'Digital Marketing',
      category: 'Marketing',
      price: '₹15,000',
      description: 'Accelerate your business growth through data-driven digital marketing strategies.',
      icon: <TrendingUp className="text-purple-600" size={32} />,
      features: [
        'Strategic Social Media Management',
        'Engaging Content Creation',
        'Advanced Search Engine Optimization',
        'ROI-Focused Paid Advertising',
        'Comprehensive Analytics Reports',
        'Targeted Lead Generation'
      ]
    },
    {
      title: 'E-commerce Solutions',
      category: 'E-commerce',
      price: '₹60,000',
      description: 'Scalable and secure online stores built to maximize your digital sales.',
      icon: <ShoppingCart className="text-orange-600" size={32} />,
      features: [
        'Custom E-store Design',
        'Secure Payment Gateway Setup',
        'Advanced Inventory Management',
        'Efficient Order Processing',
        'Mobile-First Store Optimization',
        'Conversion Rate Optimization'
      ]
    },
    {
      title: 'Mobile App Development',
      category: 'Development',
      price: '₹80,000',
      description: 'Feature-rich Android and iOS applications that provide seamless user experiences.',
      icon: <Smartphone className="text-blue-500" size={32} />,
      features: [
        'Native Android & iOS Apps',
        'User-Centric UI/UX Design',
        'Robust Backend Integration',
        'Smart Push Notification Systems',
        'Core Performance Optimization',
        'Deployment & App Store Support'
      ]
    },
    {
      title: 'IT & Business Consulting',
      category: 'Consulting',
      price: '₹5,000 per session',
      description: 'Expert guidance to navigate the digital landscape and optimize your business processes.',
      icon: <LineChart className="text-red-500" size={32} />,
      features: [
        'Custom Technology Strategy',
        'Business Process Optimization',
        'Digital Transformation Roadmap',
        'Operational Performance Analysis',
        'Strategic Growth Planning',
        'Tech Stack Evaluation'
      ]
    }
  ];

  const workflowSteps = [
    {
      number: '01',
      title: 'Discovery & Analysis',
      desc: 'We start by understanding your unique business challenges, goals, and target audience through deep research.'
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      desc: 'Our experts craft a detailed technical and marketing roadmap to ensure project alignment and success.'
    },
    {
      number: '03',
      title: 'Design & Prototyping',
      desc: 'We create intuitive, high-fidelity designs and interactive prototypes to visualize the final outcome.'
    },
    {
      number: '04',
      title: 'Development & Build',
      desc: 'Our developers bring the vision to life using cutting-edge technologies and best coding practices.'
    },
    {
      number: '05',
      title: 'Testing & QA',
      desc: 'Rigorous quality assurance ensures a bug-free, secure, and high-performance final product.'
    },
    {
      number: '06',
      title: 'Launch & Support',
      desc: 'We handle the deployment and provide continuous support to ensure your long-term digital growth.'
    }
  ];

  return (
    <div className="flex flex-col bg-white dark:bg-slate-900">
      {/* SECTION 1: HERO SECTION */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30 dark:opacity-10 overflow-hidden">
           <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
           <div className="absolute top-1/2 -right-24 w-64 h-64 bg-green-500 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-2 px-4 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            Our Digital Solutions
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight mb-8">
            Catalyzing <span className="text-blue-600 dark:text-blue-400">Digital Growth</span> <br className="hidden md:block"/> Through Innovation
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
            From visionary brand identities to enterprise-grade software development, we provide end-to-end expertise designed to scale your business in the modern economy.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/contact" 
              className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold shadow-2xl shadow-blue-600/30 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center gap-3"
            >
              Book a Consultation <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR SERVICE ECOSYSTEM */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Our Service Ecosystem</h2>
            <div className="h-1.5 w-20 bg-green-500 mx-auto rounded-full mb-8" />
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Explore our comprehensive range of high-converting digital services tailored for startups and established enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceEcosystem.map((service, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-300 flex flex-col group"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-2xl group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 block">Starting from</span>
                    <span className="text-xl font-bold text-blue-600 dark:text-blue-400">{service.price}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em]">{service.category}</span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{service.title}</h3>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-10 flex-grow">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300 text-xs font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to="/contact" 
                  className="w-full py-4 bg-slate-900 dark:bg-slate-700 hover:bg-blue-600 dark:hover:bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95"
                >
                  Enquire Now <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR PROVEN PROCESS */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Our Proven Process</h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full mb-8" />
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              A structured and transparent workflow designed to deliver excellence at every touchpoint.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 relative">
             {/* Process Line for Desktop */}
             <div className="hidden lg:block absolute top-[4.5rem] left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -z-0" />

             {workflowSteps.map((step, idx) => (
               <div key={idx} className="relative z-10 flex flex-col group">
                 <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-3xl border-2 border-blue-600 flex items-center justify-center text-3xl font-black text-blue-600 mb-8 shadow-xl shadow-blue-500/10 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {step.number}
                 </div>
                 <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{step.title}</h4>
                 <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                   {step.desc}
                 </p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FINAL CALL TO ACTION */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-900/40">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
           <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Ready to Transform Your Business?</h2>
              <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-12">
                Join hundreds of successful companies that have accelerated their growth with our expert IT solutions and training.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link 
                  to="/contact" 
                  className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold hover:bg-blue-50 hover:scale-105 transition-all flex items-center gap-3 shadow-xl"
                >
                  Book a Consultation <MessageSquare size={20} />
                </Link>
                <Link 
                  to="/contact" 
                  className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center gap-3"
                >
                  Contact Us <Zap size={20} />
                </Link>
              </div>
           </div>
           
           {/* Decorative floating elements */}
           <div className="absolute top-10 left-10 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse" />
           <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
      </section>
    </div>
  );
};

export default Services;
