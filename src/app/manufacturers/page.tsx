
'use client';

import { useState, useEffect } from 'react';
import { getImage } from '@/lib/placeholder-images';
import Image from 'next/image';
import { allProducts } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const menuItems = {
    'Accessories': ['Bags', 'Cap', 'Scarf', 'Sleepwear', 'Socks', 'Towels'],
    'Custom Clothing': ['White Label Clothing', 'Sublimation'],
    'Women': ['Women Dress', 'Women Coats', 'Women Jackets', 'Women Top Wear', 'Women Leggings', 'Women Lingerie'],
    'Kids': ['Girls Dresses Collection', 'Infants-0-24-Months', 'Little-4-7-Yrs', 'Toddlers-2-4-Yrs'],
    'Men': ['Men Hoody', 'Men Jackets', 'Men Pants', 'Men T-shirts', 'Men Shirts', 'Men Underwear'],
    'Footwear': ['Flipflops', 'Formal Shoes', 'Lifestyle', 'Running Shoes'],
    'Collection': ['New Catalog', 'New Arrivals', 'Jumpsuits', 'Polo T shirts', 'Womens Beachwear', 'Mens Beachwear'],
    'Running Fitness': ['Activewear', 'Compression', 'Men Running Fitness', 'Women Running Fitness'],
    'Sports': ['Athletics', 'Basketball', 'Boxing', 'Cycling', 'Dance Wear', 'Golf', 'Hockey', 'Marathons', 'Tennis', 'Triathlon'],
};

const toSlug = (text: string) => text.toLowerCase().replace(/\s+/g, '-');

export default function ManufacturersPage() {
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  
  useEffect(() => {
    try {
      const storedCategories = localStorage.getItem('openCategories');
      if (storedCategories) {
        setOpenCategories(JSON.parse(storedCategories));
      }
    } catch (error) {
      console.error('Failed to parse open categories from localStorage', error);
    }
  }, []);
  
  useEffect(() => {
    try {
        localStorage.setItem('openCategories', JSON.stringify(openCategories));
    } catch (error) {
        console.error('Failed to save open categories to localStorage', error);
    }
  }, [openCategories]);

  const handleAccordionChange = (value: string[]) => {
    setOpenCategories(value);
  };

  return (
    <div>
       <section className="relative h-[50vh] flex items-center justify-start text-white">
        <div className="absolute inset-0">
          <Image
            src={getImage('manufacturers_hero').url}
            alt="Three women modeling different outfits"
            data-ai-hint={getImage('manufacturers_hero').hint}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4 z-10">
          <h1 className="text-5xl font-bold mb-2 font-serif">Our Products</h1>
          <p className="text-lg">Home / Manufacturers</p>
        </div>
      </section>
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-[300px_1fr] gap-12">
        <aside className="space-y-8">
            <div className="p-4 border">
                <h3 className="font-bold mb-4 text-lg">Product Categories</h3>
                <Accordion type="multiple" className="w-full" value={openCategories} onValueChange={handleAccordionChange}>
                    {Object.entries(menuItems).map(([cat, subcats]) => (
                        <AccordionItem value={cat} key={cat}>
                             <AccordionTrigger className="font-medium text-sm py-2">{cat}</AccordionTrigger>
                             <AccordionContent>
                                <ul className="flex flex-col gap-2 pl-2">
                                    {subcats.map(subcat => (
                                        <li key={subcat}>
                                            <Link href={`/wholesale/${toSlug(cat)}/${toSlug(subcat)}`} className={cn("hover:text-primary w-full text-sm text-muted-foreground")}>
                                                {subcat}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                             </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </aside>
        <main>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
        </main>
      </div>
    </div>
  );
}
