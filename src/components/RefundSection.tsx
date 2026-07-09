import { Mail, ShieldAlert, CreditCard, Clock, RotateCcw, ExternalLink } from 'lucide-react';

export default function RefundSection() {
  const points = [
    {
      title: 'Google Play Billing Processing',
      desc: 'All RunCoder Pro passes, including Monthly, Annual, and Lifetime memberships, are securely processed and transacted via Google Play Billing. Payment credentials and credit card transactions are managed entirely by Google.'
    },
    {
      title: 'Google Play Terms & Policies',
      desc: 'Refund eligibility, cancellations, renewals, and payment management follow the official Google Play refund policies. Refund options and time windows vary depending on your country, local regulations, and the specific circumstances of the transaction.'
    },
    {
      title: 'Managing Active Subscriptions',
      desc: 'Active subscriptions can be paused, canceled, or updated at any time directly through the Google Play Store application or web portal. Cancellations prevent subsequent automatic renewals.'
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Title */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-10 select-none px-4">
        <div className="inline-flex items-center space-x-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-tight uppercase font-mono">
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Billing & Purchase Security</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
          Refund Policy
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
          Learn how Google Play Billing handles purchases, cancellations, and refund eligibility for your RunCoder account.
        </p>
      </section>

      {/* Main Grid Policy */}
      <section className="max-w-4xl mx-auto px-4 select-none grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        <div className="md:col-span-4 space-y-4 text-left">
          <div className="w-10 h-10 bg-blue-950/40 rounded-xl border border-blue-900/30 flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-blue-400" />
          </div>
          <h2 className="text-xl font-extrabold text-white tracking-tight font-display">
            Google Play Guidelines
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            All memberships and subscriptions are securely processed by Google. Learn how to view official guidelines or manage transactions.
          </p>
        </div>

        <div className="md:col-span-8 space-y-4">
          {points.map((pt, idx) => (
            <div key={idx} className="bg-[#131520] border border-slate-900/40 rounded-2xl p-5 text-left space-y-1.5">
              <h4 className="text-xs sm:text-sm font-extrabold text-white flex items-center space-x-2">
                <Clock className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{pt.title}</span>
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">{pt.desc}</p>
            </div>
          ))}
        </div>

      </section>

      {/* Manual Assist & Official Help Links */}
      <section className="max-w-3xl mx-auto px-4 select-none text-left space-y-5 bg-[#131520] border border-slate-900 rounded-3xl p-6 sm:p-8">
        <h3 className="text-sm font-extrabold text-white uppercase tracking-wider font-mono flex items-center space-x-1.5">
          <ShieldAlert className="w-4.5 h-4.5 text-blue-400" />
          <span>Need Transaction Support?</span>
        </h3>
        <p className="text-xs text-slate-400 leading-relaxed">
          For transactions processed through Google Play, you can request refunds, check your purchase history, and manage subscription renewals directly in your Google account.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a 
            href="https://support.google.com/googleplay/answer/2479637"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center space-x-1.5 text-xs text-white bg-indigo-600 hover:bg-indigo-500 font-bold py-2.5 px-4 rounded-xl border border-indigo-400/20 transition-all text-center"
          >
            <span>Google Play Refund Help</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a 
            href="https://play.google.com/store/account/orderhistory"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center space-x-1.5 text-xs text-slate-300 bg-slate-800 hover:bg-slate-700 font-bold py-2.5 px-4 rounded-xl border border-slate-700/50 transition-all text-center"
          >
            <span>Google Play Purchase History</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-800/60 pt-4">
          For account-specific questions, or if you need assistance identifying your order inside the app, please contact support:
        </p>
        <div>
          <a 
            href="mailto:runcodersupport@gmail.com"
            className="inline-flex items-center space-x-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-bold transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>runcodersupport@gmail.com</span>
          </a>
        </div>
      </section>

    </div>
  );
}
