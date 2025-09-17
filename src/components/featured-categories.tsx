
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getImage } from '@/lib/placeholder-images';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
const ITEMS_TO_SHOW = 4;

export function FeaturedCategories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  // Extend the array to create a seamless loop effect
  const extendedCategories = [...categories, ...categories.slice(0, ITEMS_TO_SHOW)];

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % categories.length);
    }, TICKER_INTERVAL);

    return () => clearInterval(interval);
  }, [isHovered]);
  
  const Wave = () => (
    <svg className="absolute top-0 left-0 w-full h-auto" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 24C240 40 480 8 720 24S1200 8 1440 24V0H0V24Z" fill="white"/>
    </svg>
  );

  return (
    <section 
      className="relative grid grid-cols-1 lg:grid-cols-4 bg-[#FFFAE6] text-black" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
        <Wave />
      <div className="lg:col-span-3 py-20 overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / ITEMS_TO_SHOW)}%)` }}
        >
          {extendedCategories.map((category, index) => (
            <div key={index} className="px-4 shrink-0 text-center" style={{ flexBasis: `${100 / ITEMS_TO_SHOW}%` }}>
              <Link href={category.href} className="group">
                <div className="relative aspect-square mb-4">
                  <Image
                    src={category.image}
                    alt={category.name}
                    data-ai-hint={category.hint}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
                <span className="inline-block bg-white px-6 py-2 text-md font-semibold shadow-md">
                    {category.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black text-white flex flex-col justify-center items-center text-center p-8 lg:p-16">
        <h2 className="font-serif text-4xl font-bold mb-4">FEATURED<br/>CATEGORIES</h2>
        <p className="text-xl text-neutral-300 mb-8 max-w-xs">Discover the most trending products in Amtech.</p>
        <div className="flex items-center gap-4">
            <button className="border border-white/50 rounded-full p-2 hover:bg-white/10 transition-colors">
                <ChevronLeft className="h-6 w-6"/>
            </button>
             <button className="border border-white/50 rounded-full p-2 hover:bg-white/10 transition-colors">
                <ChevronRight className="h-6 w-6"/>
            </button>
        </div>
      </div>
    </section>
  );
}
