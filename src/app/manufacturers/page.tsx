
import { getImage } from '@/lib/placeholder-images';
import Image from 'next/image';
import { allProducts } from '@/lib/products';
import { ProductCard } from '@/components/product-card';

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
          <h1 className="text-5xl font-bold mb-2 font-serif">Our Products</h1>
          <p className="text-lg">Home / Manufacturers</p>
        </div>
      </section>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
