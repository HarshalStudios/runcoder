import { ShieldCheck, CheckCircle2, Mail, Download, Award, FileText } from 'lucide-react';

export default function VerifierSection() {
  const metaItems = [
    { label: 'Official Product Name', value: 'RunCoder', badge: 'Verified Android App' },
    { label: 'Developer & Publisher', value: 'Harshal Studios', desc: 'Official Android Developer Account' },
    { label: 'Package Identifier', value: 'com.harshalstudios.runcoder', code: true },
    { label: 'Official Domain', value: 'runcoder.app', desc: 'Canonical Web Endpoint' },
    { label: 'Official Support Email', value: 'runcodersupport@gmail.com', copyable: true },
    { label: 'AdMob Publisher Account ID', value: 'pub-6043930204860539', code: true },
    { label: 'Distribution Channel', value: 'Google Play Store (Verified Stable)', desc: 'Signed with official Play App Signing keys' }
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Page Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-10 select-none px-4">
        <div className="inline-flex items-center space-x-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-tight uppercase font-mono">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>CANONICAL ISSUER CERTIFICATE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
          Publisher Verification
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
          This canonical ledger serves as proof verifying the authentic publisher relationships, legal trademarks, and app distribution channels for <strong>RunCoder</strong>.
        </p>
      </section>

      {/* Main Certificate Content */}
      <section className="max-w-4xl mx-auto px-4 select-none">
        <div className="relative overflow-hidden bg-gradient-to-b from-[#131520] to-[#0e1017] border border-emerald-500/20 rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl">
          
          {/* Subtle Ambient Decorative Ring */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -z-10"></div>
          
          {/* Verified Header Badge Row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-800/80 pb-6 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20 shadow-inner">
                <Award className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h2 className="text-base font-extrabold text-white font-display">Authenticity Ledger</h2>
                <p className="text-[10px] font-mono text-slate-500">Domain Authority Verified &bull; Active SSL &bull; DNS Protected</p>
              </div>
            </div>
            <div className="inline-flex items-center space-x-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3.5 py-1.5 rounded-xl text-xs font-bold font-mono">
              <CheckCircle2 className="w-4 h-4" />
              <span>OFFICIAL PUBLISHER</span>
            </div>
          </div>
  
          {/* Verification Table/Rows */}
          <div className="space-y-4 pt-2">
            {metaItems.map((item, idx) => (
              <div 
                key={idx} 
                className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 py-3.5 border-b border-slate-800/30 items-center hover:bg-slate-900/10 rounded-lg px-2 transition-colors"
              >
                <div className="md:col-span-4 text-xs font-bold text-slate-400 font-mono tracking-tight uppercase">
                  {item.label}
                </div>
                <div className="md:col-span-8 flex flex-wrap items-center gap-2">
                  {item.code ? (
                    <code className="bg-slate-950 border border-slate-800 text-indigo-400 font-mono text-xs px-2.5 py-1 rounded-md select-text">
                      {item.value}
                    </code>
                  ) : (
                    <span className="text-sm font-extrabold text-white select-text">
                      {item.value}
                    </span>
                  )}
                  
                  {item.badge && (
                    <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[9px] font-bold px-2 py-0.5 rounded-full font-mono uppercase">
                      {item.badge}
                    </span>
                  )}

                  {item.desc && (
                    <span className="text-[10px] text-slate-500 block w-full md:w-auto font-sans mt-0.5 md:mt-0">
                      ({item.desc})
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Legal Claims Column */}
          <div className="bg-[#090b11] rounded-2xl p-5 border border-slate-900 space-y-3 text-left">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono flex items-center space-x-1.5">
              <FileText className="w-4 h-4 text-indigo-400" />
              <span>Trademark & Intellectual Property Notice</span>
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              RunCoder and its associated visual assets, custom logos, coding editor modules, and workspace specifications are the exclusive intellectual property of <strong>Harshal Studios</strong>.
            </p>
            <p className="text-[10px] text-slate-600 leading-relaxed">
              Google Play, the Google Play logo, Android, and Google Play Billing are registered trademarks of Google LLC. Any secondary product names, compiler libraries, and logos listed on this portal are the trademarks of their respective software projects (including python.org, oracle.com, and ISO standards committees).
            </p>
          </div>

          {/* Actions Block */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 border-t border-slate-900">
            <button
              onClick={() => {
                alert("Navigating to RunCoder on Google Play Store. Search 'RunCoder' in the store app of your Android device to install directly.");
              }}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs py-2.5 px-6 rounded-xl flex items-center space-x-1.5 transition-all active:scale-95 cursor-pointer shadow-lg shadow-indigo-950/40 border border-indigo-400/20"
            >
              <Download className="w-4 h-4" />
              <span>Get App on Play Store</span>
            </button>
            
            <a 
              href="mailto:runcodersupport@gmail.com"
              className="bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 text-white font-bold text-xs py-2.5 px-6 rounded-xl flex items-center space-x-1.5 transition-all active:scale-95 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-slate-400" />
              <span>Email Verified Publisher</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
