'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { PopularProducts } from '@/components/popular-products';
import { FeaturedCategories } from '@/components/featured-categories';
import { CategoryTicker } from '@/components/category-ticker';
import { TrendingNow } from '@/components/trending-now';
import { PromoBanners } from '@/components/promo-banners';

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
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50 -z-10"
          src="/videos/hero-video.mp4"
        >
          {/* Provide a fallback image for browsers that do not support video */}
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        
        <div className="z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Welcome to Amtech Industries</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Discover the pinnacle of innovation and quality with Amtech Industries. Browse our catalog of cutting-edge products.
          </p>
        </div>

        <div className="mt-8 z-10 w-full max-w-md md:max-w-2xl px-4">
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
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <FeaturedCategories />
      </div>
      <CategoryTicker />
      <div className="container mx-auto px-4 py-8">
        <PopularProducts />
        <TrendingNow />
      </div>
      <PromoBanners />
    </div>
  );
}
