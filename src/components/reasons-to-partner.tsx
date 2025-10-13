'use client';

import Image from 'next/image';

// Correct image imports
import time from "../../public/images/popular/time.jpg";
import tech from "../../public/images/popular/tech.jpg";
import moq from "../../public/images/popular/moq.jpg";
import support from "../../public/images/popular/support.jpg";

const reasons = [
  {
    title: 'FAST TURNAROUND TIME',
    description:
      'The moment you place your bulk order from us, we get started and can deliver your order timely or sooner than expected. We hate delays!',
    image: {
      src: time,
      alt: 'Warehouse with boxes stacked high',
      hint: 'warehouse boxes',
    },
  },
  {
    title: 'ACHIEVABLE MOQ',
    description:
      'With a low MOQ, we let you experiment with your stock, get your business stock planning right. Bulk order stock that gives you real value for money.',
    image: {
      src: moq,
      alt: 'Small business owner managing clothing stock',
      hint: 'woman clothing rack',
    },
  },
  {
    title: 'PROFESSIONAL SUPPORT',
    description:
      'Whether you need help choosing the best materials, require some custom design tips or need assistance to solve any kind of stock sourcing issues, our expert team is here to guide you at every step of your journey.',
    image: {
      src: support,
      alt: 'Fashion designer working in a studio',
      hint: 'man tailor',
    },
  },
  {
    title: 'ADVANCED TECHNOLOGY',
    description:
      'We make use of different design techniques including screen printing, embroidery, sublimation and more to meet your unique custom requirements, seamlessly.',
    image: {
      src: tech,
      alt: 'Automated embroidery machines in a factory',
      hint: 'embroidery machine',
    },
  },
];

export function ReasonsToPartner() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
            REASONS TO PARTNER WITH US
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our ultimate aim is to establish a solid business relationship with you. When you join hands with us, you will be amazed for sure!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center">
              <div className="relative aspect-[4/3] w-full mb-4 rounded-lg overflow-hidden">
                <Image
                  src={reason.image.src}
                  alt={reason.image.alt}
                  data-ai-hint={reason.image.hint}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-lg font-serif font-semibold text-primary mb-2 tracking-wider">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
