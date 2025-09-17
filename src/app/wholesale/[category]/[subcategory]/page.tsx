'use client';

import { useState, useEffect } from 'react';
import { ProductCard } from '@/components/product-card';
import { allProducts } from '@/lib/products';
import { Product } from '@/lib/types';
import { getFilteredProductsAction } from '@/app/actions';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function WholesaleSubCategoryPage({
  params,
}: {
  params: { category: string; subcategory: string };
}) {
  const { category, subcategory } = params;
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 150000]);
  const [brands, setBrands] = useState<string[]>([]);

  const fromTitle = (slug: string) => slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const pageTitle = fromTitle(subcategory);

  const productCategories = ['Men', 'Women', 'Kids', 'Running Fitness', 'Custom Clothing', 'Sports', 'Accessories', 'Footwear'];

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      
      const searchKeyword = subcategory.split('-').shift() || '';

      const filtered = allProducts.filter(p => 
        p.id.toLowerCase().startsWith(searchKeyword)
      );

      setProducts(filtered);
      setLoading(false);
    };
    fetchProducts();
  }, [category, subcategory]);


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
                <p className="text-white">Home / {fromTitle(category)} / {pageTitle}</p>
            </div>
        </div>

      <div className="container mx-auto px-4 py-12 grid md:grid-cols-[300px_1fr] gap-12">
        <aside className="space-y-8">
            <div className="p-4 border">
                <h3 className="font-bold mb-4">Product Categories</h3>
                <Accordion type="multiple" defaultValue={['Men', 'Women', 'Kids']} className="w-full">
                    {productCategories.map(cat => (
                        <AccordionItem value={cat} key={cat}>
                             <AccordionTrigger className="font-medium text-sm py-2">{cat}</AccordionTrigger>
                             <AccordionContent>
                                {/* Add sub-category links here if needed */}
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
