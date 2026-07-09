import { Download, CheckCircle2, ShieldAlert, Cpu, Smartphone, Info } from 'lucide-react';

export default function DownloadSection() {
  const requirements = [
    { label: 'Minimum Android OS', value: 'Android 8.0 (Oreo) or higher' },
    { label: 'Target API Level', value: 'API Level 33+ (Android 13/14)' },
    { label: 'Minimum System Memory', value: '1.5 GB RAM' },
    { label: 'Storage Requirement', value: '50 MB free disk space' },
    { label: 'Connectivity Requirement', value: 'Active Internet Connection (For Cloud Compilation)' }
  ];

  const permissions = [
    {
      title: 'Internet Access (INTERNET)',
      desc: 'Required to connect to the RunCoder Cloud compiler servers and execute scripts. Absolutely no background logging or data harvesting.'
    },
    {
      title: 'Read/Write Storage (Optional)',
      desc: 'Only requested if you decide to import existing C/Java/Python files from your device Downloads folder or export files locally.'
    }
  ];

  return (
    <div className="space-y-20 pb-16">
      
      {/* Header and Download badge */}
      <section className="text-center space-y-6 max-w-3xl mx-auto pt-10 select-none px-4">
        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest font-mono">Official Distribution</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
          Install RunCoder App.
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
          Download the verified stable package directly from the official Google Play Store. Join thousands of student programmers learning on the go.
        </p>

        {/* Custom Premium SVG/CSS Google Play Store Badge */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={() => {
              alert("RunCoder is available on the Google Play Store. Search for 'RunCoder' in the Play Store app on your Android device to install the application.");
            }}
            className="bg-[#090b11] border border-slate-800 hover:border-slate-700 hover:bg-slate-900/60 p-4 rounded-2xl flex items-center space-x-4 max-w-sm w-full select-none cursor-pointer transition-all active:scale-98 text-left shadow-lg"
          >
            {/* Custom Google Play Logo Symbol */}
            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 512 512" className="w-10 h-10">
                <defs>
                  <linearGradient id="p1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#00C6FF" />
                    <stop offset="100%" stop-color="#0072FF" />
                  </linearGradient>
                </defs>
                <path d="M48.01 24.16c-2.3 2.5-3.6 6.3-3.6 11.2v441.3c0 4.9 1.3 8.7 3.6 11.2l4.8 4.8L281 264.4v-16.7L52.81 19.36l-4.8 4.8z" fill="#3bccff" />
                <path d="M358.51 341.96l-77.5-77.5v-16.7l77.5-77.5 5.5 3.1 91.8 52.2c26.2 14.9 26.2 39.4 0 54.3l-91.8 52.2-5.5 3z" fill="#fec107" />
                <path d="M281 264.4L52.81 492.66c8.6 9.1 22.8 10.3 38.6 1.3l267.1-152L281 264.4z" fill="#ff2d55" />
                <path d="M281 247.7L91.41 19.36C75.61 10.36 61.41 11.56 52.81 20.66L281 247.7z" fill="#20e3b2" />
              </svg>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-bold font-mono">GET IT ON</span>
              <span className="text-base font-extrabold text-white font-display tracking-tight leading-none block">Google Play</span>
              <span className="text-[9px] text-slate-400 block mt-1">Verified secure by Play Protect</span>
            </div>
          </button>
        </div>
      </section>

      {/* Hardware / Software specs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 select-none grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
          <div className="w-10 h-10 bg-indigo-950/40 rounded-xl border border-indigo-900/30 flex items-center justify-center mx-auto lg:mx-0">
            <Cpu className="w-5 h-5 text-indigo-400" />
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-display">
            System Compatibility
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            RunCoder is extremely lightweight. Since code is compiled in the cloud, you do not need a high-end chipset or extensive memory pools to run massive Java loops or Python modules.
          </p>
        </div>

        <div className="lg:col-span-7 bg-[#131520] border border-slate-900 rounded-3xl p-6">
          <div className="divide-y divide-slate-800/40">
            {requirements.map((req, idx) => (
              <div key={idx} className="py-3.5 flex justify-between items-center text-xs">
                <span className="text-slate-500 font-medium">{req.label}</span>
                <span className="font-bold text-white text-right pl-4">{req.value}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Permissions Transparency section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 select-none space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center space-x-1.5 bg-rose-500/10 text-rose-400 border border-rose-500/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-tight">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>PRIVACY & TRANSPARENCY</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-display">Required App Permissions</h2>
          <p className="text-slate-400 text-xs max-w-md mx-auto leading-relaxed">
            We adhere strictly to privacy guidelines. We only ask for permissions that are functionally vital to editor mechanics.
          </p>
        </div>

        <div className="bg-[#131520] border border-slate-900 rounded-3xl p-6 space-y-5">
          {permissions.map((perm, i) => (
            <div key={i} className="space-y-1.5 text-left">
              <h4 className="text-xs sm:text-sm font-extrabold text-white">{perm.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{perm.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Version Release notes */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 select-none space-y-6">
        <div className="text-center space-y-1.5">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">Changelog Logs</span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-display">Version History</h2>
        </div>

        <div className="bg-[#131520] border border-slate-900 rounded-3xl p-6 sm:p-8 space-y-4 text-left">
          <div className="flex justify-between items-start border-b border-slate-800/60 pb-3">
            <div>
              <h4 className="text-sm font-extrabold text-white">v1.0.0 Stable</h4>
              <span className="text-[10px] text-slate-500">Initial stable public deployment</span>
            </div>
            <span className="bg-emerald-500/10 text-emerald-400 font-mono text-[9px] font-bold px-2 py-0.5 rounded">
              LATEST RELEASE
            </span>
          </div>
          
          <p className="text-xs text-slate-400 leading-relaxed">
            The initial release introduces a fully functioning, distraction-free environment styled completely according to Google’s Material Design 3 spec. Key features include:
          </p>

          <ul className="space-y-2 pl-4 text-xs text-slate-300 pt-1">
            <li className="flex items-start space-x-2">
              <span className="text-indigo-400 font-bold shrink-0">•</span>
              <span><strong>7 Languages Cloud Sandbox:</strong> C, C++, Java, Python, HTML, CSS, JavaScript integration.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-indigo-400 font-bold shrink-0">•</span>
              <span><strong>Structured File Explorer:</strong> Easily save, edit, and organize multiple code projects simultaneously.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-indigo-400 font-bold shrink-0">•</span>
              <span><strong>Quick Boilderplates:</strong> 6+ starter code configurations filterable by complexity and languages.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-indigo-400 font-bold shrink-0">•</span>
              <span><strong>Google Play Subscriptions:</strong> Remove workspace ads and unleash unlimited Runs securely.</span>
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
}
