import { useState } from 'react';
import { Menu, X, Download, Sparkles } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  activePage: Page;
  onPageChange: (page: Page) => void;
}

export default function Navbar({ activePage, onPageChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { id: Page; label: string; highlight?: boolean }[] = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'pro', label: 'RunCoder Pro', highlight: true },
    { id: 'download', label: 'Download' },
    { id: 'support', label: 'Support' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: Page) => {
    onPageChange(pageId);
    setIsOpen(false);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-900/60 bg-[#0d0e15]/80 backdrop-blur-md select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2.5 cursor-pointer group shrink-0"
            id="nav-logo"
          >
            <img 
              src="/logo.png" 
              alt="RunCoder" 
              className="w-9 h-9 rounded-lg shadow-lg shadow-blue-950/20 group-hover:scale-105 transition-all select-none"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-tight text-white font-display">RunCoder</span>
              <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest leading-none">Android IDE</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" id="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-tight transition-all cursor-pointer flex items-center space-x-1 ${
                  activePage === item.id
                    ? 'bg-slate-800/80 text-white font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900/40'
                }`}
              >
                {item.highlight && <Sparkles className="w-3.5 h-3.5 text-amber-300" />}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Action button */}
          <div className="hidden md:block shrink-0">
            <button
              onClick={() => handleNavClick('download')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs py-2 px-4 rounded-full shadow-lg shadow-blue-950/40 border border-blue-400/20 hover:shadow-blue-900/20 active:scale-95 transition-all flex items-center space-x-1.5 cursor-pointer"
              id="nav-download-btn"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download App</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900/60 transition-all focus:outline-none focus:ring-0"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-900 bg-[#0d0e15] select-none shadow-2xl" id="mobile-drawer">
          <div className="px-3 pt-2 pb-4 space-y-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold tracking-tight transition-all flex items-center space-x-2 ${
                  activePage === item.id
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900/40'
                }`}
              >
                {item.highlight && <Sparkles className="w-4 h-4 text-amber-400" />}
                <span>{item.label}</span>
              </button>
            ))}
            
            <div className="pt-2 px-4">
              <button
                onClick={() => handleNavClick('download')}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold py-3 px-4 rounded-xl shadow-lg flex items-center justify-center space-x-2 active:scale-95 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download on Google Play</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
