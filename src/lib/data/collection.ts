import type { Product } from '../types';
import { getImage } from '../products';

export const collectionProducts: Product[] = [
  // Collection - Jumpsuits
  {
    id: 'jumpsuit_001',
    name: 'Denim Jumpsuit',
    description: 'A stylish and versatile denim jumpsuit.',
    longDescription: 'This denim jumpsuit features a modern cut and is perfect for a chic, all-in-one outfit.',
    price: 110.00,
    image: getImage('jumpsuit1', 'jumpsuit1').url,
    imageHint: getImage('jumpsuit1', 'jumpsuit1').hint,
  },
  {
    id: 'jumpsuit_002',
    name: 'Elegant Black Jumpsuit',
    description: 'A sophisticated black jumpsuit for any occasion.',
    longDescription: 'This elegant black jumpsuit is a perfect alternative to a dress for formal events.',
    price: 130.00,
    image: getImage('jumpsuit2', 'jumpsuit2').url,
    imageHint: getImage('jumpsuit2', 'jumpsuit2').hint,
  },
  {
    id: 'jumpsuit_003',
    name: 'Floral Print Jumpsuit',
    description: 'A casual and fun floral print jumpsuit.',
    longDescription: 'This floral jumpsuit is made from a lightweight fabric, ideal for warm weather and a relaxed vibe.',
    price: 90.00,
    image: getImage('jumpsuit3', 'jumpsuit3').url,
    imageHint: getImage('jumpsuit3', 'jumpsuit3').hint,
  },

  // Collection - Polo T-shirts
  {
    id: 'polo_t_shirt_001',
    name: 'Classic Navy Polo',
    description: 'A timeless navy blue polo t-shirt.',
    longDescription: 'This classic polo is made from breathable cotton piqué, perfect for a smart-casual look.',
    price: 50.00,
    image: getImage('polo1', 'polo1').url,
    imageHint: getImage('polo1', 'polo1').hint,
  },
  {
    id: 'polo_t_shirt_002',
    name: 'Bright Red Polo',
    description: 'A vibrant red polo t-shirt.',
    longDescription: 'Make a statement with this bright red polo, crafted for a comfortable and stylish fit.',
    price: 52.00,
    image: getImage('polo2', 'polo2').url,
    imageHint: getImage('polo2', 'polo2').hint,
  },
  {
    id: 'polo_t_shirt_003',
    name: 'Striped Polo Shirt',
    description: 'A modern striped polo t-shirt.',
    longDescription: 'This striped polo adds a contemporary twist to a classic design, perfect for any casual occasion.',
    price: 55.00,
    image: getImage('polo3', 'polo3').url,
    imageHint: getImage('polo3', 'polo3').hint,
  },

  // Collection - Womens Beachwear
  {
    id: 'womens_beachwear_001',
    name: 'One-Piece Swimsuit',
    description: 'A vibrant and stylish one-piece swimsuit.',
    longDescription: 'This one-piece swimsuit features a flattering cut and a bold color to make you stand out at the beach.',
    price: 80.00,
    image: getImage('wbeach1', 'wbeach1').url,
    imageHint: getImage('wbeach1', 'wbeach1').hint,
  },
  {
    id: 'womens_beachwear_002',
    name: 'Bikini Set',
    description: 'A chic and modern bikini set.',
    longDescription: 'This stylish bikini set is perfect for sunbathing and swimming, offering a comfortable and fashionable fit.',
    price: 75.00,
    image: getImage('wbeach2', 'wbeach2').url,
    imageHint: getImage('wbeach2', 'wbeach2').hint,
  },
  {
    id: 'womens_beachwear_003',
    name: 'Beach Cover-Up',
    description: 'A breezy and elegant beach cover-up.',
    longDescription: 'This lightweight cover-up is perfect for throwing over your swimsuit, taking you from the beach to the bar.',
    price: 60.00,
    image: getImage('wbeach3', 'wbeach3').url,
    imageHint: getImage('wbeach3', 'wbeach3').hint,
  },

  // Collection - Mens Beachwear
  {
    id: 'mens_beachwear_001',
    name: 'Board Shorts',
    description: 'Classic and comfortable board shorts.',
    longDescription: 'These board shorts are designed for comfort and performance, perfect for surfing or relaxing by the pool.',
    price: 50.00,
    image: getImage('mbeach1', 'mbeach1').url,
    imageHint: getImage('mbeach1', 'mbeach1').hint,
  },
  {
    id: 'mens_beachwear_002',
    name: 'Swim Trunks',
    description: 'Stylish and modern swim trunks.',
    longDescription: 'These swim trunks feature a modern cut and quick-drying fabric, perfect for a day at the beach.',
    price: 45.00,
    image: getImage('mbeach2', 'mbeach2').url,
    imageHint: getImage('mbeach2', 'mbeach2').hint,
  },
  {
    id: 'mens_beachwear_003',
    name: 'Rash Guard',
    description: 'A protective and lightweight rash guard.',
    longDescription: 'This rash guard offers UV protection and is made from a quick-drying material, ideal for water sports.',
    price: 55.00,
    image: getImage('mbeach3', 'mbeach3').url,
    imageHint: getImage('mbeach3', 'mbeach3').hint,
  },

  // Collection - New Arrivals
  {
    id: 'new_arrivals_001',
    name: 'Stylish Trench Coat',
    description: 'A new addition to our coat collection.',
    longDescription: 'This newly arrived trench coat is a modern take on a classic design, perfect for any season.',
    price: 190.00,
    image: getImage('newarrival1', 'newarrival1').url,
    imageHint: getImage('newarrival1', 'newarrival1').hint,
  },
  {
    id: 'new_arrivals_002',
    name: 'Summer Sandals',
    description: 'Brand new sandals for the summer season.',
    longDescription: 'Just in for summer, these stylish sandals are perfect for warm weather and beach days.',
    price: 65.00,
    image: getImage('newarrival2', 'newarrival2').url,
    imageHint: getImage('newarrival2', 'newarrival2').hint,
  },

  // Collection - New Catalog
  {
    id: 'new_catalog_001',
    name: 'Catalog Exclusive Item',
    description: 'An exclusive item from our new catalog.',
    longDescription: 'Discover this exclusive piece from our latest catalog, featuring premium materials and design.',
    price: 250.00,
    image: getImage('newcatalog1', 'newcatalog1').url,
    imageHint: getImage('newcatalog1', 'newcatalog1').hint,
  },
];
