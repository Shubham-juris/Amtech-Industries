
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getImage } from '@/lib/placeholder-images';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import * as React from 'react';


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
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
    )

  return (
    <section className="py-12">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">Featured Categories</h2>
            <Carousel 
                plugins={[plugin.current]}
                className="w-full"
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent>
                {categories.map((category, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                    <div className="p-1">
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
                                        <span className="inline-block bg-white/90 text-black px-6 py-2 text-lg font-semibold shadow-md hover:bg-white transition-colors">
                                            {category.name}
                                        </span>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </div>
    </section>
  );
}
