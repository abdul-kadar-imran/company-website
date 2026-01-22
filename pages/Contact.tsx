
import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, ChevronDown, ChevronUp, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do you provide job placement assistance?',
      a: 'Yes! We have a dedicated placement cell that helps students with resume building, mock interviews, and connecting them with our 50+ hiring partners.'
    },
    {
      q: 'Can I attend demo classes before joining?',
      a: 'Absolutely. We offer free demo sessions for all our courses every weekend. You can contact us to schedule one.'
    },
    {
      q: 'What is the refund policy?',
      a: 'We offer a full refund if requested within the first 3 days of course commencement if you are not satisfied.'
    },
    {
      q: 'Do you offer custom IT solutions for businesses?',
      a: 'Yes, we provide end-to-end IT services including web development, mobile apps, and digital marketing strategies for startups and established enterprises.'
    }
  ];

  return (
    <div className="pt-20 pb-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Get in Touch</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">Have a question or looking for a custom solution? Reach out to our team.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-24">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-6">
            <div className="p-8 bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-800 shadow-lg shadow-blue-500/5 group hover:scale-105 transition-all text-slate-900 dark:text-white">
              <Phone className="text-blue-600 dark:text-blue-400 mb-4 group-hover:rotate-12 transition-transform" />
              <h3 className="font-bold mb-2">Call Us</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium">+91 98765 43210</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">Mon - Sat, 10am - 7pm</p>
            </div>
            <div className="p-8 bg-green-50 dark:bg-green-900/10 rounded-3xl border border-green-100 dark:border-green-800 shadow-lg shadow-green-500/5 group hover:scale-105 transition-all text-slate-900 dark:text-white">
              <MessageCircle className="text-green-600 dark:text-green-400 mb-4 group-hover:rotate-12 transition-transform" />
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium">+91 98765 43211</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">Instant support available</p>
            </div>
            <div className="p-8 bg-purple-50 dark:bg-purple-900/10 rounded-3xl border border-purple-100 dark:border-purple-800 shadow-lg shadow-purple-500/5 group hover:scale-105 transition-all text-slate-900 dark:text-white">
              <Mail className="text-purple-600 dark:text-purple-400 mb-4 group-hover:rotate-12 transition-transform" />
              <h3 className="font-bold mb-2">Email Us</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium">info@adityaskillgate.com</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">Response within 24 hours</p>
            </div>
            <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-lg shadow-slate-200/50 dark:shadow-none group hover:scale-105 transition-all text-slate-900 dark:text-white">
              <MapPin className="text-slate-600 dark:text-slate-400 mb-4 group-hover:rotate-12 transition-transform" />
              <h3 className="font-bold mb-2">Our Location</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">123 Tech Avenue, Skill City, New Delhi - 110001</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-slate-200/60 dark:shadow-none border border-slate-100 dark:border-slate-700">
            <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
            <form className="grid sm:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 px-1">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-8 py-5 bg-slate-50 dark:bg-slate-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all border border-slate-200 dark:border-slate-700 shadow-inner text-slate-900 dark:text-white placeholder:text-slate-400" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 px-1">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-8 py-5 bg-slate-50 dark:bg-slate-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all border border-slate-200 dark:border-slate-700 shadow-inner text-slate-900 dark:text-white placeholder:text-slate-400" />
              </div>
              <div className="space-y-3 sm:col-span-2">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 px-1">Subject</label>
                <input type="text" placeholder="Course Inquiry / Business Solution" className="w-full px-8 py-5 bg-slate-50 dark:bg-slate-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all border border-slate-200 dark:border-slate-700 shadow-inner text-slate-900 dark:text-white placeholder:text-slate-400" />
              </div>
              <div className="space-y-3 sm:col-span-2">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 px-1">Message</label>
                <textarea rows={5} placeholder="Tell us more about your requirements..." className="w-full px-8 py-5 bg-slate-50 dark:bg-slate-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all border border-slate-200 dark:border-slate-700 shadow-inner resize-none text-slate-900 dark:text-white placeholder:text-slate-400" />
              </div>
              <button className="sm:col-span-2 bg-gradient-to-r from-blue-600 to-green-600 text-white font-black uppercase tracking-widest py-5 rounded-2xl shadow-xl shadow-blue-500/30 hover:shadow-blue-600/50 hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-3xl border border-slate-100 dark:border-slate-700 shadow-lg shadow-slate-100 dark:shadow-none overflow-hidden hover:border-blue-200 dark:hover:border-slate-600 transition-all">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-10 py-8 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <span className="text-lg font-bold">{faq.q}</span>
                  <div className={`p-2 rounded-full transition-all ${openFaq === idx ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 dark:bg-slate-700 text-slate-500'}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                {openFaq === idx && (
                  <div className="px-10 pb-10 text-slate-600 dark:text-slate-400 leading-relaxed animate-in slide-in-from-top-4 duration-500 text-lg">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
