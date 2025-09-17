import type { Product } from './types';
import { placeholderImages } from './placeholder-images';
import { accessoriesProducts } from './data/accessories';
import { customClothingProducts } from './data/custom-clothing';
import { womenApparelProducts } from './data/women-apparel';
import { menApparelProducts } from './data/men-apparel';
import { collectionProducts } from './data/collection';
import { sportsProducts } from './data/sports';
import { kidsApparelProducts } from './data/kids-apparel';
import { footwearProducts } from './data/footwear';
import { runningFitnessProducts } from './data/running-fitness';

export const allProducts: Product[] = [
  ...accessoriesProducts,
  ...customClothingProducts,
  ...womenApparelProducts,
  ...menApparelProducts,
  ...collectionProducts,
  ...sportsProducts,
  ...kidsApparelProducts,
  ...footwearProducts,
  ...runningFitnessProducts,
];

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(p => p.id === id);
}

export const getImage = (id: string, seed: string) => {
  const image = placeholderImages.find(img => img.id === id);
  return {
    url: image?.imageUrl ?? `https://picsum.photos/seed/${seed}/600/400`,
    hint: image?.imageHint ?? 'placeholder'
  }
}
