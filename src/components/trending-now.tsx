
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getImage } from '@/lib/placeholder-images';

const trendingProducts = [
  {
    name: 'Plus-Size Womens Workout Set',
    href: '/wholesale/running-fitness/women-running-fitness',
    image: getImage('women_running_1').url,
    hint: getImage('women_running_1').hint,
  },
  {
    name: 'Plus-Size Mens Smart Casual Wear',
    href: '/wholesale/men/men-shirts',
    image: getImage('men_shirt_1').url,
    hint: getImage('men_shirt_1').hint,
  },
  {
    name: 'Multi Color Plus-Size Maxi Dress',
    href: '/wholesale/women/women-dress',
    image: getImage('dress1').url,
    hint: getImage('dress1').hint,
  },
  {
    name: 'Plus-Size Mens Casual Wear',
    href: '/wholesale/men/men-pants',
    image: getImage('men_pants_3').url,
    hint: getImage('men_pants_3').hint,
  },
];

export function TrendingNow() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-2">
              TRENDING NOW
            </h2>
            <Link href="/wholesale" className="text-muted-foreground hover:text-primary underline">
              Shop All
            </Link>
            <div className="grid grid-cols-2 gap-6 mt-8">
              {trendingProducts.map((product) => (
                <Link href={product.href} key={product.name} className="group">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      data-ai-hint={product.hint}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <p className="mt-2 text-sm text-center font-medium text-primary">
                    {product.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div className="relative h-[60vh] md:h-[80vh] hidden lg:block">
            <div
              className="absolute inset-0 bg-gray-200 rounded-r-3xl overflow-hidden"
              style={{
                clipPath: 'url(#wavy-edge)',
              }}
            >
              <Image
                src="https://picsum.photos/seed/trending-right-1/800/1200"
                alt="Fashion model in red dress"
                fill
                className="object-cover"
                sizes="50vw"
                data-ai-hint="woman red dress"
              />
               <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent"></div>
               <div className="absolute top-0 right-0 h-full w-1/2">
                <div className="relative h-full w-full">
                    <Image 
                        src="https://picsum.photos/seed/trending-right-2/800/1200"
                        alt="Fashion model in green dress"
                        fill
                        className="object-cover"
                        sizes="25vw"
                        data-ai-hint="woman green dress"
                    />
                </div>
               </div>
                <div className="absolute bottom-10 -right-8 transform -rotate-90 bg-black text-white px-3 py-1 rounded-t-md">
                    <p className="text-sm font-semibold tracking-wider">GET 40% OFF ON WHOLESALE</p>
                </div>
            </div>
            <svg width="0" height="0">
              <defs>
                <clipPath id="wavy-edge" clipPathUnits="objectBoundingBox">
                  <path d="M0,0 H1 V1 H0 C0.05,0.9, 0.03,0.8, 0,0.7 C0.03,0.6, 0.05,0.5, 0,0.4 C0.05,0.3, 0.03,0.2, 0,0.1 V0 Z" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
