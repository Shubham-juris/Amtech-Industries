
'use client';

import Image from 'next/image';
import { Scissors, SewingPin, Wind, Check, Package, Shirt } from 'lucide-react';
import { getImage } from '@/lib/placeholder-images';

const manufacturingSteps = [
  {
    icon: <Scissors className="h-8 w-8 text-primary" />,
    title: 'Cutting',
    description: 'Green apparel in all sizes and shapes',
  },
  {
    icon: <Shirt className="h-8 w-8 text-primary" />, // Using Shirt as a proxy for Sewing Machine
    title: 'Sewing',
    description: 'Promising the ultimate longevity of the material',
  },
  {
    icon: <Wind className="h-8 w-8 text-primary" />, // Using Wind as a proxy for Thread Snipping
    title: 'Thread Snipping',
    description: 'A flawless edge with a soft and smooth finish',
  },
  {
    icon: <Check className="h-8 w-8 text-primary" />, // Using Check as a proxy for Iron
    title: 'Ironing',
    description: 'Ironing to make them perfect before shipping',
  },
  {
    icon: <Package className="h-8 w-8 text-primary" />,
    title: 'Package',
    description: 'Folding as well as packing with care',
  },
];

const procedureImages = [
    {
        id: "procedure_cutting",
        hint: "fabric cutting"
    },
    {
        id: "procedure_sewing",
        hint: "sewing machine"
    },
    {
        id: "procedure_dyeing",
        hint: "fabric dyeing"
    },
    {
        id: "procedure_checking",
        hint: "seam checking"
    }
];

export function ManufacturingProcedure() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold text-primary tracking-wider relative">
              OUR APPAREL
              <br />
              MANUFACTURING
              <br />
              PROCEDURE
              <svg className="absolute top-0 right-0 h-8 w-auto text-primary" viewBox="0 0 100 20">
                  <path d="M0 10 C 20 0, 80 0, 100 10" stroke="currentColor" fill="transparent" strokeWidth="2"/>
              </svg>
            </h2>
            <p className="text-muted-foreground max-w-md">
              The premium clothing that we deliver to our customers all around the world goes through several steps of manufacturing. It's dyeing, cutting, sewing, thread snipping, ironing, checking and then packaging.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {procedureImages.map((img) => (
                 <div key={img.id} className="relative aspect-square w-full rounded-lg overflow-hidden">
                    <Image
                      src={getImage(img.id).url}
                      alt={getImage(img.id).hint}
                      data-ai-hint={getImage(img.id).hint}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column */}
          <div className="relative pl-8">
            <div className="absolute top-0 left-0 h-full w-px bg-border"></div>
            <div className="space-y-6">
              {manufacturingSteps.map((step, index) => (
                <div key={index} className="bg-muted/50 p-6 rounded-lg shadow-sm flex items-start gap-6">
                  <div className="flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
