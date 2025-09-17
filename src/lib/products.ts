import type { Product } from './types';
import { placeholderImages } from './placeholder-images';

const getImage = (id: string, seed: string) => {
  const image = placeholderImages.find(img => img.id === id);
  return {
    url: image?.imageUrl ?? `https://picsum.photos/seed/${seed}/600/400`,
    hint: image?.imageHint ?? 'placeholder'
  }
}

export const allProducts: Product[] = [
  // Bags (12)
  {
    id: 'bag_001',
    name: 'Chocolaty Travel Bag',
    description: 'A stylish and durable travel bag.',
    longDescription: 'A stylish and durable travel bag perfect for weekend getaways.',
    price: 120.00,
    image: getImage('bag1', 'bag1').url,
    imageHint: getImage('bag1', 'bag1').hint,
  },
  {
    id: 'bag_002',
    name: 'Classy Brown Handbag',
    description: 'An elegant brown handbag for everyday use.',
    longDescription: 'An elegant brown handbag for everyday use, crafted from premium leather.',
    price: 85.00,
    image: getImage('bag2', 'bag2').url,
    imageHint: getImage('bag2', 'bag2').hint,
  },
  {
    id: 'bag_003',
    name: 'Ethnic Print White Tote',
    description: 'A beautiful white tote bag with an ethnic print.',
    longDescription: 'A beautiful white tote bag with an ethnic print, spacious and fashionable.',
    price: 65.00,
    image: getImage('bag3', 'bag3').url,
    imageHint: getImage('bag3', 'bag3').hint,
  },
  {
    id: 'bag_004',
    name: 'Crisp White And Blue Sling Bag',
    description: 'A chic sling bag in white and blue.',
    longDescription: 'A chic sling bag in white and blue, perfect for a day out.',
    price: 55.00,
    image: getImage('bag4', 'bag4').url,
    imageHint: getImage('bag4', 'bag4').hint,
  },
  {
    id: 'bag_005',
    name: 'Tan Brown Textured Bag',
    description: 'A textured tan brown bag with a classic look.',
    longDescription: 'A textured tan brown bag with a classic look, versatile for any occasion.',
    price: 95.00,
    image: getImage('bag5', 'bag5').url,
    imageHint: getImage('bag5', 'bag5').hint,
  },
  {
    id: 'bag_006',
    name: 'Chic Gray Cicular Bag',
    description: 'A unique circular bag in a chic gray color.',
    longDescription: 'A unique circular bag in a chic gray color, a true statement piece.',
    price: 75.00,
    image: getImage('bag6', 'bag6').url,
    imageHint: getImage('bag6', 'bag6').hint,
  },
  {
    id: 'bag_007',
    name: 'Embellished Black Sling Bag',
    description: 'A black sling bag with beautiful embellishments.',
    longDescription: 'A black sling bag with beautiful embellishments, perfect for evenings.',
    price: 80.00,
    image: getImage('bag7', 'bag7').url,
    imageHint: getImage('bag7', 'bag7').hint,
  },
  {
    id: 'bag_008',
    name: 'Futuristic Silver Handbag',
    description: 'A handbag with a futuristic silver design.',
    longDescription: 'A handbag with a futuristic silver design, for a bold fashion statement.',
    price: 110.00,
    image: getImage('bag8', 'bag8').url,
    imageHint: getImage('bag8', 'bag8').hint,
  },
    {
    id: 'bag_009',
    name: 'Classic Bag Sports Bag',
    description: 'A classic sports bag for all your gear.',
    longDescription: 'A classic sports bag for all your gear, spacious and durable.',
    price: 70.00,
    image: getImage('bag9', 'bag9').url,
    imageHint: getImage('bag9', 'bag9').hint,
  },
  {
    id: 'bag_010',
    name: 'Cool Black and Pink Gym Bag',
    description: 'A stylish gym bag in black and pink.',
    longDescription: 'A stylish gym bag in black and pink, combining fashion and function.',
    price: 60.00,
    image: getImage('bag10', 'bag10').url,
    imageHint: getImage('bag10', 'bag10').hint,
  },
  {
    id: 'bag_011',
    name: 'Sleek Green and Black Bag',
    description: 'A sleek bag in green and black.',
    longDescription: 'A sleek bag in green and black, modern and minimalist.',
    price: 78.00,
    image: getImage('bag11', 'bag11').url,
    imageHint: getImage('bag11', 'bag11').hint,
  },
  {
    id: 'bag_012',
    name: 'Black and Metallic Gray Colour Bag',
    description: 'A stylish bag in black and metallic gray.',
    longDescription: 'A stylish bag in black and metallic gray, perfect for a modern look.',
    price: 90.00,
    image: getImage('bag12', 'bag12').url,
    imageHint: getImage('bag12', 'bag12').hint,
  },

  // Caps (5)
  {
    id: 'cap_001',
    name: 'Classic Baseball Cap',
    description: 'A timeless baseball cap for any casual occasion.',
    longDescription: 'Made from 100% cotton, this adjustable baseball cap offers comfort and style.',
    price: 25.00,
    image: getImage('cap1', 'cap1').url,
    imageHint: getImage('cap1', 'cap1').hint,
  },
  {
    id: 'cap_002',
    name: 'Wool Beanie',
    description: 'Stay warm with this soft wool beanie.',
    longDescription: 'A soft, comfortable wool beanie, perfect for cold weather. One size fits all.',
    price: 30.00,
    image: getImage('cap2', 'cap2').url,
    imageHint: getImage('cap2', 'cap2').hint,
  },
  {
    id: 'cap_003',
    name: 'Snapback Hat',
    description: 'A stylish snapback with a flat brim.',
    longDescription: 'This snapback hat features a modern design with an adjustable strap for a perfect fit.',
    price: 35.00,
    image: getImage('cap3', 'cap3').url,
    imageHint: getImage('cap3', 'cap3').hint,
  },
  {
    id: 'cap_004',
    name: 'Bucket Hat',
    description: 'A trendy bucket hat for sun protection.',
    longDescription: 'A lightweight and breathable bucket hat, ideal for sunny days and outdoor activities.',
    price: 28.00,
    image: getImage('cap4', 'cap4').url,
    imageHint: getImage('cap4', 'cap4').hint,
  },
  {
    id: 'cap_005',
    name: 'Trucker Hat',
    description: 'A classic trucker hat with a mesh back.',
    longDescription: 'This trucker hat offers a vintage look with a breathable mesh back for added comfort.',
    price: 22.00,
    image: getImage('cap5', 'cap5').url,
    imageHint: getImage('cap5', 'cap5').hint,
  },

  // T-Shirts (5)
  {
    id: 'tshirt_001',
    name: 'Men\'s Crewneck T-Shirt',
    description: 'A basic essential for any wardrobe.',
    longDescription: 'Crafted from soft, breathable cotton, this crewneck T-shirt offers a classic fit for everyday comfort.',
    price: 20.00,
    image: getImage('tshirt1', 'tshirt1').url,
    imageHint: getImage('tshirt1', 'tshirt1').hint,
  },
  {
    id: 'tshirt_002',
    name: 'Women\'s V-Neck T-Shirt',
    description: 'A flattering V-neck cut.',
    longDescription: 'This V-neck T-shirt is made from a soft cotton blend, providing a stylish and comfortable fit.',
    price: 22.00,
    image: getImage('tshirt2', 'tshirt2').url,
    imageHint: getImage('tshirt2', 'tshirt2').hint,
  },
  {
    id: 'tshirt_003',
    name: 'Graphic Print T-Shirt',
    description: 'A bold graphic print to make a statement.',
    longDescription: 'Featuring a unique graphic print, this T-shirt is perfect for adding a touch of personality to your look.',
    price: 28.00,
    image: getImage('tshirt3', 'tshirt3').url,
    imageHint: getImage('tshirt3', 'tshirt3').hint,
  },
  {
    id: 'tshirt_004',
    name: 'Polo T-Shirt',
    description: 'A classic polo for a smart-casual look.',
    longDescription: 'This polo T-shirt is made from high-quality piqué cotton, offering a refined yet comfortable style.',
    price: 45.00,
    image: getImage('tshirt4', 'tshirt4').url,
    imageHint: getImage('tshirt4', 'tshirt4').hint,
  },
  {
    id: 'tshirt_005',
    name: 'Long-Sleeve T-Shirt',
    description: 'Perfect for layering in cooler weather.',
    longDescription: 'This long-sleeve T-shirt is made from a soft and warm cotton fabric, ideal for transitional seasons.',
    price: 30.00,
    image: getImage('tshirt5', 'tshirt5').url,
    imageHint: getImage('tshirt5', 'tshirt5').hint,
  }
];

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(p => p.id === id);
}
