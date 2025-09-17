import type { Product } from './types';
import { placeholderImages } from './placeholder-images';

const getImage = (id: string) => {
  const image = placeholderImages.find(img => img.id === id);
  return {
    url: image?.imageUrl ?? `https://picsum.photos/seed/default/600/400`,
    hint: image?.imageHint ?? 'placeholder'
  }
}

export const allProducts: Product[] = [
  {
    id: 'bag_001',
    name: 'Chocolaty Travel Bag',
    description: 'A stylish and durable travel bag.',
    longDescription: 'A stylish and durable travel bag perfect for weekend getaways.',
    price: 120.00,
    image: getImage('bag1').url,
    imageHint: getImage('bag1').hint,
  },
  {
    id: 'bag_002',
    name: 'Classy Brown Handbag',
    description: 'An elegant brown handbag for everyday use.',
    longDescription: 'An elegant brown handbag for everyday use, crafted from premium leather.',
    price: 85.00,
    image: getImage('bag2').url,
    imageHint: getImage('bag2').hint,
  },
  {
    id: 'bag_003',
    name: 'Ethnic Print White Tote',
    description: 'A beautiful white tote bag with an ethnic print.',
    longDescription: 'A beautiful white tote bag with an ethnic print, spacious and fashionable.',
    price: 65.00,
    image: getImage('bag3').url,
    imageHint: getImage('bag3').hint,
  },
  {
    id: 'bag_004',
    name: 'Crisp White And Blue Sling Bag',
    description: 'A chic sling bag in white and blue.',
    longDescription: 'A chic sling bag in white and blue, perfect for a day out.',
    price: 55.00,
    image: getImage('bag4').url,
    imageHint: getImage('bag4').hint,
  },
  {
    id: 'bag_005',
    name: 'Tan Brown Textured Bag',
    description: 'A textured tan brown bag with a classic look.',
    longDescription: 'A textured tan brown bag with a classic look, versatile for any occasion.',
    price: 95.00,
    image: getImage('bag5').url,
    imageHint: getImage('bag5').hint,
  },
  {
    id: 'bag_006',
    name: 'Chic Gray Cicular Bag',
    description: 'A unique circular bag in a chic gray color.',
    longDescription: 'A unique circular bag in a chic gray color, a true statement piece.',
    price: 75.00,
    image: getImage('bag6').url,
    imageHint: getImage('bag6').hint,
  },
  {
    id: 'bag_007',
    name: 'Embellished Black Sling Bag',
    description: 'A black sling bag with beautiful embellishments.',
    longDescription: 'A black sling bag with beautiful embellishments, perfect for evenings.',
    price: 80.00,
    image: getImage('bag7').url,
    imageHint: getImage('bag7').hint,
  },
  {
    id: 'bag_008',
    name: 'Futuristic Silver Handbag',
    description: 'A handbag with a futuristic silver design.',
    longDescription: 'A handbag with a futuristic silver design, for a bold fashion statement.',
    price: 110.00,
    image: getImage('bag8').url,
    imageHint: getImage('bag8').hint,
  },
    {
    id: 'bag_009',
    name: 'Classic Bag Sports Bag',
    description: 'A classic sports bag for all your gear.',
    longDescription: 'A classic sports bag for all your gear, spacious and durable.',
    price: 70.00,
    image: getImage('bag9').url,
    imageHint: getImage('bag9').hint,
  },
  {
    id: 'bag_010',
    name: 'Cool Black and Pink Gym Bag',
    description: 'A stylish gym bag in black and pink.',
    longDescription: 'A stylish gym bag in black and pink, combining fashion and function.',
    price: 60.00,
    image: getImage('bag10').url,
    imageHint: getImage('bag10').hint,
  },
  {
    id: 'bag_011',
    name: 'Sleek Green and Black Bag',
    description: 'A sleek bag in green and black.',
    longDescription: 'A sleek bag in green and black, modern and minimalist.',
    price: 78.00,
    image: getImage('bag11').url,
    imageHint: getImage('bag11').hint,
  },
  {
    id: 'bag_012',
    name: 'Black and Metallic Gray Colour Bag',
    description: 'A stylish bag in black and metallic gray.',
    longDescription: 'A stylish bag in black and metallic gray, perfect for a modern look.',
    price: 90.00,
    image: getImage('bag12').url,
    imageHint: getImage('bag12').hint,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(p => p.id === id);
}