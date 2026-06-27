'use client';

import Image from 'next/image';
import { Sparkles, Heart, Coffee, Compass, Instagram, Youtube, Pin } from 'lucide-react';

export default function AboutMamm() {
  return (
    <section id="about" className="py-24 bg-linen-card relative overflow-hidden border-y border-linen-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait & Aesthetic Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Portrait Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-luxury border-4 border-linen-light aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
                  alt="Mamm Suparat Profile"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-charcoal/40 via-transparent to-transparent" />
              </div>

              {/* Floating Quote Card */}
              <div className="absolute -bottom-6 -right-4 bg-linen-light p-6 rounded-2xl border border-linen-warm shadow-luxury max-w-xs hidden sm:block">
                <div className="flex items-center gap-1 text-earth-gold mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="w-3.5 h-3.5 fill-earth-gold" />
                  ))}
                </div>
                <p className="font-serif text-sm italic text-earth-charcoal leading-relaxed">
                  "In a fast-paced world, preparing ceremonial matcha is my daily anchor of stillness and gratitude."
                </p>
                <span className="text-[11px] font-sans text-earth-muted uppercase tracking-wider block mt-2 font-medium">
                  — Mamm Suparat
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-sans uppercase tracking-[0.25em] text-matcha-medium font-semibold block mb-2">
                Behind The Journal
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-earth-charcoal leading-tight">
                Welcome to my sanctuary of slow living & quiet luxury.
              </h2>
            </div>

            <div className="space-y-4 font-sans text-earth-muted font-light leading-relaxed text-base sm:text-lg">
              <p>
                Hi, I’m <strong className="font-medium text-earth-charcoal">Mamm Suparat</strong>. My passion lies in discovering life’s subtle elegance through the lens of Japanese matcha rituals, tranquil interior design, and thoughtful travel exploration.
              </p>
              <p>
                What started as a personal quest to find authentic single-origin ceremonial green tea in Kyoto expanded into a dedicated lifestyle platform. Here, I curate hidden artisan cafes, break down the science of tea whisking, and share tranquil travel guides for discerning souls.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-linen-light border border-linen-warm">
                <h3 className="font-serif text-lg font-medium text-earth-charcoal flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-matcha-ceremonial" />
                  Intentional Living
                </h3>
                <p className="font-sans text-xs text-earth-muted mt-1">Savoring each cup and moment without rush.</p>
              </div>

              <div className="p-4 rounded-xl bg-linen-light border border-linen-warm">
                <h3 className="font-serif text-lg font-medium text-earth-charcoal flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-earth-gold" />
                  Artisanal Heritage
                </h3>
                <p className="font-sans text-xs text-earth-muted mt-1">Honoring centuries-old Japanese craft & terroir.</p>
              </div>
            </div>

            {/* Social Connection Handles */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <span className="text-xs font-sans uppercase tracking-wider text-earth-muted font-medium">
                Connect with Mamm:
              </span>
              <div className="flex items-center space-x-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-linen-light border border-linen-warm flex items-center justify-center text-earth-charcoal hover:bg-matcha-ceremonial hover:text-linen-light hover:border-matcha-ceremonial transition-all duration-300 shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-linen-light border border-linen-warm flex items-center justify-center text-earth-charcoal hover:bg-matcha-ceremonial hover:text-linen-light hover:border-matcha-ceremonial transition-all duration-300 shadow-sm"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-linen-light border border-linen-warm flex items-center justify-center text-earth-charcoal hover:bg-matcha-ceremonial hover:text-linen-light hover:border-matcha-ceremonial transition-all duration-300 shadow-sm"
                  aria-label="Pinterest"
                >
                  <Pin className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
