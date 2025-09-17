
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getImage } from '@/lib/placeholder-images';
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const categories = [
    { name: 'Lingerie', href: '/wholesale/women/women-lingerie', image: getImage('featured_lingerie').url, hint: getImage('featured_lingerie').hint },
    { name: 'Women Dress', href: '/wholesale/women/women-dress', image: getImage('featured_womendress').url, hint: getImage('featured_womendress').hint },
    { name: 'Women Full Cover-Ups', href: '/wholesale/collection/womens-beachwear', image: getImage('featured_coverups').url, hint: getImage('featured_coverups').hint },
    { name: 'Bags', href: '/wholesale/accessories/bags', image: getImage('featured_bags').url, hint: getImage('featured_bags').hint },
    { name: 'Towels', href: '/wholesale/accessories/towels', image: getImage('featured_towels').url, hint: getImage('featured_towels').hint },
    { name: 'Formal Shoes', href: '/wholesale/footwear/formal-shoes', image: getImage('featured_formalshoes').url, hint: getImage('featured_formalshoes').hint },
    { name: 'Kids', href: '/wholesale/kids/little-4-7-yrs', image: getImage('featured_kids').url, hint: getImage('featured_kids').hint },
    { name: 'Men', href: '/wholesale/men/men-shirts', image: getImage('featured_men').url, hint: getImage('featured_men').hint },
    { name: 'Mens Shirts', href: '/wholesale/men/men-shirts', image: getImage('featured_mensshirts').url, hint: getImage('featured_mensshirts').hint },
    { name: 'Activewear', href: '/wholesale/running-fitness/activewear', image: getImage('featured_activewear').url, hint: getImage('featured_activewear').hint },
    { name: 'Sports', href: '/wholesale/sports/athletics', image: getImage('featured_sports').url, hint: getImage('featured_sports').hint },
    { name: 'Dance Wear', href: '/wholesale/sports/dance-wear', image: getImage('featured_dancewear').url, hint: getImage('featured_dancewear').hint },
    { name: 'Tennis', href: '/wholesale/sports/tennis', image: getImage('featured_tennis').url, hint: getImage('featured_tennis').hint },
];

const TICKER_INTERVAL = 3000;
const ITEMS_TO_SHOW = 5;

export function FeaturedCategories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const extendedCategories = [...categories, ...categories.slice(0, ITEMS_TO_SHOW)];

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        if (prevIndex >= categories.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, TICKER_INTERVAL);

    return () => clearInterval(interval);
  }, [isHovered]);


  return (
    <section className="py-12" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">Featured Categories</h2>
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / ITEMS_TO_SHOW)}%)` }}
          >
            {extendedCategories.map((category, index) => (
              <div key={index} className="p-2 shrink-0" style={{ flexBasis: `${100 / ITEMS_TO_SHOW}%`}}>
                <Card className="overflow-hidden group">
                  <CardContent className="relative flex aspect-square items-center justify-center p-0">
                    <Image
                      src={category.image}
                      alt={category.name}
                      data-ai-hint={category.hint}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Link href={category.href}>
                        <span className="inline-block bg-white/90 text-black px-4 py-2 text-md font-semibold shadow-md hover:bg-white transition-colors text-center">
                          {category.name}
                        </span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
