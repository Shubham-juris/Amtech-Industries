export type Product = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  imageHint: string;
};

export type CartItem = Product & {
  quantity: number;
};
