'use server';

/**
 * @fileOverview This file defines a Genkit flow for providing AI-powered product recommendations.
 *
 * - getProductRecommendations - A function that takes a product ID and returns a list of recommended product IDs.
 * - ProductRecommendationsInput - The input type for the getProductRecommendations function.
 * - ProductRecommendationsOutput - The return type for the getProductRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductRecommendationsInputSchema = z.object({
  productId: z.string().describe('The ID of the product for which to generate recommendations.'),
  userHistory: z.string().optional().describe('The user history of previously purchased products.'),
});
export type ProductRecommendationsInput = z.infer<
  typeof ProductRecommendationsInputSchema
>;

const ProductRecommendationsOutputSchema = z.object({
  recommendedProductIds: z
    .array(z.string())
    .describe('An array of product IDs that are recommended for the user.'),
});
export type ProductRecommendationsOutput = z.infer<
  typeof ProductRecommendationsOutputSchema
>;

export async function getProductRecommendations(
  input: ProductRecommendationsInput
): Promise<ProductRecommendationsOutput> {
  return productRecommendationsFlow(input);
}

const productRecommendationsPrompt = ai.definePrompt({
  name: 'productRecommendationsPrompt',
  input: {schema: ProductRecommendationsInputSchema},
  output: {schema: ProductRecommendationsOutputSchema},
  prompt: `You are an expert e-commerce product recommendation engine. Given a product ID and the user's purchase history, you will return a list of product IDs that the user might be interested in.

Product ID: {{{productId}}}
User History: {{{userHistory}}}

Return ONLY a list of product IDs. No other text should be included in the response.  Each ID must be enclosed in quotes.  For example: ["product123", "product456"]`,
});

const productRecommendationsFlow = ai.defineFlow(
  {
    name: 'productRecommendationsFlow',
    inputSchema: ProductRecommendationsInputSchema,
    outputSchema: ProductRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await productRecommendationsPrompt(input);
    return output!;
  }
);
