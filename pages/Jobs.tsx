
import React from 'react';
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import { JOBS } from '../constants';

const Jobs: React.FC = () => {
  const itJobs = JOBS.filter(j => j.type === 'IT');
  const nonItJobs = JOBS.filter(j => j.type === 'Non-IT');

  return (
    <div className="pt-20 pb-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Career Opportunities</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Join a dynamic team of developers, designers, and educators. We are constantly looking for passionate individuals to join our journey.
          </p>
        </div>

        {/* IT Jobs */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">IT Jobs</h2>
            <div className="h-[2px] flex-grow bg-blue-600/20 rounded-full" />
          </div>
          <div className="grid gap-6">
            {itJobs.map(job => (
              <div key={job.id} className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white p-8 rounded-3xl shadow-lg shadow-slate-100 dark:shadow-none border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-xl leading-relaxed">{job.description}</p>
                  <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <span className="flex items-center gap-2 bg-slate-50 dark:bg-slate-700 px-3 py-1.5 rounded-lg"><MapPin size={14} className="text-blue-600" /> Remote / Hybrid</span>
                    <span className="flex items-center gap-2 bg-slate-50 dark:bg-slate-700 px-3 py-1.5 rounded-lg"><Calendar size={14} className="text-blue-600" /> Full-time</span>
                  </div>
                </div>
                <button className="w-full md:w-auto px-8 py-4 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-bold rounded-2xl flex items-center justify-center gap-2 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-xl group-hover:shadow-blue-600/20 transition-all">
                  Apply Now <ArrowUpRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Non-IT Jobs */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Non-IT Jobs</h2>
            <div className="h-[2px] flex-grow bg-green-600/20 rounded-full" />
          </div>
          <div className="grid gap-6">
            {nonItJobs.map(job => (
              <div key={job.id} className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white p-8 rounded-3xl shadow-lg shadow-slate-100 dark:shadow-none border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:border-green-500 hover:shadow-2xl hover:shadow-green-500/10 transition-all">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-xl leading-relaxed">{job.description}</p>
                  <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <span className="flex items-center gap-2 bg-slate-50 dark:bg-slate-700 px-3 py-1.5 rounded-lg"><MapPin size={14} className="text-green-600" /> Delhi Office</span>
                    <span className="flex items-center gap-2 bg-slate-50 dark:bg-slate-700 px-3 py-1.5 rounded-lg"><Calendar size={14} className="text-green-600" /> Full-time</span>
                  </div>
                </div>
                <button className="w-full md:w-auto px-8 py-4 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 font-bold rounded-2xl flex items-center justify-center gap-2 group-hover:bg-green-600 group-hover:text-white group-hover:shadow-xl group-hover:shadow-green-600/20 transition-all">
                  Apply Now <ArrowUpRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Jobs;
