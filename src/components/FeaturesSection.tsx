import { 
  Code2, 
  Cpu, 
  FolderOpen, 
  Settings, 
  Terminal, 
  Sparkles, 
  Lock, 
  CheckCircle2,
  Check,
  Languages
} from 'lucide-react';

export default function FeaturesSection() {
  const coreFeatures = [
    {
      icon: Code2,
      title: 'Material Design 3 Workspace',
      desc: 'Formulated following Google’s official guidelines, utilizing deep dark charcoal palettes and adaptive floating control cards to provide visual comfort for hours of continuous study.',
      bullets: ['High-contrast color-coded tags', 'Clean, responsive sidebar drawer menus', 'Distraction-free focal bounds']
    },
    {
      icon: Cpu,
      title: 'Secure Sandbox Cloud Compilation',
      desc: 'All script actions request high-speed cloud container compilers. This avoids heavy memory processing or heat issues on your Android device, conserving critical battery life during exams.',
      bullets: ['Isolated script execution layers', 'Automatic session timeouts', 'Zero storage retention of source files']
    },
    {
      icon: FolderOpen,
      title: 'Searchable Local File Explorer',
      desc: 'Supports indexing dozens of open C, Java, Python, and Web files. Offers a streamlined explorer hierarchy with prompt file search filters.',
      bullets: ['Active workspace memory tabs', 'Quick search by suffix extension', 'Streamlined file deletions and rename controls']
    },
    {
      icon: Sparkles,
      title: 'Curated Code Templates',
      desc: 'Get straight to programming. Includes ready-to-run solutions for common college courses covering algorithms, data structures, and CSS web sheets.',
      bullets: ['Complete working boilerplate code', 'Filterable by difficulty level', 'Copy snippets in a single tap']
    }
  ];

  const languages = [
    { name: 'C', use: 'CS Fundamentals & Data Structures' },
    { name: 'C++', use: 'OOP Paradigms & Algorithm Classes' },
    { name: 'Java', use: 'OOP, Polymorphism & University Courses' },
    { name: 'Python', use: 'Scripting, Mathematics & Algorithms' },
    { name: 'HTML', use: 'Mobile Web Development Markups' },
    { name: 'CSS', use: 'Selectors, Grids, and Web Layout styling' },
    { name: 'JavaScript', use: 'Client-side scripts & Web Apps' }
  ];

  return (
    <div className="space-y-20 pb-16">
      
      {/* Header section */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-10 select-none">
        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest font-mono">Technical Deep Dive</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
          A Fully Equipped Android Code Workspace.
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
          RunCoder is engineered specifically to match the requirements of computer science students, engineering learners, and mobile developers. Learn more about the components powering our IDE.
        </p>
      </section>

      {/* Core Feature Detailed Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 select-none">
        {coreFeatures.map((feat, i) => {
          const Icon = feat.icon;
          return (
            <div key={i} className="bg-[#131520] border border-slate-900 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-11 h-11 bg-indigo-950/50 rounded-xl border border-indigo-900/30 flex items-center justify-center">
                  <Icon className="w-5.5 h-5.5 text-indigo-400" />
                </div>
                <h3 className="text-lg font-extrabold text-white tracking-tight">{feat.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
              
              <div className="pt-2 border-t border-slate-900/60 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {feat.bullets.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-[10px] sm:text-xs font-semibold text-slate-300 leading-snug">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Language breakdown specs */}
      <section className="bg-[#090a0f] border-t border-b border-slate-900/60 py-16 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center space-x-1 bg-blue-950/40 text-blue-400 border border-blue-900/30 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight">
              <Languages className="w-3.5 h-3.5" />
              <span>Full Standards Compliance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
              Supported 7 Core Languages
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We focus on the essential languages taught in computing curricula. You can start, edit, and run any file in standard syntax without configuring virtual runtimes on your phone.
            </p>
          </div>

          <div className="lg:col-span-7 bg-[#131520] border border-slate-900 rounded-3xl p-6">
            <div className="divide-y divide-slate-800/40">
              {languages.map((lang, idx) => (
                <div key={idx} className="py-2.5 flex justify-between items-center text-xs">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                    <span className="font-extrabold text-white font-mono">{lang.name}</span>
                  </div>
                  <span className="text-slate-400 text-right">{lang.use}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Compilation specs & safety FAQs */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 select-none space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">Code Safety & Cloud Framework</span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-display">Compiler & Workspace Parameters</h2>
        </div>

        <div className="bg-[#131520] rounded-3xl border border-slate-900 p-6 sm:p-8 space-y-6">
          <div className="flex items-start space-x-3.5">
            <Lock className="w-5.5 h-5.5 text-blue-400 shrink-0 mt-1" />
            <div className="space-y-1.5 text-left">
              <h4 className="text-xs sm:text-sm font-extrabold text-white">How secure is my code on RunCoder?</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Extremely secure. When you press the <strong>▶ Run</strong> button in the editor, your code is compiled inside an ephemeral sandbox container in our cloud cluster. The container is completely wiped immediately after returning the execution console output. Your code is never persisted, indexed, shared, or reviewed.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5">
            <Settings className="w-5.5 h-5.5 text-blue-400 shrink-0 mt-1" />
            <div className="space-y-1.5 text-left">
              <h4 className="text-xs sm:text-sm font-extrabold text-white">What preferences can I configure in the editor?</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                You have complete control over the editing experience. Via settings, you can toggle:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 pt-1.5 pl-1.5">
                <div className="flex items-center space-x-1.5">
                  <Check className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Syntax Highlighting</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Check className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Auto-Save Triggers</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Check className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Word Wrapping</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Check className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Line Numbers Gutter</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Check className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Font Size (10sp to 24sp)</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Check className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Custom Fonts (JetBrains Mono)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
