'use client';

import { useState, useEffect, use } from 'react';
import { ProductCard } from '@/components/product-card';
import { allProducts } from '@/lib/products';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';

type WholesaleSubCategoryPageProps = {
  params: {
    category: string;
    subcategory: string;
  };
};

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

const subcategoryToPrefixMap: Record<string, string> = {
    'bags': 'bag_',
    'cap': 'cap_',
    'scarf': 'scarf_',
    'sleepwear': 'sleepwear_',
    'socks': 'sock_',
    'towels': 'towel_',
    'white-label-clothing': 'whitelabel_',
    'sublimation': 'sublimation_',
    'women-dress': 'dress_',
    'women-coats': 'coat_',
    'women-jackets': 'jacket_',
    'women-top-wear': 'topwear_',
    'women-leggings': 'leggings_',
    'women-lingerie': 'lingerie_',
    'girls-dresses-collection': 'girls_dress_',
    'infants-0-24-months': 'infant_',
    'little-4-7-yrs': 'little_kid_',
    'toddlers-2-4-yrs': 'toddler_',
    'men-hoody': 'hoodie_',
    'men-jackets': 'men_jacket_',
    'men-pants': 'men_pants_',
    'men-t-shirts': 'men_tshirt_',
    'men-shirts': 'men_shirt_',
    'men-underwear': 'men_underwear_',
    'flipflops': 'flipflop_',
    'formal-shoes': 'formal_shoe_',
    'lifestyle': 'lifestyle_shoe_',
    'running-shoes': 'running_shoe_',
    'new-catalog': 'new_catalog_',
    'new-arrivals': 'new_arrivals_',
    'jumpsuits': 'jumpsuit_',
    'polo-t-shirts': 'polo_t_shirt_',
    'womens-beachwear': 'womens_beachwear_',
    'mens-beachwear': 'mens_beachwear_',
    'activewear': 'activewear_',
    'compression': 'compression_',
    'men-running-fitness': 'men_running_fitness_',
    'women-running-fitness': 'women_running_fitness_',
    'athletics': 'athletics_',
    'basketball': 'basketball_',
    'boxing': 'boxing_',
    'cycling': 'cycling_',
    'dance-wear': 'dancewear_',
    'golf': 'golf_',
    'hockey': 'hockey_',
    'marathons': 'marathon_',
    'tennis': 'tennis_',
    'triathlon': 'triathlon_',
};


const toSlug = (text: string) => text.toLowerCase().replace(/\s+/g, '-');

export default function WholesaleSubCategoryPage({ params }: WholesaleSubCategoryPageProps) {
  const { category, subcategory } = use(params);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const fromTitle = (slug: string) => slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  useEffect(() => {
    try {
      const storedCategories = localStorage.getItem('openCategories');
      if (storedCategories) {
        setOpenCategories(JSON.parse(storedCategories));
      } else if (category) {
        const currentCategoryTitle = fromTitle(category);
        setOpenCategories([currentCategoryTitle]);
      }
    } catch (error) {
      console.error('Failed to parse open categories from localStorage', error);
      if (category) {
        const currentCategoryTitle = fromTitle(category);
        setOpenCategories([currentCategoryTitle]);
      }
    }
  }, [category]);
  
  useEffect(() => {
    try {
        localStorage.setItem('openCategories', JSON.stringify(openCategories));
    } catch (error) {
        console.error('Failed to save open categories to localStorage', error);
    }
  }, [openCategories]);

  const pageTitle = fromTitle(subcategory);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      
      const searchPrefix = subcategoryToPrefixMap[subcategory] ?? subcategory.replace(/-/g, '_');

      const filtered = allProducts.filter(p => 
        p.id.toLowerCase().startsWith(searchPrefix)
      );

      setProducts(filtered);
      setLoading(false);
    };
    if (subcategory) {
        fetchProducts();
    }
  }, [subcategory]);

  const handleAccordionChange = (value: string[]) => {
    setOpenCategories(value);
  };


  return (
    <div>
        <div className="relative h-64 bg-gray-200">
            <Image 
                src="https://picsum.photos/seed/cityscape/1200/400"
                alt={pageTitle}
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start p-12">
                <h1 className="text-5xl font-bold text-white">{pageTitle}</h1>
                <p className="text-white">Home / {category ? fromTitle(category) : ''} / {pageTitle}</p>
            </div>
        </div>

      <div className="container mx-auto px-4 py-12 grid md:grid-cols-[300px_1fr] gap-12">
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
                                            <Link href={`/wholesale/${toSlug(cat)}/${toSlug(subcat)}`} className="text-muted-foreground hover:text-primary w-full text-sm">
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

            <div className="p-4 border text-center">
                <h4 className="font-semibold">Design is the silent ambassador of your brand.</h4>
                <Button variant="default" className="mt-4 bg-black text-white hover:bg-gray-800">Redden With A Text</Button>
            </div>
            
            <div className="p-4 border">
                <h3 className="font-bold mb-4">Get In Touch</h3>
                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <Input placeholder="Name" />
                        <Input placeholder="Email" />
                    </div>
                     <div className="grid grid-cols-2 gap-4">
                        <Input placeholder="Quantity" />
                        <Input placeholder="Country" />
                    </div>
                    <Textarea placeholder="Message" />
                    <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">Submit</Button>
                </form>
            </div>
        </aside>

        <main>
          <h2 className="text-2xl font-bold mb-6 text-center">NEW ARRIVAL</h2>
          
          {loading ? (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <p>Loading...</p>
             </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No products found for "{pageTitle}".</p>
            </div>
          )}

          <div className="flex justify-center mt-8">
             <nav aria-label="Page navigation">
                <ul className="inline-flex items-center -space-x-px">
                    <li>
                        <a href="#" className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">1</a>
                    </li>
                    <li>
                        <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
                    </li>
                    <li>
                        <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">&rarr;</a>
                    </li>
                </ul>
            </nav>
          </div>
        </main>
      </div>
    </div>
  );
}
