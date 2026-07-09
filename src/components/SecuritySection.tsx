import { ShieldCheck, ShieldAlert, Mail, Lock, Terminal } from 'lucide-react';

export default function SecuritySection() {
  const principles = [
    {
      title: 'Prompt Notification',
      desc: 'Notify us immediately upon detecting a potential exploit or vulnerability. Do not disclose the bug publicly until we have patched the issue and given explicit consent.'
    },
    {
      title: 'Minimize Disruption',
      desc: 'Do not access, modify, or delete data belonging to other users. Avoid testing methods that trigger heavy latency or resource starvation (e.g., Denial of Service loops).'
    },
    {
      title: 'Zero Exploitation',
      desc: 'Only verify the existence of a vulnerability. Do not utilize the loophole to gain deep persistence or execute unauthorized commands or configurations.'
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header and intro */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-10 select-none px-4">
        <div className="inline-flex items-center space-x-1.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-tight uppercase font-mono">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>VULNERABILITY REPORTING PORTAL</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
          Responsible Disclosure
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
          We are committed to maintaining the highest standard of security for our student developers. If you find a security vulnerability, we appreciate your help in disclosing it to us in a responsible manner.
        </p>
      </section>

      {/* Direct Contact instructions */}
      <section className="max-w-4xl mx-auto px-4 select-none">
        <div className="bg-[#131520] border border-slate-900 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <h2 className="text-lg font-bold text-white tracking-tight flex items-center space-x-2">
              <Lock className="w-5 h-5 text-indigo-400" />
              <span>How to Contact Us</span>
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xl">
              Please email your discovery directly to our security response address. We encrypt incoming communications when requested and will triage all verified submissions within 24 hours.
            </p>
          </div>
          <a 
            href="mailto:runcodersupport@gmail.com"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs py-3 px-6 rounded-xl flex items-center space-x-2 shrink-0 shadow-lg shadow-indigo-950/20 active:scale-95 transition-all cursor-pointer border border-indigo-400/20"
          >
            <Mail className="w-4 h-4" />
            <span>runcodersupport@gmail.com</span>
          </a>
        </div>
      </section>

      {/* Rules of Engagement */}
      <section className="max-w-4xl mx-auto px-4 select-none grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        <div className="md:col-span-4 space-y-4 text-left">
          <div className="w-10 h-10 bg-indigo-950/40 rounded-xl border border-indigo-900/30 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-indigo-400" />
          </div>
          <h2 className="text-xl font-extrabold text-white tracking-tight font-display">
            Guidelines & Rules
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            By complying with our rules of engagement, we promise to handle reports swiftly and refrain from initiating legal action against your investigations.
          </p>
        </div>

        <div className="md:col-span-8 space-y-4">
          {principles.map((pr, idx) => (
            <div key={idx} className="bg-[#131520] border border-slate-900/40 rounded-2xl p-5 text-left space-y-1.5">
              <h4 className="text-xs sm:text-sm font-extrabold text-white flex items-center space-x-2">
                <span className="text-indigo-400 font-mono text-xs">0{idx + 1}.</span>
                <span>{pr.title}</span>
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">{pr.desc}</p>
            </div>
          ))}
        </div>

      </section>

      {/* Safe Harbor declaration */}
      <section className="max-w-3xl mx-auto px-4 select-none text-left space-y-4 bg-[#131520]/40 border border-slate-900 rounded-3xl p-6 sm:p-8">
        <h3 className="text-sm font-extrabold text-indigo-300 uppercase tracking-wider font-mono flex items-center space-x-1.5">
          <Terminal className="w-4 h-4" />
          <span>Safe Harbor Policy</span>
        </h3>
        <p className="text-xs text-slate-400 leading-relaxed">
          If you conduct your security research in good faith and in full compliance with these policies, we consider your research to be authorized and helpful. We will not pursue civil lawsuits, file criminal complaints, or report you to law enforcement agencies for research conducted within our established bounds.
        </p>
        <p className="text-xs text-slate-400 leading-relaxed">
          We want to thank you for keeping RunCoder safe for thousands of student coders worldwide. Ethical reports will receive official credits inside our developer ledger and custom certificates of recognition.
        </p>
      </section>

    </div>
  );
}
