'use server';

import { getProductRecommendations } from '@/ai/flows/product-recommendations';
import { allProducts, getProductById } from '@/lib/products';
import type { Product } from '@/lib/types';

// A mock list of all possible product IDs to recommend from.
const availableProductIds = allProducts.map(p => p.id);

export async function getRecommendedProductsAction(productId: string): Promise<Product[]> {
  try {
    const { recommendedProductIds } = await getProductRecommendations({
      productId: productId,
      // In a real app, you might pass user history. Here we'll generate some mock related products.
      userHistory: `You are generating recommendations for a user looking at product with ID ${productId}. Please suggest other products from this list: ${JSON.stringify(availableProductIds)}`
    });
    
    // Filter out the current product from recommendations and handle potential duplicates
    const uniqueRecommendedIds = [...new Set(recommendedProductIds)].filter(id => id !== productId);

    const recommendedProducts = uniqueRecommendedIds
      .map(id => getProductById(id))
      .filter((p): p is Product => p !== undefined);

    return recommendedProducts;

  } catch (error) {
    console.error('Error getting product recommendations:', error);
    // Fallback to a simple logic if AI fails
    return allProducts.filter(p => p.id !== productId).slice(0, 4);
  }
}
