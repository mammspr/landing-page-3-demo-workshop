'use client';

import { useState } from 'react';
import { Mail, Check, Sparkles, Loader2, AlertCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setEmail('');
      } else {
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Failed to connect to the server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="newsletter" className="py-24 bg-linen-light relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        
        <div className="bg-matcha-deep text-linen-light rounded-3xl p-8 sm:p-14 border border-matcha-soft/30 shadow-luxury relative overflow-hidden text-center sm:text-left">
          
          {/* Subtle Glow Overlay */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-matcha-accent/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-matcha-ceremonial border border-matcha-soft/30 text-matcha-accent text-xs font-sans font-medium tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Weekly Dispatch</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
                Join <span className="italic font-normal text-matcha-accent">The Matcha Dispatch</span>
              </h2>

              <p className="font-sans text-linen-warm/80 text-sm sm:text-base font-light leading-relaxed max-w-lg">
                Receive Mamm’s private Sunday notes on ceremonial tea discoveries, secret Kyoto cafe locations, and quiet lifestyle reflections directly in your inbox.
              </p>
            </div>

            {/* Right Form Input (5 cols) */}
            <div className="lg:col-span-5">
              {submitted ? (
                <div className="bg-matcha-ceremonial/90 border border-matcha-accent/40 p-6 rounded-2xl text-center space-y-2 animate-fadeIn">
                  <div className="w-10 h-10 rounded-full bg-matcha-accent text-matcha-deep flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-linen-light">Welcome to the inner circle!</h3>
                  <p className="font-sans text-xs text-linen-warm/80 font-light">
                    Your email has been saved to our database. Check your inbox soon for Mamm’s welcome guide.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
                  <div className="relative">
                    <Mail className="w-5 h-5 text-matcha-soft absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      disabled={loading}
                      placeholder="Enter your email address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-matcha-ceremonial/80 border border-matcha-soft/40 text-linen-light placeholder-linen-warm/50 font-sans text-sm focus:outline-none focus:border-matcha-accent focus:ring-1 focus:ring-matcha-accent transition-all disabled:opacity-60"
                    />
                  </div>

                  {errorMessage && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-red-900/40 border border-red-500/30 text-red-200 text-xs font-sans">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-2xl bg-linen-light text-matcha-deep font-sans text-xs font-semibold uppercase tracking-widest hover:bg-matcha-accent transition-colors duration-300 shadow-sm flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-matcha-deep" />
                        <span>Connecting...</span>
                      </>
                    ) : (
                      <span>Subscribe for Free</span>
                    )}
                  </button>

                  <span className="text-[11px] font-sans text-linen-warm/50 text-center block">
                    Saved directly to Mamm’s MongoDB cloud cluster.
                  </span>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
