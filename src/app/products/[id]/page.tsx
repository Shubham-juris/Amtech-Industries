import { getProductById, allProducts } from '@/lib/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ProductDetailsClient } from './_components/product-details-client';
import { RecommendedProducts } from './_components/recommended-products';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollAnimation } from '@/components/scroll-animation';

type ProductPageProps = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <ScrollAnimation>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <div className="relative aspect-square w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  data-ai-hint={product.imageHint}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </CardContent>
          </Card>
          
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary">{product.name}</h1>
              <p className="text-2xl font-semibold text-foreground mt-2">{formatPrice(product.price)}</p>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">{product.longDescription}</p>
            
            <ProductDetailsClient product={product} />

          </div>
        </div>
      </ScrollAnimation>
      
      <ScrollAnimation className="mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">You Might Also Like</h2>
        <RecommendedProducts productId={product.id} />
      </ScrollAnimation>
    </div>
  );
}
