
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getImage } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function ManufacturersPage() {
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
          <h1 className="text-5xl font-bold mb-2 font-serif">Manufacturers</h1>
          <p className="text-lg">Home / Manufacturers</p>
        </div>
      </section>
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-primary text-center">Our Manufacturing Partners</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground text-center">
            <p>
              We partner with the world's leading manufacturers to bring you top-tier components and products. Our partners are selected through a rigorous process to ensure they meet our high standards of quality, innovation, and ethical practices.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
