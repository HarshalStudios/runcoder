import { ShieldCheck, Mail, Trash2, ShieldAlert, Lock } from 'lucide-react';

export default function DeletionSection() {
  const categories = [
    {
      title: 'Local Workspace Data (On-Device)',
      desc: 'All source code files and custom code templates you create are stored exclusively on your device\'s local sandboxed directory. You can instantly delete all local data by opening the RunCoder App ➔ Settings ➔ Clear Workspace, or by simply uninstalling the application from your Android device.'
    },
    {
      title: 'Integrated Code Execution',
      desc: 'When you execute code inside the application, files are processed to compile and return output. There is no source code permanently retained or stored on server-side clusters beyond the scope of compiling/executing your program, meaning no server-side data purging is required.'
    },
    {
      title: 'In-App Subscriptions & Preferences',
      desc: 'Your Pro membership state is securely bound to your Google Play services account. If you wish to purge support contact history, email logs, or billing assistance tickets stored in our customer records, you can submit a manual deletion request anytime.'
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-10 select-none px-4">
        <div className="inline-flex items-center space-x-1.5 bg-rose-500/10 text-rose-400 border border-rose-500/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-tight uppercase font-mono">
          <Trash2 className="w-3.5 h-3.5" />
          <span>Google Play Compliance Ledger</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
          Data Deletion Instructions
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
          We respect your digital footprint. Learn how to purge, clear, or request permanent deletion of your local workspaces and support records.
        </p>
      </section>

      {/* Main Grid split */}
      <section className="max-w-4xl mx-auto px-4 select-none grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        <div className="md:col-span-4 space-y-4 text-left">
          <div className="w-10 h-10 bg-rose-950/40 rounded-xl border border-rose-900/30 flex items-center justify-center">
            <Lock className="w-5 h-5 text-rose-400" />
          </div>
          <h2 className="text-xl font-extrabold text-white tracking-tight font-display">
            Your Data Controls
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            RunCoder operates on a strict minimal-data philosophy. We do not harvest coordinates, contacts, or background metadata.
          </p>
        </div>

        <div className="md:col-span-8 space-y-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-[#131520] border border-slate-900/40 rounded-2xl p-5 text-left space-y-1.5">
              <h4 className="text-xs sm:text-sm font-extrabold text-white flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{cat.title}</span>
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>

      </section>

      {/* Request Process */}
      <section className="max-w-3xl mx-auto px-4 select-none text-left space-y-4 bg-[#131520]/40 border border-slate-900 rounded-3xl p-6 sm:p-8">
        <h3 className="text-sm font-extrabold text-rose-400 uppercase tracking-wider font-mono flex items-center space-x-1.5">
          <ShieldAlert className="w-4.5 h-4.5" />
          <span>Request Ticket Deletion</span>
        </h3>
        <p className="text-xs text-slate-400 leading-relaxed">
          If you have previously emailed our support desk or initiated billing tickets and would like all associated records, emails, names, and transaction codes permanently purged from our secure helpdesk, please send an explicit deletion email.
        </p>
        <p className="text-xs text-slate-400 leading-relaxed">
          Please write from the **same email address** you used for prior communications, with the subject line `[Data Deletion Request]`.
        </p>
        <div className="pt-2">
          <a 
            href="mailto:runcodersupport@gmail.com"
            className="inline-flex items-center space-x-1.5 bg-rose-500/10 text-rose-400 border border-rose-500/20 px-4 py-2 rounded-xl text-xs font-bold transition-all hover:bg-rose-500/20 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Email Deletion Desk: runcodersupport@gmail.com</span>
          </a>
        </div>
      </section>

    </div>
  );
}
