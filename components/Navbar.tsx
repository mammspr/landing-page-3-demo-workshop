'use client';

import { useState, useEffect } from 'react';
import { Sparkles, Menu, X, CupSoda } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Matcha Rituals', href: '#matcha' },
    { name: 'Cafe Hopping', href: '#cafes' },
    { name: 'Travel Guides', href: '#travel' },
    { name: 'About Mamm', href: '#about' },
    { name: 'Journal', href: '#articles' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-linen-light/85 backdrop-blur-md border-b border-linen-warm/60 py-4 shadow-soft-glow'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="group flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-matcha-ceremonial flex items-center justify-center text-linen-light transition-transform duration-500 group-hover:rotate-12 group-hover:scale-105 shadow-md">
            <CupSoda className="w-4 h-4 text-matcha-accent" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-semibold tracking-wide text-earth-charcoal group-hover:text-matcha-ceremonial transition-colors">
              Mamm Suparat
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-earth-muted font-sans font-medium -mt-1">
              Matcha & Lifestyle
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-sans font-medium text-earth-muted hover:text-matcha-ceremonial transition-colors relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-matcha-ceremonial transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#newsletter"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-matcha-ceremonial text-linen-light text-xs font-sans font-medium tracking-wider uppercase hover:bg-matcha-deep transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-matcha-accent" />
            <span>The Dispatch</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full text-earth-charcoal hover:bg-linen-warm/50 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-linen-light/95 backdrop-blur-xl border-b border-linen-warm px-6 py-8 flex flex-col space-y-5 shadow-luxury animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif font-medium text-earth-charcoal hover:text-matcha-ceremonial transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-linen-warm">
            <a
              href="#newsletter"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-matcha-ceremonial text-linen-light text-xs font-sans font-medium tracking-wider uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 text-matcha-accent" />
              <span>Subscribe to Dispatch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
