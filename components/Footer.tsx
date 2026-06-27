'use client';

import { ArrowUp, CupSoda, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-linen-card border-t border-linen-warm text-earth-charcoal pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-linen-warm">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-matcha-ceremonial flex items-center justify-center text-linen-light shadow-sm">
                <CupSoda className="w-4 h-4 text-matcha-accent" />
              </div>
              <span className="font-serif text-2xl font-semibold tracking-wide text-earth-charcoal">
                Mamm Suparat
              </span>
            </div>
            <p className="font-sans text-xs text-earth-muted font-light leading-relaxed max-w-sm">
              A curated quiet luxury blog celebrating ceremonial matcha rituals, architectural cafe hopping, and mindful travel across Japan and beyond.
            </p>
          </div>

          {/* Quick Navigation (4 cols) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-xs">
            <div>
              <h4 className="font-serif text-sm font-medium text-earth-charcoal mb-3 uppercase tracking-wider">
                Explore
              </h4>
              <ul className="space-y-2.5 text-earth-muted">
                <li><a href="#matcha" className="hover:text-matcha-ceremonial transition-colors">Matcha Rituals</a></li>
                <li><a href="#cafes" className="hover:text-matcha-ceremonial transition-colors">Cafe Guides</a></li>
                <li><a href="#travel" className="hover:text-matcha-ceremonial transition-colors">Mindful Travel</a></li>
                <li><a href="#about" className="hover:text-matcha-ceremonial transition-colors">About Mamm</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-sm font-medium text-earth-charcoal mb-3 uppercase tracking-wider">
                Topics
              </h4>
              <ul className="space-y-2.5 text-earth-muted">
                <li><a href="#articles" className="hover:text-matcha-ceremonial transition-colors">Ceremonial Uji</a></li>
                <li><a href="#articles" className="hover:text-matcha-ceremonial transition-colors">Kyoto Teahouses</a></li>
                <li><a href="#articles" className="hover:text-matcha-ceremonial transition-colors">Tokyo Cafes</a></li>
                <li><a href="#newsletter" className="hover:text-matcha-ceremonial transition-colors">The Dispatch</a></li>
              </ul>
            </div>
          </div>

          {/* Back to top & Social (3 cols) */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between space-y-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-linen-light border border-linen-warm text-earth-charcoal text-xs font-medium hover:bg-matcha-ceremonial hover:text-linen-light hover:border-matcha-ceremonial transition-all duration-300 shadow-sm"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-matcha-accent" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-earth-muted font-light">
          <p>© {new Date().getFullYear()} Mamm Suparat. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 sm:mt-0">
            Designed with <Heart className="w-3 h-3 text-matcha-medium fill-matcha-medium" /> for Matcha & Slow Living lovers.
          </p>
        </div>

      </div>
    </footer>
  );
}
