'use client';

import { useState, useEffect } from 'react';
import { getImage } from '@/lib/placeholder-images';
import Image from 'next/image';
import { allProducts } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollAnimation } from '@/components/scroll-animation';

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
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;
  
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
  
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  }

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 4;
    
    if (totalPages <= maxPagesToShow + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let startPage, endPage;
      if (currentPage <= maxPagesToShow -1) {
        startPage = 1;
        endPage = maxPagesToShow;
        pageNumbers.push(...Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i));
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - (maxPagesToShow - 2)) {
        startPage = totalPages - maxPagesToShow + 1;
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = startPage; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers.map((number, index) =>
      typeof number === 'string' ? (
        <span key={`ellipsis-${index}`} className="px-3 py-1">
          {number}
        </span>
      ) : (
        <Button
          key={number}
          onClick={() => handlePageChange(number)}
          variant={currentPage === number ? 'default' : 'outline'}
          className="mx-1"
        >
          {number}
        </Button>
      )
    );
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
          <ScrollAnimation>
            <h1 className="text-5xl font-bold mb-2 font-serif">Our Products</h1>
            <p className="text-lg">Home / Manufacturers</p>
          </ScrollAnimation>
        </div>
      </section>
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-[300px_1fr] gap-12">
        <aside className="space-y-8">
          <ScrollAnimation>
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
            </ScrollAnimation>
        </aside>
        <main>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProducts.map((product, index) => (
                <ScrollAnimation key={product.id} delay={index * 0.05}>
                    <ProductCard product={product} />
                </ScrollAnimation>
            ))}
            </div>
            <ScrollAnimation>
                <div className="flex justify-center items-center mt-12">
                    <Button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} variant="outline">
                        <ChevronLeft className="h-4 w-4" />
                        <span className="ml-2">Previous</span>
                    </Button>
                    <div className="mx-4 flex items-center">
                        {renderPageNumbers()}
                    </div>
                    <Button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} variant="outline">
                        <span className="mr-2">Next</span>
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </ScrollAnimation>
        </main>
      </div>
    </div>
  );
}
