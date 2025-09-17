'use server';

import { getProductRecommendations } from '@/ai/flows/product-recommendations';
import { getFilteredProducts } from '@/ai/flows/product-filter';
import { allProducts, getProductById } from '@/lib/products';
import type { Product } from '@/lib/types';
import type { ProductFilterInput } from '@/ai/flows/product-filter';


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

export async function getFilteredProductsAction(input: ProductFilterInput): Promise<Product[]> {
    try {
        const { productIds } = await getFilteredProducts({
            ...input,
            allProducts: allProducts
        });
        
        const filteredProducts = productIds
            .map(id => getProductById(id))
            .filter((p): p is Product => p !== undefined);

        return filteredProducts;
    } catch(error) {
        console.error("Error getting filtered products", error);
        // Fallback to a simple non-AI filter
        return allProducts.filter(p => {
            const inPriceRange = p.price >= input.priceRange[0] && p.price <= input.priceRange[1];
            const nameMatch = p.name.toLowerCase().includes(input.searchTerm?.toLowerCase() ?? '');
            const brandMatch = input.brands && input.brands.length > 0 ? input.brands.some(b => p.name.startsWith(b)) : true;
            return inPriceRange && nameMatch && brandMatch;
        });
    }
}
