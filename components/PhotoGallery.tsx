'use client';

import Image from 'next/image';
import { Camera, Instagram } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=600&auto=format&fit=crop',
    caption: 'Fresh Uji Chasen Foam',
    aspect: 'aspect-[3/4]',
  },
  {
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop',
    caption: 'Quiet Morning in Kyoto Cafe',
    aspect: 'aspect-[4/3]',
  },
  {
    src: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600&auto=format&fit=crop',
    caption: 'Stone Milled Emerald Powder',
    aspect: 'aspect-[3/4]',
  },
  {
    src: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop',
    caption: 'Arashiyama Bamboo Sanctuary',
    aspect: 'aspect-[4/3]',
  },
  {
    src: 'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?q=80&w=600&auto=format&fit=crop',
    caption: 'Artisanal Teaware & Chawan',
    aspect: 'aspect-[3/4]',
  },
];

export default function PhotoGallery() {
  return (
    <section className="py-20 bg-linen-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-matcha-medium font-semibold block mb-1">
              Visual Moments
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-earth-charcoal">
              Moments of Tranquility
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-matcha-ceremonial hover:text-matcha-deep mt-4 sm:mt-0 transition-colors"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow @mamm.suparat</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl overflow-hidden group border border-linen-warm/60 shadow-soft-glow ${img.aspect}`}
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="font-sans text-xs text-linen-light font-medium flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-matcha-accent" />
                  {img.caption}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
