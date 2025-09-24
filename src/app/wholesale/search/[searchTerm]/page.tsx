'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { ProductCard } from '@/components/product-card';
import { allProducts } from '@/lib/products';
import type { Product } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';
import { ScrollAnimation } from '@/components/scroll-animation';

export default function SearchPage() {
  const params = useParams();
  const searchTerm = params.searchTerm as string;
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const results = allProducts.filter(product =>
        product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        product.description.toLowerCase().includes(lowerCaseSearchTerm) ||
        product.id.toLowerCase().includes(lowerCaseSearchTerm)
      );
      setFilteredProducts(results);
      setLoading(false);
    }
  }, [searchTerm]);

  const decodedSearchTerm = decodeURIComponent(searchTerm || '');

  return (
    <div className="container mx-auto px-4 py-12">
      <ScrollAnimation>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Search Results</h1>
          {searchTerm && <p className="text-lg text-muted-foreground mt-2">Showing results for: "{decodedSearchTerm}"</p>}
        </div>
      </ScrollAnimation>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[...Array(8)].map((_, i) => (
             <div key={i} className="space-y-2">
                <Skeleton className="h-48 w-full" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <ScrollAnimation key={product.id} delay={index * 0.05}>
              <ProductCard product={product} />
            </ScrollAnimation>
          ))}
        </div>
      ) : (
        <ScrollAnimation>
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No products found for "{decodedSearchTerm}".</p>
          </div>
        </ScrollAnimation>
      )}
    </div>
  );
}
