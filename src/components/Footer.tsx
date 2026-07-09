import { ArrowUpRight } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  onPageChange: (page: Page) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const handlePageClick = (page: Page) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090a0f] border-t border-slate-900/60 pt-16 pb-12 select-none" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-slate-900/40">
          
          {/* Logo and Intro */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div 
              onClick={() => handlePageClick('home')}
              className="flex items-center space-x-2 cursor-pointer group"
            >
              <img 
                src="/logo.png" 
                alt="RunCoder" 
                className="w-8 h-8 rounded-lg border border-blue-500/10 shadow-md group-hover:scale-105 transition-all select-none"
                referrerPolicy="no-referrer"
              />
              <span className="text-sm font-extrabold text-white font-display">RunCoder</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed max-w-xs">
              A modern Android code editor and mobile IDE designed from the ground up for students, beginners, and mobile developers. Learn and write code directly on the go.
            </p>
            <p className="text-[10px] text-indigo-400/80 font-semibold font-mono uppercase tracking-wider">
              Official website of RunCoder.
            </p>
          </div>

          {/* Column 1: Resources */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Resources</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handlePageClick('support')} className="text-slate-500 hover:text-white transition-colors cursor-pointer text-left">
                  Help Center & FAQs
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('contact')} className="text-slate-500 hover:text-white transition-colors cursor-pointer text-left">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('download')} className="text-slate-500 hover:text-white transition-colors cursor-pointer text-left">
                  Download
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('pro')} className="text-slate-500 hover:text-white transition-colors cursor-pointer flex items-center space-x-1 text-left">
                  <span>RunCoder Pro</span>
                  <span className="bg-amber-400/10 text-amber-300 text-[8px] font-bold px-1.5 py-0.2 rounded font-mono">PREMIUM</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Developers */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Developers</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handlePageClick('verifier')} className="text-slate-500 hover:text-white transition-colors cursor-pointer text-left">
                  Publisher Verification
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('security')} className="text-slate-500 hover:text-white transition-colors cursor-pointer text-left">
                  Security
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('security')} className="text-slate-500 hover:text-white transition-colors cursor-pointer text-left">
                  Responsible Disclosure
                </button>
              </li>
              <li>
                <a 
                  href="/llms.txt" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-slate-500 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>AI Resources</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="space-y-3 col-span-2 md:col-span-1">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Legal</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handlePageClick('privacy')} className="text-slate-500 hover:text-white transition-colors cursor-pointer text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('terms')} className="text-slate-500 hover:text-white transition-colors cursor-pointer text-left">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('refund')} className="text-slate-500 hover:text-white transition-colors cursor-pointer text-left">
                  Refund Policy
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('deletion')} className="text-slate-500 hover:text-white transition-colors cursor-pointer text-left">
                  Data Deletion
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 border-t border-slate-900/40 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 text-[11px] text-slate-600 font-sans">
          <div className="space-y-1 text-left">
            <span>&copy; {new Date().getFullYear()} RunCoder. All rights reserved.</span>
            <p className="text-[10px] text-slate-700">
              RunCoder is the official Android coding application developed by Harshal Studios.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <button onClick={() => handlePageClick('privacy')} className="hover:text-white transition-colors cursor-pointer">Privacy</button>
            <button onClick={() => handlePageClick('terms')} className="hover:text-white transition-colors cursor-pointer">Terms</button>
            <a href="mailto:runcodersupport@gmail.com" className="hover:text-white transition-colors">runcodersupport@gmail.com</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
