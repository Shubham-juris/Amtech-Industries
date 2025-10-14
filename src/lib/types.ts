import type { StaticImageData } from 'next/image';

export type Product = {
  id: string;
  name: string;
  price: number;
  image: StaticImageData; // important for imported images
};
