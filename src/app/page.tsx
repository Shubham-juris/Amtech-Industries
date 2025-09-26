'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { PopularProducts } from '@/components/popular-products';
import { FeaturedCategories } from '@/components/featured-categories';
import { CategoryTicker } from '@/components/category-ticker';
import { TrendingProductsBanner } from '@/components/trending-products-banner';
import { PromoBanners } from '@/components/promo-banners';
import { FashionBanner } from '@/components/fashion-banner';
import { trendingPlusSize, trendingSportsBras } from '@/lib/data/trending';
import { ReasonsToPartner } from '@/components/reasons-to-partner';
import { ManufacturingProcedure } from '@/components/manufacturing-procedure';
import { ScrollAnimation } from '@/components/scroll-animation';
import { motion } from 'framer-motion';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/wholesale/search/${searchTerm.trim()}`);
    }
  };

  return (
    <div>
      <section className="relative h-[70vh] flex flex-col items-center justify-center text-center text-white bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
          src="/videos/hero-video.mp4"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        
        <div className="z-10 p-4">
           <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
          >
            Welcome to Amtech Industries
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Discover the pinnacle of innovation and quality with Amtech Industries. Browse our catalog of cutting-edge products.
          </motion.p>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 z-10 w-full max-w-md md:max-w-2xl px-4"
        >
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-24 md:pr-28 py-3 md:py-6 text-sm md:text-lg rounded-full shadow-lg text-black"
            />
            <Button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full py-2 md:py-3 px-4 md:px-6 text-sm md:text-base">
              Search
            </Button>
          </form>
        </motion.div>
      </section>

      <ScrollAnimation>
        <div className="container mx-auto px-4 py-8">
          <FeaturedCategories />
        </div>
      </ScrollAnimation>
       <div className="container mx-auto px-4 py-8">
        <ScrollAnimation>
          <PopularProducts />
        </ScrollAnimation>
        <ScrollAnimation>
          <TrendingProductsBanner 
              title="TRENDING NOW" 
              products={trendingPlusSize}
              largeImage={{
                  src: "https://picsum.photos/seed/trending-right-1/800/1200",
                  alt: "Fashion model in red dress",
                  hint: "woman red dress"
              }}
              largeImageSide='right'
              wavyImage={{
                src: "https://picsum.photos/seed/trending-right-2/800/1200",
                alt: "Fashion model in green dress",
                hint: "woman green dress"
              }}
              overlayText="GET 40% OFF ON WHOLESALE"
          />
        </ScrollAnimation>
         <ScrollAnimation>
            <TrendingProductsBanner 
              title="BE SPORTY" 
              products={trendingSportsBras}
              largeImage={{
                src: "https://picsum.photos/seed/trending-right-1/800/1200",
                alt: "Fashion model in a sporty top",
                hint: "woman sporty top"
              }}
            />
         </ScrollAnimation>
      </div>
      <ScrollAnimation>
        <CategoryTicker />
      </ScrollAnimation>
      <ScrollAnimation>
        <FashionBanner />
      </ScrollAnimation>
      <ScrollAnimation>
        <ManufacturingProcedure />
      </ScrollAnimation>
      <ScrollAnimation>
        <PromoBanners />
      </ScrollAnimation>
      <ScrollAnimation>
        <ReasonsToPartner />
      </ScrollAnimation>
    </div>
  );
}
