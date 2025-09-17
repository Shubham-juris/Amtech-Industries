"use server";
/**
 * @fileOverview A Genkit flow for filtering products based on various criteria.
 *
 * - getFilteredProducts - A function that takes filter criteria and returns a list of matching product IDs.
 * - ProductFilterInput - The input type for the getFilteredProducts function.
 * - ProductFilterOutput - The return type for the getFilteredProducts function.
 */

import { ai } from "@/ai/genkit";
import { z } from "genkit";
import { allProducts } from "@/lib/products";

const ProductSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    longDescription: z.string(),
    price: z.number(),
    image: z.string(),
    imageHint: z.string(),
});

export const ProductFilterInputSchema = z.object({
  category: z.string().optional().describe("The product category to filter by."),
  subcategory: z.string().optional().describe("The product subcategory to filter by."),
  searchTerm: z.string().optional().describe("A search term to filter product names and descriptions."),
  priceRange: z.array(z.number()).length(2).optional().describe("A tuple representing the min and max price."),
  brands: z.array(z.string()).optional().describe("A list of brands to filter by."),
  allProducts: z.array(ProductSchema).describe("The full list of products to filter from."),
});
export type ProductFilterInput = z.infer<typeof ProductFilterInputSchema>;

const ProductFilterOutputSchema = z.object({
  productIds: z
    .array(z.string())
    .describe("An array of product IDs that match the filter criteria."),
});
export type ProductFilterOutput = z.infer<typeof ProductFilterOutputSchema>;


export async function getFilteredProducts(
  input: ProductFilterInput
): Promise<ProductFilterOutput> {
  return productFilterFlow(input);
}

const productFilterPrompt = ai.definePrompt({
  name: "productFilterPrompt",
  input: { schema: ProductFilterInputSchema },
  output: { schema: ProductFilterOutputSchema },
  prompt: `You are an intelligent e-commerce filtering engine. Based on the provided criteria, filter the list of all products and return only the IDs of the products that match.

Available products:
{{{json allProducts}}}

Filter Criteria:
- Category: {{{category}}}
- Subcategory: {{{subcategory}}}
- Search Term: {{{searchTerm}}}
- Price Range: {{{priceRange}}}
- Brands: {{{brands}}}

Analyze the product names, descriptions, and categories to determine if they fit the criteria. The brands can be inferred from the product name. For example, 'Quantum Drone' is brand 'Quantum'.

Return ONLY a list of product IDs that match.
`,
});

const productFilterFlow = ai.defineFlow(
  {
    name: "productFilterFlow",
    inputSchema: ProductFilterInputSchema,
    outputSchema: ProductFilterOutputSchema,
  },
  async (input) => {
    const { output } = await productFilterPrompt(input);
    return output!;
  }
);
