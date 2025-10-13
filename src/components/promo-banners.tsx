
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import dist from "../../public/images/popular/dist.jpg"

export function PromoBanners() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Become a Distributor Banner */}
          <div className="relative bg-[#FDECF0] rounded-lg overflow-hidden p-8 flex items-center">
            <div className="absolute -left-24 -bottom-24 w-80 h-80">
                 <Image
                    src={dist}
                    alt="Become a Distributor"
                    fill
                    className="object-cover"
                    data-ai-hint="woman shopping"
                 />
            </div>
            <div className="relative z-10 w-full h-full flex items-center justify-end">
                <div className="absolute right-0 w-80 h-80 bg-white/80 backdrop-blur-sm rounded-full"></div>
                <div className="relative text-center p-4">
                    <h2 className="text-3xl font-serif text-black mb-2">BECOME A<br />DISTRIBUTOR</h2>
                    <p className="text-sm text-gray-700 max-w-xs mx-auto mb-4">
                        Work with us as a distributor and make a mark in the industry. Connect now!
                    </p>
                    <Button asChild variant="default" className="bg-black text-white hover:bg-gray-800">
                        <Link href="/contact">Talk To Us</Link>
                    </Button>
                </div>
            </div>
          </div>

          {/* Plus Size Apparel Banner */}
          <div className="relative bg-[#FDBA4D] rounded-lg overflow-hidden p-8 flex items-center">
            <div className="relative z-10 text-black">
              <h2 className="text-3xl font-serif mb-2">PLUS SIZE<br/>APPAREL</h2>
              <p className="text-sm max-w-xs mb-4">
                The coolest designs, hot colors and appealing silhouettes of our plus size collections make each piece trendsetting. Order in bulk now.
              </p>
              <Button asChild variant="default" className="bg-black text-white hover:bg-gray-800">
                <Link href="/wholesale/men">Catalog</Link>
              </Button>
            </div>
            <div className="absolute right-0 bottom-0 h-full w-2/3">
              <Image
                src={dist}
                alt="Plus Size Apparel"
                fill
                className="object-cover object-top"
                data-ai-hint="man plus-size"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
