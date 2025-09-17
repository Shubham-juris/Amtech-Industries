'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProductCard } from './product-card';
import { allProducts } from '@/lib/products';
import { Button } from './ui/button';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { accessoriesProducts } from '@/lib/data/accessories';
import { customClothingProducts } from '@/lib/data/custom-clothing';
import { footwearProducts } from '@/lib/data/footwear';
import { kidsApparelProducts } from '@/lib/data/kids-apparel';
import { menApparelProducts } from '@/lib/data/men-apparel';
import { runningFitnessProducts } from '@/lib/data/running-fitness';
import { sportsProducts } from '@/lib/data/sports';
import { womenApparelProducts } from '@/lib/data/women-apparel';

const categories = {
  All: allProducts,
  Accessories: accessoriesProducts,
  'Custom Clothing': customClothingProducts,
  Footwear: footwearProducts,
  Kids: kidsApparelProducts,
  Men: menApparelProducts,
  'Running Fitness': runningFitnessProducts,
  Sports: sportsProducts,
  Women: womenApparelProducts,
};

const popularProductIds = [
    'toddler_003', 'dress_002', 'men_pants_2', 'coat_003',
    'coat_001', 'men_shirt_2', 'jacket_003', 'men_jacket_1'
];

export function PopularProducts() {
  const [activeTab, setActiveTab] = useState('All');
  
  const popularProducts = allProducts.filter(p => popularProductIds.includes(p.id));

  const getProductsForCategory = (category: string): Product[] => {
    if (category === 'All') {
      return popularProducts;
    }
    const products = categories[category as keyof typeof categories] || [];
    return products.slice(0, 8);
  };

  const products = getProductsForCategory(activeTab);

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-primary">MOST POPULAR PRODUCTS</h2>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8 flex flex-wrap justify-center h-auto">
            {Object.keys(categories).map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.keys(categories).map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {getProductsForCategory(category).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <div className="text-center mt-12">
            <Button asChild variant="default" size="lg" className="bg-black text-white hover:bg-gray-800">
                <Link href={`/wholesale`}>View All</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
