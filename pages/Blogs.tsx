
import React from 'react';
import { Calendar, User } from 'lucide-react';
import { BLOGS } from '../constants';

const Blogs: React.FC = () => {
  return (
    <div className="pt-20 pb-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Tech & Career Insights</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">Deep dives into technology, career growth, and the latest industry trends.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOGS.map((blog) => (
            <article key={blog.id} className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group">
              <div className="h-64 overflow-hidden relative">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6 py-1.5 px-4 bg-white/95 dark:bg-slate-900/95 rounded-full text-[10px] font-black tracking-widest uppercase text-blue-600 shadow-lg backdrop-blur-sm">
                  {blog.category}
                </div>
              </div>
              <div className="p-10 flex-grow flex flex-col">
                <h2 className="text-2xl font-bold mb-4 leading-tight group-hover:text-blue-600 transition-colors cursor-pointer">
                  {blog.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="mt-auto pt-8 border-t border-slate-50 dark:border-slate-700 flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-slate-400">
                  <div className="flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                    <User size={14} />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{blog.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Subscribe Section */}
        <div className="mt-24 bg-slate-900 rounded-[3rem] p-12 text-center text-white shadow-2xl shadow-slate-900/40">
          <h3 className="text-3xl font-bold mb-4">Subscribe to our newsletter</h3>
          <p className="text-slate-400 mb-10 max-w-md mx-auto text-lg">Get the latest articles, course updates, and career tips directly in your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow bg-white/10 border border-white/20 rounded-2xl px-8 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder:text-slate-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-10 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-blue-600/20 active:scale-95">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
