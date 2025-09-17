
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getImage } from '@/lib/placeholder-images';


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

export function FeaturedCategories() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="flex">
        <div className="w-full lg:w-3/4 bg-yellow-300 p-8 lg:p-12 relative">
            <div className="absolute top-0 left-0 w-full h-16 bg-white" style={{ clipPath: 'url(#wavy-clip-path)' }}></div>
            <svg width="0" height="0">
                <defs>
                    <clipPath id="wavy-clip-path" clipPathUnits="objectBoundingBox">
                        <path d="M0,0.5 Q0.05,0, 0.1,0.5 T0.2,0.5 Q0.25,0, 0.3,0.5 T0.4,0.5 Q0.45,0, 0.5,0.5 T0.6,0.5 Q0.65,0, 0.7,0.5 T0.8,0.5 Q0.85,0, 0.9,0.5 T1,0.5 V0 H0 Z" />
                    </clipPath>
                </defs>
            </svg>
          
          <div className="relative overflow-hidden group h-full">
            <div className="flex animate-scroll group-hover:pause">
              {[...categories, ...categories].map((category, index) => (
                <div key={index} className="flex-shrink-0 mx-4 text-center w-48">
                  <div className="relative h-64 w-full mb-4">
                    <Image
                      src={category.image}
                      alt={category.name}
                      data-ai-hint={category.hint}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <Link href={category.href}>
                    <span className="inline-block bg-white px-4 py-2 text-black font-semibold shadow-md hover:bg-gray-200 transition-colors">
                      {category.name}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:flex w-1/4 bg-black text-white flex-col justify-center items-start p-12">
          <h2 className="text-4xl font-bold tracking-widest leading-tight">FEATURED<br/>CATEGORIES</h2>
          <p className="mt-4 text-gray-400">Discover the most trending products in Amtech.</p>
          <div className="mt-8 flex gap-4">
            <Button variant="outline" size="icon" className="bg-transparent text-white border-white hover:bg-white hover:text-black">
              <ArrowLeft />
            </Button>
            <Button variant="outline" size="icon" className="bg-transparent text-white border-white hover:bg-white hover:text-black">
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
