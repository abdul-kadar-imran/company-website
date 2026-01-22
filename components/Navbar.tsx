
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, ArrowRight, Facebook, Instagram, Linkedin, Send, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Courses', path: '/courses' },
    { label: 'Jobs', path: '/jobs' },
    { label: 'Blogs', path: '/blogs' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0 z-[70]">
              <div>
                <img
                  src="/public/logo.png"
                  alt="Aditya Skill Gate Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-400 dark:to-green-400">
                  Aditya Skill Gate
                </span>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold leading-none">
                  IT Solutions
                </p>
              </div>
            </Link>


            {/* Desktop Navigation - CENTERED */}
            <div className="hidden lg:flex flex-grow justify-center items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-bold transition-all hover:text-blue-600 dark:hover:text-blue-400 relative py-2 group ${
                    isActive(item.path) 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-300 ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
            </div>

            {/* Right Side Buttons */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Theme Toggle - Desktop & Mobile */}
              <button
                onClick={toggleTheme}
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-yellow-400 border border-slate-200 dark:border-slate-700 hover:scale-110 active:scale-95 transition-all shadow-sm"
                aria-label="Toggle Theme"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <div className="hidden md:flex flex-shrink-0">
                <Link 
                  to="/contact" 
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                >
                  Join Us <ArrowRight size={16} />
                </Link>
              </div>
              
              {/* Mobile Hamburger Menu - Top Right */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden p-2.5 rounded-xl transition-all z-[70] ${
                  isOpen 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                  : 'text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" onClick={() => setIsOpen(false)} />
        
        <div 
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-500 ease-out flex flex-col ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="h-20" /> {/* Spacer for Nav */}

          <div className="flex-grow px-6 py-10 space-y-2 overflow-y-auto">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-6 px-4">Menu</p>
            {navItems.map((item, idx) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between group py-4 px-5 rounded-2xl transition-all duration-300 ${
                  isActive(item.path) 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                <span className="text-xl font-bold tracking-tight">{item.label}</span>
                <ArrowRight size={20} className={`transition-transform duration-300 ${isActive(item.path) ? 'translate-x-0' : '-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} />
              </Link>
            ))}
          </div>

          <div className="p-8 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800">
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-2xl font-bold shadow-xl shadow-blue-600/20 active:scale-95 transition-all mb-8"
            >
              Start Your Journey <Send size={18} />
            </Link>

            <div className="flex justify-center items-center gap-8 text-slate-400">
              <a href="#" className="hover:text-blue-600 transition-colors"><Facebook size={22} /></a>
              <a href="#" className="hover:text-pink-500 transition-colors"><Instagram size={22} /></a>
              <a href="#" className="hover:text-blue-700 transition-colors"><Linkedin size={22} /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
