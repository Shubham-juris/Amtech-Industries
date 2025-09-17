import type { Product } from './types';
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
