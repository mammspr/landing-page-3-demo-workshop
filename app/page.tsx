import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CategoryHighlights from '@/components/CategoryHighlights';
import MatchaGuideSection from '@/components/MatchaGuideSection';
import FeaturedArticles from '@/components/FeaturedArticles';
import AboutMamm from '@/components/AboutMamm';
import PhotoGallery from '@/components/PhotoGallery';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-linen-light text-earth-charcoal relative">
      <Navbar />
      <HeroSection />
      <CategoryHighlights />
      <MatchaGuideSection />
      <FeaturedArticles />
      <AboutMamm />
      <PhotoGallery />
      <Newsletter />
      <Footer />
    </main>
  );
}
