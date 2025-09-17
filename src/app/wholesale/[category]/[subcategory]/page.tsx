'use client';

import { useState, useEffect } from 'react';
import { ProductCard } from '@/components/product-card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { allProducts } from '@/lib/products';
import { Product } from '@/lib/types';
import { getFilteredProductsAction } from '@/app/actions';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

export default function WholesaleSubCategoryPage({
  params,
}: {
  params: { category: string; subcategory: string };
}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 150000]);
  const [brands, setBrands] = useState<string[]>([]);
  
  const fromTitle = (slug: string) => slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  const availableBrands = Array.from(new Set(allProducts.map(p => p.name.split(' ')[0])));

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const filteredProducts = await getFilteredProductsAction({
        category: params.category,
        subcategory: params.subcategory,
        searchTerm,
        priceRange,
        brands,
      });
      setProducts(filteredProducts);
      setLoading(false);
    };
    fetchProducts();
  }, [params.category, params.subcategory, searchTerm, priceRange, brands]);

  const handleBrandChange = (brand: string) => {
    setBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const pageTitle = `${fromTitle(params.category)} / ${fromTitle(params.subcategory)}`;

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">{pageTitle}</h1>
      </header>

      <div className="grid md:grid-cols-[280px_1fr] gap-12">
        <aside className="space-y-8">
            <h2 className="text-xl font-semibold">Filters</h2>
            
            <div>
                <h3 className="font-medium mb-4">Price Range</h3>
                <Slider
                    min={0}
                    max={150000}
                    step={100}
                    value={priceRange}
                    onValueChange={(value) => setPriceRange(value as [number, number])}
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                </div>
            </div>

            <div>
                <h3 className="font-medium mb-4">Brand</h3>
                <div className="space-y-3">
                    {availableBrands.map(brand => (
                        <div key={brand} className="flex items-center space-x-2">
                            <Checkbox 
                                id={`brand-${brand}`} 
                                checked={brands.includes(brand)}
                                onCheckedChange={() => handleBrandChange(brand)}
                            />
                            <Label htmlFor={`brand-${brand}`} className="font-normal">{brand}</Label>
                        </div>
                    ))}
                </div>
            </div>

            <Button onClick={() => { setPriceRange([0, 150000]); setBrands([]); setSearchTerm(''); }} variant="outline" className="w-full">
                Clear Filters
            </Button>
        </aside>

        <main>
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search in this category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 py-3 text-base"
              />
            </div>
          </div>
          
          {loading ? (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="space-y-2">
                        <Skeleton className="h-48 w-full" />
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                    </div>
                ))}
             </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No products found matching your criteria.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
