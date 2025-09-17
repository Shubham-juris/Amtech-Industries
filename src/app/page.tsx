'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { PopularProducts } from '@/components/popular-products';
import { FeaturedCategories } from '@/components/featured-categories';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/wholesale/search/${searchTerm}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">Welcome to Amtech Industries</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover the pinnacle of innovation and quality with Amtech Industries. Browse our catalog of cutting-edge products.
        </p>
      </header>

      <div className="mb-12 max-w-lg mx-auto">
        <form onSubmit={handleSearch} className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-24 py-3 text-base rounded-full shadow-sm"
          />
          <Button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full">Search</Button>
        </form>
      </div>

      <FeaturedCategories />

      <PopularProducts />

    </div>
  );
}
