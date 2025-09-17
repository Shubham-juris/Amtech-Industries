import type { Product } from '../types';
import { getImage } from '../products';

export const kidsApparelProducts: Product[] = [
  // Kids - Girls Dresses
  {
    id: 'girls_dress_001',
    name: 'Pink Party Dress',
    description: 'A cute pink party dress for girls.',
    longDescription: 'This adorable pink party dress is perfect for special occasions, featuring a tulle skirt and sparkly details.',
    price: 45.00,
    image: getImage('girls_dress_1', 'girlsdress1').url,
    imageHint: getImage('girls_dress_1', 'girlsdress1').hint,
  },
  {
    id: 'girls_dress_002',
    name: 'Floral Print Dress',
    description: 'A casual floral print dress for girls.',
    longDescription: 'A comfortable and stylish floral dress, perfect for everyday wear and warm weather.',
    price: 35.00,
    image: getImage('girls_dress_2', 'girlsdress2').url,
    imageHint: getImage('girls_dress_2', 'girlsdress2').hint,
  },
  {
    id: 'girls_dress_003',
    name: 'Denim Dress',
    description: 'A stylish and durable denim dress for girls.',
    longDescription: 'This denim dress is both fashionable and durable, ideal for school or play.',
    price: 40.00,
    image: getImage('girls_dress_3', 'girlsdress3').url,
    imageHint: getImage('girls_dress_3', 'girlsdress3').hint,
  },

  // Kids - Infants (0-24 months)
  {
    id: 'infant_001',
    name: 'Soft Cotton Onesie',
    description: 'A pack of soft cotton onesies for infants.',
    longDescription: 'Made from 100% organic cotton, these onesies are gentle on your baby\'s skin and perfect for everyday wear.',
    price: 25.00,
    image: getImage('infant_1', 'infant1').url,
    imageHint: getImage('infant_1', 'infant1').hint,
  },
  {
    id: 'infant_002',
    name: 'Infant Bibs Set',
    description: 'A set of cute and practical infant bibs.',
    longDescription: 'Keep your baby clean and dry with this set of absorbent cotton bibs, featuring adorable designs.',
    price: 15.00,
    image: getImage('infant_2', 'infant2').url,
    imageHint: getImage('infant_2', 'infant2').hint,
  },
  {
    id: 'infant_003',
    name: 'Warm Sleep Sack',
    description: 'A cozy and safe sleep sack for infants.',
    longDescription: 'This warm sleep sack keeps your baby comfortable and secure all night long, promoting better sleep.',
    price: 30.00,
    image: getImage('infant_3', 'infant3').url,
    imageHint: getImage('infant_3', 'infant3').hint,
  },

  // Kids - Toddlers (2-4 Yrs)
  {
    id: 'toddler_001',
    name: 'Playful T-Shirt',
    description: 'A fun and playful t-shirt for toddlers.',
    longDescription: 'This t-shirt features a fun graphic and is made from soft, durable cotton, perfect for active toddlers.',
    price: 20.00,
    image: getImage('toddler_1', 'toddler1').url,
    imageHint: getImage('toddler_1', 'toddler1').hint,
  },
  {
    id: 'toddler_002',
    name: 'Toddler Leggings',
    description: 'A pair of comfortable and stretchy leggings for toddlers.',
    longDescription: 'These comfortable leggings are perfect for playtime, made from a stretchy cotton blend that moves with your toddler.',
    price: 18.00,
    image: getImage('toddler_2', 'toddler2').url,
    imageHint: getImage('toddler_2', 'toddler2').hint,
  },
  {
    id: 'toddler_003',
    name: 'Cute Toddler Hoodie',
    description: 'A cute and cozy hoodie for toddlers.',
    longDescription: 'This adorable hoodie will keep your toddler warm and stylish, featuring a fun design and soft fabric.',
    price: 35.00,
    image: getImage('toddler_3', 'toddler3').url,
    imageHint: getImage('toddler_3', 'toddler3').hint,
  },

  // Kids - Little (4-7 Yrs)
  {
    id: 'little_kid_001',
    name: 'Graphic T-Shirt',
    description: 'A fun graphic t-shirt for little kids.',
    longDescription: 'This cool graphic t-shirt is perfect for school and play, made from 100% comfortable cotton.',
    price: 22.00,
    image: getImage('little_kid_1', 'littlekid1').url,
    imageHint: getImage('little_kid_1', 'littlekid1').hint,
  },
  {
    id: 'little_kid_002',
    name: 'Durable Kids Jeans',
    description: 'A pair of durable and stylish jeans for little kids.',
    longDescription: 'These jeans are built to last, perfect for active kids, and feature an adjustable waistband for a great fit.',
    price: 40.00,
    image: getImage('little_kid_2', 'littlekid2').url,
    imageHint: getImage('little_kid_2', 'littlekid2').hint,
  },
  {
    id: 'little_kid_003',
    name: 'Cozy Kids Sweater',
    description: 'A warm and cozy sweater for little kids.',
    longDescription: 'This stylish sweater is perfect for cooler days, made from a soft and comfortable knit fabric.',
    price: 38.00,
    image: getImage('little_kid_3', 'littlekid3').url,
    imageHint: getImage('little_kid_3', 'littlekid3').hint,
  },
];
