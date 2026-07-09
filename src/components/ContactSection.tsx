import { useState, FormEvent } from 'react';
import { Mail, Clock, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'General Inquiry',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        category: 'General Inquiry',
        subject: '',
        message: ''
      });
    }, 1200);
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Title */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-10 select-none px-4">
        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest font-mono">Get in Touch</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
          Contact Our Team.
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
          We prioritize student requests. Message our engineering team regarding bugs, educational licensing, or app operations.
        </p>
      </section>

      {/* Main Split Layout */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 select-none">
        
        {/* Contact details */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4 text-left">
            <h2 className="text-xl font-extrabold text-white font-display tracking-tight">RunCoder HQ</h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              RunCoder is developed by a global remote-first team of educational enthusiasts and experienced Android developers.
            </p>
          </div>

          <div className="space-y-6 text-left">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-indigo-950/40 rounded-xl border border-indigo-900/30 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-white">Direct Email Support</h4>
                <a href="mailto:runcodersupport@gmail.com" className="text-xs text-indigo-300 hover:underline">
                  runcodersupport@gmail.com
                </a>
                <p className="text-[10px] text-slate-500 mt-0.5">Email code scripts or screenshots anytime.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-indigo-950/40 rounded-xl border border-indigo-900/30 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-white">Average Response SLA</h4>
                <span className="text-xs text-slate-300">Under 24 Hours</span>
                <p className="text-[10px] text-slate-500 mt-0.5">Our support engineers operate on shifts to respond daily.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-indigo-950/40 rounded-xl border border-indigo-900/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-white">AdMob & Play Store Compliant</h4>
                <span className="text-xs text-slate-300">Verified Publisher Account</span>
                <p className="text-[10px] text-slate-500 mt-0.5">Ad-verification files managed safely in the domain root.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Contact Form Panel */}
        <div className="lg:col-span-7 bg-[#131520] border border-slate-900 rounded-3xl p-6 sm:p-8">
          
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20 mx-auto">
                <CheckCircle2 className="w-7 h-7 text-emerald-400" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-white">Message Dispatched!</h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                  Thank you for writing. We have successfully recorded your details and assigned a ticket. Our support engineers will respond back shortly.
                </p>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs py-2 px-5 rounded-lg transition-all active:scale-95 cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">Your Name *</label>
                  <input 
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0d0e15] border border-slate-800 rounded-xl py-2.5 px-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">Your Email Address *</label>
                  <input 
                    type="email"
                    required
                    placeholder="name@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0d0e15] border border-slate-800 rounded-xl py-2.5 px-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">Inquiry Type</label>
                  <select 
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[#0d0e15] border border-slate-800 rounded-xl py-2.5 px-4 text-xs text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="General Inquiry">General Help</option>
                    <option value="Compiler Bug">Compiler Bug</option>
                    <option value="Feature Request">Feature Request</option>
                    <option value="Educational Licenses">Bulk Edu Pricing</option>
                  </select>
                </div>
                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">Subject</label>
                  <input 
                    type="text"
                    placeholder="Brief headline description"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#0d0e15] border border-slate-800 rounded-xl py-2.5 px-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">Message details *</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="How can we help? If reporting a bug, please outline code lines and compiler terminal outputs."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#0d0e15] border border-slate-800 rounded-xl py-2.5 px-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 resize-none leading-relaxed"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-40 text-white font-bold text-xs py-3 rounded-xl shadow-lg shadow-blue-950/20 active:scale-99 transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Dispatching Message...' : 'Send Message'}</span>
              </button>
            </form>
          )}

        </div>

      </section>

    </div>
  );
}
