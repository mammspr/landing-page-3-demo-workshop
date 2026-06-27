'use client';

import Image from 'next/image';
import { ArrowUpRight, Leaf, Compass, Coffee } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-gradient-to-b from-linen-light via-linen-card/40 to-linen-light">
      {/* Soft Decorative Background Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-matcha-soft/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-earth-sand/15 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-8">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-matcha-tint border border-matcha-soft/30 text-matcha-ceremonial text-xs font-sans font-medium tracking-widest uppercase">
              <Leaf className="w-3.5 h-3.5 text-matcha-medium" />
              <span>Quiet Luxury & Mindful Living</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-earth-charcoal leading-[1.1]">
              Savoring slow moments, <br className="hidden sm:inline" />
              <span className="italic font-normal text-matcha-ceremonial">ceremonial matcha</span> & serene escapes.
            </h1>

            {/* Subtitle / Bio Teaser */}
            <p className="font-sans text-base sm:text-lg text-earth-muted max-w-xl font-light leading-relaxed">
              Hello, I’m <strong className="font-medium text-earth-charcoal">Mamm Suparat</strong>. Join me on a curated journey exploring the tranquility of authentic matcha rituals, hidden artisanal cafes, and slow, intentional travel.
            </p>

            {/* Quick Feature Pills */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-sans text-earth-muted">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-matcha-medium" />
                <span>Uji & Yame Single-Origin Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-earth-gold" />
                <span>Tokyo & Kyoto Cafe Guides</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-matcha-soft" />
                <span>Mindful Retreats</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#articles"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-matcha-ceremonial text-linen-light font-sans text-sm font-medium tracking-wide hover:bg-matcha-deep transition-all duration-300 shadow-luxury hover:shadow-card-hover group"
              >
                <span>Explore The Journal</span>
                <ArrowUpRight className="w-4 h-4 text-matcha-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#matcha-ritual"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-linen-card border border-linen-warm text-earth-charcoal font-sans text-sm font-medium tracking-wide hover:bg-linen-warm/60 transition-all duration-300"
              >
                <span>Matcha Beginner’s Guide</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Editorial Card Stack */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary High-End Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-luxury border-4 border-linen-light aspect-[4/5] group">
                <Image
                  src="https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=1000&auto=format&fit=crop"
                  alt="Ceremonial Matcha Preparation Ritual"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-charcoal/60 via-transparent to-transparent opacity-80" />
                
                {/* Image Overlay Caption */}
                <div className="absolute bottom-6 left-6 right-6 text-linen-light">
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-matcha-accent block mb-1">
                    Ceremonial Highlight
                  </span>
                  <h3 className="font-serif text-2xl font-normal leading-snug">
                    "The quiet stillness inside a Kyoto tea house."
                  </h3>
                </div>
              </div>

              {/* Secondary Floating Accent Card */}
              <div className="absolute -bottom-6 -left-6 bg-linen-light/95 backdrop-blur-md p-5 rounded-2xl border border-linen-warm shadow-luxury hidden sm:flex items-center gap-4 max-w-xs z-20">
                <div className="w-12 h-12 rounded-xl bg-matcha-tint flex items-center justify-center text-matcha-ceremonial shrink-0">
                  <Coffee className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium text-earth-charcoal">100+ Curated Spots</h4>
                  <p className="font-sans text-xs text-earth-muted">Handpicked aesthetic cafes across Asia & Europe.</p>
                </div>
              </div>

              {/* Decorative Geometric Ring */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full border border-matcha-soft/30 pointer-events-none hidden sm:block" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
