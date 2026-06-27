'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Check, Thermometer, Droplets, ShieldCheck } from 'lucide-react';

const matchaTips = [
  {
    id: 'grade',
    title: 'Ceremonial vs Culinary Grade',
    subtitle: 'Understanding the Harvest & Stone-Grinding',
    icon: ShieldCheck,
    content: 'True ceremonial matcha comes exclusively from the first spring harvest (Ichibancha). Leaves are meticulously shaded for 20-30 days to maximize L-theanine amino acids, producing an intense umami and vivid emerald hue without astringency.',
    detail: 'Look for single-origin tins from Uji or Yame with stone-milled powder under 10 microns.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'whisk',
    title: 'The Chasen (Bamboo Whisk) Ritual',
    subtitle: 'Creating Micro-foam & Silky Crema',
    icon: Sparkles,
    content: 'Whisking matcha is a meditative ritual. Using a traditional 80 to 100-prong bamboo chasen, move your wrist rapidly in a brisk "W" or "M" motion rather than circular. This incorporates air to create a velvet-smooth jade foam layer.',
    detail: 'Soak your chasen tines in warm water for 1 minute before whisking to soften the bamboo.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'temperature',
    title: 'Optimal Water Temperature',
    subtitle: '70°C – 80°C (158°F – 176°F)',
    icon: Thermometer,
    content: 'Never use boiling water! Water above 80°C scorches the delicate tea leaves, destroying aromatic antioxidants and releasing harsh tannins. 70°C water yields a sweet, broth-like umami sweetness.',
    detail: 'Ratio suggestion: 2g (1 chashaku scoop) of matcha powder to 60ml - 70ml of warm filtered water.',
    image: 'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?q=80&w=800&auto=format&fit=crop'
  }
];

export default function MatchaGuideSection() {
  const [activeTab, setActiveTab] = useState(matchaTips[0].id);
  const currentTip = matchaTips.find((t) => t.id === activeTab) || matchaTips[0];

  return (
    <section id="matcha" className="py-24 bg-matcha-deep text-linen-light relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-matcha-medium/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-matcha-ceremonial border border-matcha-soft/30 text-matcha-accent text-xs font-sans font-medium tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mamm’s Specialty Spotlight</span>
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-tight leading-tight">
            The Art & Mindful Science of Matcha
          </h2>
          <p className="font-sans text-linen-warm/80 text-sm sm:text-base font-light leading-relaxed">
            From farm to whisk. Essential knowledge curated for ceremonial tea lovers seeking authentic flavor, calm focus, and sensory harmony.
          </p>
        </div>

        {/* Interactive Guide Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-matcha-ceremonial/60 rounded-3xl p-6 sm:p-10 border border-matcha-soft/20 backdrop-blur-md shadow-luxury">
          
          {/* Navigation Tabs (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {matchaTips.map((tip) => {
              const IconComp = tip.icon;
              const isActive = activeTab === tip.id;
              return (
                <button
                  key={tip.id}
                  onClick={() => setActiveTab(tip.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 flex items-start gap-4 ${
                    isActive
                      ? 'bg-linen-light text-earth-charcoal shadow-luxury translate-x-1'
                      : 'bg-matcha-deep/50 text-linen-warm/70 hover:bg-matcha-deep/80 hover:text-linen-light'
                  }`}
                >
                  <div className={`p-3 rounded-xl shrink-0 ${isActive ? 'bg-matcha-ceremonial text-matcha-accent' : 'bg-matcha-ceremonial/60 text-matcha-soft'}`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`font-serif text-xl font-medium ${isActive ? 'text-earth-charcoal' : 'text-linen-light'}`}>
                      {tip.title}
                    </h3>
                    <p className={`font-sans text-xs mt-1 ${isActive ? 'text-earth-muted' : 'text-linen-warm/60'}`}>
                      {tip.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Content Display Card (Right 7 cols) */}
          <div className="lg:col-span-7 bg-linen-light text-earth-charcoal p-8 sm:p-10 rounded-2xl shadow-luxury flex flex-col justify-between space-y-8 min-h-[420px]">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-linen-warm pb-4">
                <span className="text-xs font-sans uppercase tracking-widest text-matcha-medium font-semibold">
                  {currentTip.subtitle}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-sans font-medium text-matcha-ceremonial bg-matcha-tint px-3 py-1 rounded-full">
                  <Check className="w-3.5 h-3.5" /> Verified Guide
                </span>
              </div>

              <h3 className="font-serif text-3xl font-normal text-earth-charcoal">
                {currentTip.title}
              </h3>

              <p className="font-sans text-earth-muted font-light leading-relaxed text-base sm:text-lg">
                {currentTip.content}
              </p>

              <div className="bg-linen-card p-5 rounded-xl border border-linen-warm/80">
                <p className="font-sans text-xs text-earth-charcoal font-medium flex items-start gap-2">
                  <span className="text-matcha-ceremonial font-bold">PRO TIP:</span>
                  <span>{currentTip.detail}</span>
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between text-xs font-sans text-earth-muted">
              <span>Curated by Mamm Suparat</span>
              <a href="#articles" className="text-matcha-ceremonial font-medium hover:underline flex items-center gap-1">
                Read full tasting notes →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
