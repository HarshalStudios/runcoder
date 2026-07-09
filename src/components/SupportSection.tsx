import { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare, AlertTriangle, Lightbulb, Mail, Settings, Shield, CreditCard, Heart } from 'lucide-react';

export default function SupportSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const articles = [
    {
      q: 'How do I run program scripts?',
      a: 'Open any code file from your workspace explorer, select your programming language, and run your code. The editor executes your code and displays output messages inside the integrated console at the bottom of the screen.'
    },
    {
      q: 'What languages are supported by RunCoder?',
      a: 'RunCoder officially supports multiple popular programming languages including C, C++, Java, Python, HTML, CSS, and JavaScript. You can write, test, and preview code directly from your Android device.'
    },
    {
      q: 'How do I cancel my active Pro subscription?',
      a: 'Subscription management is handled entirely through the Google Play Store using the customer\'s Google account. Open the Google Play Store app on your Android device, tap your profile icon, go to "Payments & Subscriptions" ➔ "Subscriptions", find RunCoder, and select Cancel.'
    },
    {
      q: 'Can I import code from my local device?',
      a: 'Yes, you can import existing source files into your workspace. Open settings inside the application and look for the Import File option to read and edit existing files on your phone.'
    }
  ];

  const supportCategories = [
    {
      title: 'General Support',
      desc: 'Get help with general workspace settings, file management, and core editor personalization options.',
      icon: Settings,
      emailSubject: '[General Support]',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10 border-blue-500/20'
    },
    {
      title: 'Bug Reports',
      desc: 'Encountered an issue with syntax highlighting, compiler outputs, or file explorer navigation? Let us know.',
      icon: AlertTriangle,
      emailSubject: '[Bug Report]',
      color: 'text-rose-400',
      bg: 'bg-rose-500/10 border-rose-500/20'
    },
    {
      title: 'Feature Requests',
      desc: 'Suggest new themes, personalized coding fonts, or other editor tools you would love to see.',
      icon: Lightbulb,
      emailSubject: '[Feature Request]',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20'
    },
    {
      title: 'Feedback',
      desc: 'Share your overall user experience and suggestions to help us improve the application.',
      icon: Heart,
      emailSubject: '[General Feedback]',
      color: 'text-pink-400',
      bg: 'bg-pink-500/10 border-pink-500/20'
    },
    {
      title: 'Account & Billing',
      desc: 'Inquiries regarding your premium Pro subscription status or restoring purchases.',
      icon: CreditCard,
      emailSubject: '[Account & Billing]',
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10 border-indigo-500/20'
    },
    {
      title: 'Google Play Purchases',
      desc: 'Assistance with regional pricing, Play Store transactions, or subscription renewals.',
      icon: HelpCircle,
      emailSubject: '[Google Play Purchase]',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20'
    },
    {
      title: 'Privacy Questions',
      desc: 'Inquiries about on-device workspace security, local folders, or personal data deletion.',
      icon: Shield,
      emailSubject: '[Privacy Question]',
      color: 'text-teal-400',
      bg: 'bg-teal-500/10 border-teal-500/20'
    },
    {
      title: 'Developer Contact',
      desc: 'For education licenses, partnerships, and developer inquiries regarding Harshal Studios.',
      icon: Mail,
      emailSubject: '[Developer Contact]',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/20'
    }
  ];

  return (
    <div className="space-y-20 pb-16">
      
      {/* Title */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-10 select-none px-4">
        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest font-mono">RunCoder Help Center</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
          How Can We Help You?
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
          Explore articles on workspace settings, Google Play subscription cancellations, or contact our support team directly.
        </p>
      </section>

      {/* Accordion FAQ Area */}
      <section className="max-w-3xl mx-auto px-4 select-none">
        <div className="bg-[#131520] border border-slate-900 rounded-3xl p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-white tracking-tight mb-4 flex items-center space-x-2">
            <HelpCircle className="w-5 h-5 text-blue-400" />
            <span>Frequently Asked Questions</span>
          </h2>

          <div className="divide-y divide-slate-800/40">
            {articles.map((art, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center text-left text-xs sm:text-sm font-bold text-slate-200 hover:text-white transition-colors focus:outline-none"
                  >
                    <span>{art.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <p className="text-xs text-slate-400 leading-relaxed mt-2.5 pl-0.5">
                      {art.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid of Support Categories */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 select-none space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">Contact Helpdesk</span>
          <h2 className="text-2xl font-extrabold text-white tracking-tight font-display">Support Directories</h2>
          <p className="text-xs text-slate-400 leading-relaxed max-w-md mx-auto">
            Select a specialized category below to compose an inquiry email. Our support team responds to all cases within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportCategories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <div key={idx} className="bg-[#131520] border border-slate-900 rounded-2xl p-5 flex flex-col justify-between space-y-4 text-left">
                <div className="space-y-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${cat.bg}`}>
                    <IconComponent className={`w-4.5 h-4.5 ${cat.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-extrabold text-white">{cat.title}</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                </div>
                <div className="pt-2">
                  <a 
                    href={`mailto:runcodersupport@gmail.com?subject=${encodeURIComponent(cat.emailSubject)}`}
                    className="inline-flex items-center space-x-1 text-xs text-slate-300 hover:text-white font-bold transition-all cursor-pointer"
                  >
                    <span>Contact Support</span>
                    <MessageSquare className="w-3.5 h-3.5 opacity-60" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Manual Assist Footer Block */}
      <section className="max-w-3xl mx-auto px-4 select-none">
        <div className="bg-[#131520] border border-slate-900 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <h3 className="text-sm font-extrabold text-white">Direct Developer Email</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              If you have any other questions, feel free to email our helpdesk directly.
            </p>
          </div>
          <a 
            href="mailto:runcodersupport@gmail.com"
            className="bg-[#1d2033] hover:bg-slate-800 text-white font-bold text-xs py-2.5 px-5 rounded-xl flex items-center space-x-2 border border-slate-800/80 transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4 text-indigo-400" />
            <span>runcodersupport@gmail.com</span>
          </a>
        </div>
      </section>

    </div>
  );
}
