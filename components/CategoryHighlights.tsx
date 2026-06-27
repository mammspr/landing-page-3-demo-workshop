'use client';

import Image from 'next/image';
import { CupSoda, Coffee, Compass, ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'matcha',
    title: 'Matcha Rituals',
    tagline: 'Ceremonial Grades & Preparation',
    description: 'Immerse in single-origin Japanese green tea culture, traditional chasen whisking, and daily mindful rituals.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop',
    icon: CupSoda,
    link: '#matcha',
    stats: '45+ Reviews & Guides',
    color: 'bg-matcha-ceremonial text-linen-light',
  },
  {
    id: 'cafes',
    title: 'Aesthetic Cafes',
    tagline: 'Architectural & Hidden Gems',
    description: 'A curated gallery of quiet, minimalist cafes offering serene ambiances, artisanal pour-overs, and specialty matcha drinks.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop',
    icon: Coffee,
    link: '#cafes',
    stats: '80+ Cafes Visited',
    color: 'bg-earth-gold text-linen-light',
  },
  {
    id: 'travel',
    title: 'Mindful Travel',
    tagline: 'Kyoto, Uji & Beyond',
    description: 'Slow travel itineraries focused on nature retreats, traditional ryokans, tea plantations, and tranquil heritage towns.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop',
    icon: Compass,
    link: '#travel',
    stats: '25+ Destinations',
    color: 'bg-matcha-medium text-linen-light',
  },
];

export default function CategoryHighlights() {
  return (
    <section id="pillars" className="py-24 bg-linen-light relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-linen-warm">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-matcha-medium font-semibold block mb-2">
              Core Pillars
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-earth-charcoal">
              Curated Content Themes
            </h2>
          </div>
          <p className="font-sans text-sm text-earth-muted max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            Exploring life through sensory appreciation—from the vibrant green of ceremonial tea to tranquil architectural spaces.
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <div
                key={cat.id}
                className="group relative bg-linen-card rounded-2xl overflow-hidden border border-linen-warm/80 shadow-soft-glow hover:shadow-luxury transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image Section with Hover Zoom */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-earth-charcoal/20 group-hover:bg-earth-charcoal/10 transition-colors duration-500" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-linen-light/90 backdrop-blur-md text-[11px] font-sans font-medium text-earth-charcoal border border-linen-warm">
                      <IconComponent className="w-3.5 h-3.5 text-matcha-ceremonial" />
                      {cat.stats}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow justify-between space-y-6">
                  <div>
                    <span className="text-xs font-sans uppercase tracking-wider text-matcha-medium font-medium block mb-1">
                      {cat.tagline}
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-earth-charcoal group-hover:text-matcha-ceremonial transition-colors">
                      {cat.title}
                    </h3>
                    <p className="font-sans text-sm text-earth-muted font-light mt-3 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-linen-warm/60 flex items-center justify-between">
                    <span className="text-xs font-sans font-medium text-earth-charcoal group-hover:text-matcha-ceremonial transition-colors">
                      Explore Topics
                    </span>
                    <div className="w-8 h-8 rounded-full bg-linen-light flex items-center justify-center text-earth-charcoal group-hover:bg-matcha-ceremonial group-hover:text-linen-light transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
