'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Clock, Tag, ArrowUpRight, Heart, Share2, Sparkles } from 'lucide-react';

interface Article {
  id: string;
  category: 'Matcha' | 'Cafe' | 'Travel';
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  tag: string;
}

const articles: Article[] = [
  {
    id: '1',
    category: 'Matcha',
    title: 'The Search for Kyoto’s Secret Single-Origin Matcha Farms',
    excerpt: 'Journeying deep into the misty hills of Uji to meet 5th-generation tea farmers preserving ancient stone-milling traditions.',
    readTime: '6 min read',
    date: 'June 2026',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop',
    tag: 'Ceremonial Origin',
  },
  {
    id: '2',
    category: 'Cafe',
    title: 'Tokyo Minimalist Guide: 7 Architectural Cafes for Quiet Reflection',
    excerpt: 'Escape the concrete bustle. Discover hidden espresso bars and serene matcha sanctuaries designed with brutalist warm oak and glass.',
    readTime: '8 min read',
    date: 'May 2026',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop',
    tag: 'Cafe Architecture',
  },
  {
    id: '3',
    category: 'Travel',
    title: 'A Weekend in Hakone: Hot Springs, Cedar Forests & Mountain Tea',
    excerpt: 'Unwinding in a historic Ryokan, sipping hot genmaicha by private open-air baths, and finding tranquil solitude.',
    readTime: '10 min read',
    date: 'May 2026',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop',
    tag: 'Slow Travel',
  },
  {
    id: '4',
    category: 'Matcha',
    title: 'Cold-Foam Iced Matcha Latte: Achieving the Perfect Silky Layer',
    excerpt: 'How to craft cafe-quality cold whisked matcha with oat milk at home without losing the vibrant emerald top foam.',
    readTime: '4 min read',
    date: 'April 2026',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=800&auto=format&fit=crop',
    tag: 'Home Recipe',
  },
  {
    id: '5',
    category: 'Cafe',
    title: 'Omotesando’s Best Kept Secret: Dessert Pairings with Uji Tea',
    excerpt: 'Exploring seasonal wagashi (Japanese sweet confections) thoughtfully paired with umami-rich ceremonial green tea shots.',
    readTime: '5 min read',
    date: 'April 2026',
    image: 'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?q=80&w=800&auto=format&fit=crop',
    tag: 'Teahouse & Sweets',
  },
  {
    id: '6',
    category: 'Travel',
    title: 'Mindful Packing Essentials for Zen-Seeking Travelers',
    excerpt: 'From portable travel chasen whisk kits to linen loungewear—my curated packing list for peaceful soul journeys.',
    readTime: '7 min read',
    date: 'March 2026',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop',
    tag: 'Lifestyle Notes',
  },
];

export default function FeaturedArticles() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Matcha' | 'Cafe' | 'Travel'>('All');
  const [likedArticles, setLikedArticles] = useState<Record<string, boolean>>({});

  const filteredArticles = activeFilter === 'All'
    ? articles
    : articles.filter((a) => a.category === activeFilter);

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLikedArticles((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="articles" className="py-24 bg-linen-light relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-linen-warm">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-matcha-medium font-semibold block mb-2">
              Mamm’s Journal
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-earth-charcoal">
              Featured Stories & Guides
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center space-x-2 mt-6 md:mt-0 bg-linen-card p-1.5 rounded-full border border-linen-warm overflow-x-auto">
            {(['All', 'Matcha', 'Cafe', 'Travel'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-5 py-2 rounded-full text-xs font-sans font-medium transition-all duration-300 whitespace-nowrap ${
                  activeFilter === tab
                    ? 'bg-matcha-ceremonial text-linen-light shadow-sm'
                    : 'text-earth-muted hover:text-earth-charcoal hover:bg-linen-warm/50'
                }`}
              >
                {tab === 'All' ? 'All Stories' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => {
            const isLiked = likedArticles[article.id];
            return (
              <article
                key={article.id}
                className="group bg-linen-card rounded-2xl overflow-hidden border border-linen-warm/80 shadow-soft-glow hover:shadow-card-hover transition-all duration-500 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-earth-charcoal/15 group-hover:bg-earth-charcoal/5 transition-colors" />

                    {/* Tag Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-linen-light/90 backdrop-blur-md text-[10px] font-sans font-semibold tracking-wider uppercase text-matcha-ceremonial border border-linen-warm">
                        <Tag className="w-3 h-3 text-matcha-medium" />
                        {article.tag}
                      </span>
                    </div>

                    {/* Like Button */}
                    <button
                      onClick={(e) => toggleLike(article.id, e)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-linen-light/80 backdrop-blur-md text-earth-charcoal hover:bg-linen-light transition-colors shadow-sm"
                      aria-label="Bookmark story"
                    >
                      <Heart
                        className={`w-4 h-4 transition-colors ${
                          isLiked ? 'fill-red-500 text-red-500' : 'text-earth-muted'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-7 space-y-4">
                    <div className="flex items-center justify-between text-xs font-sans text-earth-muted">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime}
                      </span>
                      <span>{article.date}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-normal text-earth-charcoal group-hover:text-matcha-ceremonial transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="font-sans text-sm text-earth-muted font-light leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="p-7 pt-0">
                  <div className="pt-4 border-t border-linen-warm/60 flex items-center justify-between">
                    <span className="text-xs font-sans font-semibold uppercase tracking-wider text-matcha-ceremonial group-hover:underline flex items-center gap-1">
                      Read Journal <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-xs font-sans text-earth-muted">By Mamm Suparat</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
