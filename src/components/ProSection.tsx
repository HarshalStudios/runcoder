import { Check, X, Sparkles, ShieldCheck, Download, RefreshCw } from 'lucide-react';

export default function ProSection() {
  const plans = [
    {
      name: 'Monthly Pass',
      billing: 'Subscription',
      desc: 'Perfect for short-term projects and trying out our premium developer coding fonts.',
      popular: false,
      cta: 'View Pricing in App',
      note: 'Pricing is securely managed by Google Play Billing and converted automatically to your local currency. Cancel anytime.',
      features: [
        'Remove advertisements',
        'Exclusive coding fonts',
        'Early access to updates',
        'Support active development'
      ]
    },
    {
      name: 'Annual Pass',
      billing: 'Subscription',
      desc: 'The choice for active students. Enjoy the best long-term value for consistent learning semesters.',
      popular: true,
      cta: 'View Pricing in App',
      note: 'Pricing is securely managed by Google Play Billing and converted automatically to your local currency. Cancel anytime.',
      features: [
        'Remove advertisements',
        'Exclusive coding fonts',
        'Early access to updates',
        'Priority support channels',
        'Support active development'
      ]
    },
    {
      name: 'Lifetime Pass',
      billing: 'One-Time Purchase',
      desc: 'Pay once, unlock forever. No recurring charges, ever.',
      popular: false,
      cta: 'View Pricing in App',
      note: 'One-time secure Play Store purchase. All future premium updates and enhancements included for life.',
      features: [
        'Remove advertisements',
        'Exclusive coding fonts',
        'Early access to updates',
        'All future Pro enhancements',
        'Lifetime secure license',
        'Support active development'
      ]
    }
  ];

  const comparisonRows = [
    { name: 'Ads', free: 'Supported', pro: 'Ad-Free' },
    { name: 'Code Editing', free: true, pro: true },
    { name: 'Multiple Languages', free: true, pro: true },
    { name: 'Default Templates', free: 'Included', pro: 'Included' },
    { name: 'Premium Fonts', free: false, pro: true },
    { name: 'Early Feature Access', free: false, pro: true },
    { name: 'Future Premium Features', free: false, pro: 'Included' },
    { name: 'Google Play Billing', free: true, pro: true }
  ];

  return (
    <div className="space-y-20 pb-16">
      
      {/* Title */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-10 select-none px-4">
        <div className="inline-flex items-center space-x-1.5 bg-amber-400/10 text-amber-300 border border-amber-400/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-tight uppercase font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>RUNCODER PRO PASS</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
          Go Pro. Enhance Your Workspace.
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
          Elevate your mobile coding experience. Remove advertisements, unlock premium coding fonts, and help fund ongoing development.
        </p>
      </section>

      {/* Localized Price Banner Notice */}
      <section className="max-w-4xl mx-auto px-4 select-none">
        <div className="bg-gradient-to-r from-indigo-950/30 to-blue-950/30 border border-indigo-900/40 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 text-left">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
            <RefreshCw className="w-6 h-6 text-indigo-400" />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-sm font-extrabold text-white">Dynamic Localized Pricing</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pricing is securely managed by Google Play. We do not display fixed USD prices because plans are automatically localized! Google Play Billing detects your country and automatically displays the precise local price, tax rates, and currency inside the Android application.
            </p>
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 select-none">
        {plans.map((p, idx) => (
          <div 
            key={idx}
            className={`bg-[#131520] border rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden transition-all ${
              p.popular 
                ? 'border-indigo-500 shadow-2xl shadow-indigo-950/40 ring-1 ring-indigo-500/20 md:scale-105' 
                : 'border-slate-900'
            }`}
          >
            {p.popular && (
              <div className="absolute top-0 right-0 bg-indigo-600 text-white font-bold text-[9px] px-3.5 py-1.5 rounded-bl-xl tracking-wider uppercase">
                Best Value
              </div>
            )}

            <div className="space-y-6 text-left">
              <div>
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest font-mono">
                  {p.billing}
                </span>
                <h3 className="text-lg font-bold text-white leading-snug mt-1">{p.name}</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed h-12">{p.desc}</p>
              </div>

              {/* Redesigned Pricing Section (No USD hardcoded numbers) */}
              <div className="py-4 border-y border-slate-900/60 space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">Pricing Mode</span>
                <div className="text-lg font-extrabold text-white">Google Play Billing</div>
                <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                  {p.note}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">Benefits Included</span>
                {p.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-300">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => {
                  alert(`RunCoder Pro options (Monthly, Annual, and Lifetime plans) are available directly on the Google Play Store. To view your local pricing and purchase your Pro Pass, install RunCoder on your Android device, open it, and navigate to Settings ➔ "Go Pro".`);
                }}
                className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer text-center flex items-center justify-center space-x-2 ${
                  p.popular
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-950/20 border border-indigo-400/20'
                    : 'bg-[#1d2033] hover:bg-slate-800 text-slate-300 border border-slate-800/80'
                }`}
              >
                <Download className="w-3.5 h-3.5 shrink-0" />
                <span>{p.cta}</span>
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Safe Google Play Info segment */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 select-none">
        <div className="bg-[#131520] rounded-2xl border border-slate-900 p-5 flex items-center space-x-3.5 text-left">
          <ShieldCheck className="w-6 h-6 text-indigo-400 shrink-0" />
          <span className="text-xs text-slate-400 leading-normal">
            <strong>Secure Billing:</strong> All RunCoder Pro subscriptions and purchases are handled with 100% security by <strong>Google Play Billing</strong>. Prices may vary by country, and taxes are handled entirely by Google Play where applicable. Subscriptions are managed directly through Google Play using the customer's Google Account; our website itself does not process payments.
          </span>
        </div>
      </section>

      {/* Comparison table */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 select-none space-y-6">
        <div className="text-center space-y-1.5">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">Side-By-Side Comparison</span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-display">Free vs. RunCoder Pro</h2>
        </div>

        <div className="bg-[#131520] border border-slate-900 rounded-3xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0d0e15] border-b border-slate-900/60 text-xs font-bold text-slate-400">
                  <th className="p-4 sm:p-5">Feature Parameter</th>
                  <th className="p-4 sm:p-5 text-center">Free Version</th>
                  <th className="p-4 sm:p-5 text-center">Pro Pass</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/30 text-xs text-slate-300">
                {comparisonRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-800/20 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white">{row.name}</td>
                    <td className="p-4 sm:p-5 text-center font-semibold">
                      {typeof row.free === 'boolean' ? (
                        row.free ? (
                          <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-rose-500/60 mx-auto" />
                        )
                      ) : (
                        <span className="text-slate-400">{row.free}</span>
                      )}
                    </td>
                    <td className="p-4 sm:p-5 text-center font-bold text-indigo-400">
                      {typeof row.pro === 'boolean' ? (
                        row.pro ? (
                          <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-rose-500/60 mx-auto" />
                        )
                      ) : (
                        <span>{row.pro}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}
