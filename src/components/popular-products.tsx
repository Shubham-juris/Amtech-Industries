'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProductCard } from './product-card';
import { Button } from './ui/button';
import Link from 'next/link';
import type { Product } from '@/lib/types';

// ✅ Use public URLs instead of imports
const allProducts: Product[] = [
  { id: 'toddler_003', name: 'Toddler Outfit', price: 39.99, image: '/images/popular/smalldress.jpg' },
  { id: 'dress_002', name: 'Floral Dress', price: 49.99, image: '/images/popular/smalldress.jpg' },
  { id: 'men_pants_002', name: 'Men’s Pants', price: 59.99, image: '/images/popular/smalldress.jpg' },
  { id: 'coat_003', name: 'Winter Coat', price: 89.99, image: '/images/popular/smalldress.jpg' },
  { id: 'coat_001', name: 'Classic Coat', price: 79.99, image: '/images/popular/smalldress.jpg' },
  { id: 'men_shirt_002', name: 'Formal Shirt', price: 39.99, image: '/images/popular/smalldress.jpg' },
  { id: 'jacket_003', name: 'Sport Jacket', price: 69.99, image: '/images/popular/smalldress.jpg' },
  { id: 'men_jacket_001', name: 'Men’s Leather Jacket', price: 99.99, image: '/images/popular/smalldress.jpg' },
];

const categories = {
  All: allProducts,
  Accessories: [allProducts[0], allProducts[1]],
  'Custom Clothing': [allProducts[2], allProducts[3]],
  Footwear: [allProducts[4], allProducts[5]],
  Kids: [allProducts[0], allProducts[1]],
  Men: [allProducts[2], allProducts[6], allProducts[7]],
  'Running Fitness': [allProducts[6], allProducts[3]],
  Sports: [allProducts[3], allProducts[6]],
  Women: [allProducts[1], allProducts[4]],
};

const popularProductIds = [
  'toddler_003',
  'dress_002',
  'men_pants_002',
  'coat_003',
  'coat_001',
  'men_shirt_002',
  'jacket_003',
  'men_jacket_001',
];

export function PopularProducts() {
  const [activeTab, setActiveTab] = useState('All');

  const popularProducts = allProducts.filter((p) =>
    popularProductIds.includes(p.id)
  );

  const getProductsForCategory = (category: string): Product[] => {
    if (category === 'All') {
      return popularProducts;
    }
    const products = categories[category as keyof typeof categories] || [];
    return products.slice(0, 8);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-primary">
            MOST POPULAR PRODUCTS
          </h2>
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
          <Button
            asChild
            variant="default"
            size="lg"
            className="bg-black text-white hover:bg-gray-800"
          >
            <Link href="/wholesale">View All</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
