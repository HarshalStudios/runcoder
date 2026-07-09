import { 
  Check, 
  Download, 
  Sparkles, 
  ShieldCheck, 
  Terminal, 
  Code2, 
  Settings, 
  Folder, 
  HelpCircle, 
  Cpu,
  ChevronRight,
  GraduationCap,
  Type
} from 'lucide-react';
import DeviceMockup from './DeviceMockup';
import { Page } from '../types';

interface HomeSectionProps {
  onPageChange: (page: Page) => void;
}

export default function HomeSection({ onPageChange }: HomeSectionProps) {
  const languages = [
    { name: 'C', desc: 'Write procedural pointers, structs, and algorithms.', extension: '.c', color: 'from-blue-500/10 to-blue-600/10 text-blue-400' },
    { name: 'C++', desc: 'Compile object-oriented templates and STL classes.', extension: '.cpp', color: 'from-indigo-500/10 to-indigo-600/10 text-indigo-400' },
    { name: 'Java', desc: 'Design OOP architectures, classes, and loops.', extension: '.java', color: 'from-orange-500/10 to-orange-600/10 text-orange-400' },
    { name: 'Python', desc: 'Execute modern scripting, data processing, and functions.', extension: '.py', color: 'from-yellow-500/10 to-yellow-600/10 text-yellow-400' },
    { name: 'HTML', desc: 'Build modern responsive document markups.', extension: '.html', color: 'from-red-500/10 to-red-600/10 text-red-400' },
    { name: 'CSS', desc: 'Style web pages with selectors, flexboxes, and grids.', extension: '.css', color: 'from-sky-500/10 to-sky-600/10 text-sky-400' },
    { name: 'JavaScript', desc: 'Render client-side dynamics, scripts, and games.', extension: '.js', color: 'from-amber-500/10 to-amber-600/10 text-amber-400' },
  ];

  const featuresList = [
    {
      icon: Code2,
      title: 'Material Design 3 Editor',
      desc: 'Beautiful coding typography with adaptive font-sizing, custom code fonts, and dark theme variables matching native Android guidelines.',
    },
    {
      icon: Cpu,
      title: 'Secure Cloud Compiler',
      desc: 'All programs execute in high-performance sandboxed cloud servers. Zero local hardware overhead or binary storage on your phone.',
    },
    {
      icon: Folder,
      title: 'Smart Workspace',
      desc: 'Quickly organize C, Java, Python, and Web files. Features searchable explorer paths and easy directory management.',
    },
    {
      icon: Settings,
      title: 'Premium Preferences',
      desc: 'Fine-tune line numbers, auto-save triggers, word wrapping behavior, syntax highlighting, and custom mono typography.',
    },
  ];

  const homeFaqs = [
    {
      q: 'Does RunCoder compile code offline or locally?',
      a: 'No. RunCoder is built with a safe, secure cloud-based code execution model. Programs are sent to isolated sandboxed servers for rapid compilation and execution, returning outputs directly to your on-screen terminal. There is zero local compilation, which keeps the app light, responsive, and battery-friendly.',
    },
    {
      q: 'Which programming languages are supported?',
      a: 'RunCoder supports exactly 7 core programming languages: C, C++, Java, Python, HTML, CSS, and JavaScript. This makes it an ideal companion for high-school, college, and university courses covering CS fundamentals, OOP, and web development.',
    },
    {
      q: 'Is there a free tier available?',
      a: 'Yes. RunCoder provides a generous free tier that includes access to the full editor, workspace file management, templates, and daily cloud compilation allocations. You can upgrade to RunCoder Pro for unlimited runs and an entirely ad-free environment.',
    },
    {
      q: 'How do I upgrade to RunCoder Pro?',
      a: 'Upgrades are managed securely via Google Play Billing directly inside the Android application. Open the app, tap on Settings, and select "Go Pro" to view available options in your local currency. All subscriptions can be managed or canceled directly inside your Google Play account.',
    },
  ];

  return (
    <div className="space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 md:pt-20 select-none" id="home-hero">
        {/* Abstract background ambient glows */}
        <div className="absolute top-1/4 left-1/12 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/12 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -z-10 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Column: Brand Copy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Product Badge */}
              <div className="inline-flex items-center space-x-2 bg-blue-950/40 text-blue-400 border border-blue-900/30 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight">
                <GraduationCap className="w-4 h-4" />
                <span>The Premier Android IDE for Engineering Students</span>
              </div>

              {/* Display Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-display">
                Write Code.<br />
                Run Instantly.<br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Directly on Android.</span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                A modern Android code editor and mobile IDE designed for students, beginners, and developers. Build, test, and execute your code in an environment inspired by Google's Material Design 3 guidelines.
              </p>

              {/* Key Benefits Bullet List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0 pt-2 text-left">
                {[
                  'Supports 7 programming languages',
                  'High-speed sandboxed cloud compiler',
                  'Beautiful Material Design 3 interface',
                  'Structured workspace file explorer',
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-blue-950/50 rounded-full border border-blue-900/40 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <span className="text-xs font-medium text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Call-to-actions */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-3.5 sm:space-y-0 sm:space-x-4 pt-4">
                <button
                  onClick={() => onPageChange('download')}
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm py-3.5 px-8 rounded-full shadow-lg shadow-blue-950/60 border border-blue-400/20 active:scale-95 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Get on Google Play</span>
                </button>
                
                <button
                  onClick={() => onPageChange('features')}
                  className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-bold text-sm py-3.5 px-8 rounded-full transition-all active:scale-95 flex items-center justify-center space-x-1 cursor-pointer"
                >
                  <span>Explore Features</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Developer Trust Badge */}
              <div className="flex items-center justify-center lg:justify-start space-x-6 pt-6 border-t border-slate-900/50 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-mono">Google Play Verified</span>
                </div>
                <div className="w-px h-4 bg-slate-800"></div>
                <div className="flex items-center space-x-1.5">
                  <Terminal className="w-4.5 h-4.5 text-blue-400" />
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-mono">7 Languages</span>
                </div>
              </div>

            </div>

            {/* Hero Right Column: Device Mockup */}
            <div className="lg:col-span-5 flex justify-center py-4 lg:py-0">
              <DeviceMockup />
            </div>

          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 select-none" id="home-why">
        <div className="text-center space-y-3 pb-12">
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest font-mono">Engineered for Learners</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
            A Better Coding Experience on Mobile.
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Many mobile editors are cluttered and hard to navigate. RunCoder provides a clean, responsive layout designed exclusively for studying programming fundamentals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresList.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="bg-[#131520] border border-slate-900/80 hover:border-slate-800/80 p-6 rounded-2xl space-y-4 shadow-md transition-all">
                <div className="w-10 h-10 bg-blue-950/50 rounded-xl border border-blue-900/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-sm font-extrabold text-white leading-snug">{f.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. SUPPORTED LANGUAGES BLOCK */}
      <section className="bg-gradient-to-b from-[#090a0f] to-[#0c0d12] border-y border-slate-900/60 py-20 select-none" id="home-languages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 pb-12">
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest font-mono">Comprehensive Support</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
              Supports 7 Programming Languages
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
              No complex dependencies, GCC, JDK, or Python interpreters to configure. Compile and execute any of these 7 core languages instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {languages.map((lang, i) => (
              <div 
                key={i} 
                className="bg-[#131520] hover:bg-[#181a27] border border-slate-900/80 p-5 rounded-2xl relative overflow-hidden group transition-all"
              >
                <div className={`absolute top-0 right-0 p-3 text-[10px] font-mono font-bold text-slate-700 select-none`}>
                  {lang.extension}
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2.5">
                    <span className="text-lg font-extrabold text-white font-display">{lang.name}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{lang.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <button 
              onClick={() => onPageChange('features')}
              className="text-xs text-indigo-400 font-bold hover:text-indigo-300 flex items-center space-x-1 mx-auto transition-all cursor-pointer"
            >
              <span>Explore more features & capabilities</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. PRO TIERS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 select-none" id="home-pro">
        <div className="bg-[#131520] border border-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-1.5 bg-amber-400/10 text-amber-300 border border-amber-400/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-tight">
                <Sparkles className="w-3.5 h-3.5" />
                <span>UPGRADE TO PRO PASS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                Go Pro.<br />Enjoy a Focused Workspace.
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Remove advertisements entirely, unlock exclusive premium coding fonts, and support the ongoing development of the editor.
              </p>
              
              <div className="space-y-2 pt-2">
                {[
                  '100% Ad-Free Coding Environment',
                  'Access to Premium Code Editing Fonts',
                  'Support Continued Editor Development',
                  'Early Access to New App Enhancements',
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-xs font-semibold text-slate-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onPageChange('pro')}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-xs py-3 px-6 rounded-full transition-all active:scale-95 flex items-center space-x-1.5 cursor-pointer shadow-lg shadow-amber-950/20"
                >
                  <span>Explore Pro Features</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Premium Coding Fonts Catalog */}
            <div className="bg-[#0d0e15] border border-slate-900 rounded-2xl p-6 space-y-4 select-none text-left">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-bold text-amber-400 uppercase tracking-widest font-mono">PREMIUM CODING FONTS</span>
                <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest font-mono bg-blue-500/10 px-2 py-0.5 rounded-md">11 included fonts</span>
              </div>
              <h4 className="text-xs font-extrabold text-white">Code with Premium Typography</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                RunCoder Pro includes carefully selected programming fonts that improve readability, reduce eye strain during long coding sessions, and provide a cleaner workspace.
              </p>
              
              <div className="grid grid-cols-2 gap-2 pt-2">
                {[
                  { name: 'System Default', type: 'Default Font' },
                  { name: 'JetBrains Mono', type: 'RunCoder Pro Font' },
                  { name: 'Fira Code', type: 'RunCoder Pro Font' },
                  { name: 'Cascadia Code', type: 'RunCoder Pro Font' },
                  { name: 'Source Code Pro', type: 'RunCoder Pro Font' },
                  { name: 'IBM Plex Mono', type: 'RunCoder Pro Font' },
                  { name: 'Ubuntu Mono', type: 'RunCoder Pro Font' },
                  { name: 'Inconsolata', type: 'RunCoder Pro Font' },
                  { name: 'Roboto Mono', type: 'RunCoder Pro Font' },
                  { name: 'Anonymous Pro', type: 'RunCoder Pro Font' },
                  { name: 'Space Mono', type: 'RunCoder Pro Font' },
                  { name: 'Victor Mono', type: 'RunCoder Pro Font' }
                ].map((font, i) => (
                  <div key={i} className="p-2.5 rounded-xl border border-slate-900 bg-[#11131e] flex items-center space-x-2 hover:border-slate-800 transition-all">
                    <Type className={`w-4 h-4 shrink-0 ${font.type === 'Default Font' ? 'text-slate-500' : 'text-blue-400'}`} />
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-white truncate">{font.name}</div>
                      <div className="text-[8px] font-medium text-slate-500 uppercase tracking-tight">{font.type}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-2 border-t border-slate-900">
                <p className="text-[10px] text-slate-500 leading-relaxed italic">
                  All premium fonts are integrated directly into the RunCoder editor and can be selected from the editor settings after upgrading to RunCoder Pro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQS SEGMENT */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 select-none" id="home-faq">
        <div className="text-center space-y-3 pb-12">
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest font-mono">Frequently Asked Questions</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
            Factual Answers
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Review precise technical details about compiler behaviors, offline limits, and subscription mechanisms.
          </p>
        </div>

        <div className="space-y-6">
          {homeFaqs.map((faq, i) => (
            <div key={i} className="bg-[#131520] border border-slate-900/80 p-5 rounded-2xl space-y-2">
              <div className="flex items-start space-x-2.5">
                <HelpCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <h3 className="text-sm font-extrabold text-white leading-snug">{faq.q}</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pl-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CALL-TO-ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 select-none" id="home-cta">
        <div className="bg-gradient-to-r from-blue-950 via-indigo-950 to-purple-950 rounded-3xl p-8 md:p-12 text-center space-y-6 border border-indigo-500/10 shadow-2xl shadow-indigo-950/20">
          <img 
            src="/logo.png" 
            alt="RunCoder" 
            className="w-16 h-16 rounded-2xl shadow-xl shadow-blue-950/30 mx-auto select-none"
            referrerPolicy="no-referrer"
          />
          
          <div className="space-y-2.5">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Start Coding on Android Today
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Equip yourself with a highly optimized mobile IDE. Perfect for studying computer science, practicing code interviews, and writing scripts on the go.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 max-w-sm mx-auto">
            <button
              onClick={() => onPageChange('download')}
              className="w-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs py-3.5 px-6 rounded-full transition-all active:scale-95 flex items-center justify-center space-x-1.5 cursor-pointer shadow-xl shadow-slate-950/20"
            >
              <Download className="w-4 h-4 text-slate-950" />
              <span>Install from Play Store</span>
            </button>
            <button
              onClick={() => onPageChange('support')}
              className="w-full bg-slate-900/60 hover:bg-slate-900 border border-slate-800 text-slate-300 font-bold text-xs py-3.5 px-6 rounded-full transition-all active:scale-95 flex items-center justify-center cursor-pointer"
            >
              <span>Get App Help</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
