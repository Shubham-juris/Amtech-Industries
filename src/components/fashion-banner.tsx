
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

export function FashionBanner() {
  return (
    <section className="bg-muted">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="relative text-center md:text-left py-16 px-8">
            <h2
              className="absolute inset-0 flex items-center justify-center text-[10rem] font-extrabold text-foreground/5 pointer-events-none -mt-8"
              aria-hidden="true"
            >
              AMTECH
            </h2>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">
                STEP INTO OUR WORLD OF FASHION
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto md:mx-0">
                Providing a breathtaking collection of timeless classics, the latest pieces, must-grab accessories, and more, we let your store's collection/retail stock remain viable to your customers.
              </p>
              <Button asChild className="mt-6 bg-black text-white hover:bg-gray-800" size="lg">
                <Link href="/contact">Inquire Now</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-80 md:h-full min-h-[300px]">
            <Image
              src="https://picsum.photos/seed/fashion-man/800/800"
              alt="Fashion model"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              data-ai-hint="man fashion"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
