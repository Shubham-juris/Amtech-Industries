'use client';

import Link from 'next/link';
import { ShoppingBag, Sparkles, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '@/hooks/use-cart';
import { CartSheet } from './cart-sheet';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const accessories = ['Bags', 'Cap', 'Scarf', 'Sleepwear', 'Socks', 'Towels'];
const customClothing = ['White Label Clothing', 'Sublimation'];
const women = ['Dress', 'Coats', 'Jackets', 'Top Wear', 'Leggings', 'Lingerie'];
const kids = {
  'Girls Dresses Collection': [],
  'Infants-0-24-Months': [],
  'Little-4-7-Yrs': [],
  'Toddlers-2-4-Yrs': [],
};
const men = ['Hoody', 'Jackets', 'Pants', 'T-shirts', 'Shirts', 'Underwear'];
const footwear = ['Flipflops', 'Formal Shoes', 'Lifestyle', 'Running Shoes'];
const collection = ['New Catalog', 'New Arrivals', 'Jumpsuits', 'Polo T shirts', 'Womens Beachwear', 'Mens Beachwear'];
const runningFitness = ['Activewear', 'Compression', 'Men Running Fitness', 'Women Running Fitness'];
const sports = ['Athletics', 'Basketball', 'Boxing', 'Cycling', 'Dance Wear', 'Golf', 'Hockey', 'Marathons', 'Tennis', 'Triathlon'];


export function SiteHeader() {
  const { itemCount } = useCart();
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="inline-block font-bold text-lg">Amtech Industries</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="/"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="/manufacturers"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Manufacturers
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none">
                    Wholesale
                    <ChevronDown className="relative top-[1px] ml-1 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64">
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Accessories</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        {accessories.map(item => <DropdownMenuItem key={item}>{item}</DropdownMenuItem>)}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Custom Clothing</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        {customClothing.map(item => <DropdownMenuItem key={item}>{item}</DropdownMenuItem>)}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                   <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Women</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        {women.map(item => <DropdownMenuItem key={item}>{item}</DropdownMenuItem>)}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                   <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Kids</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        {Object.keys(kids).map(item => <DropdownMenuItem key={item}>{item}</DropdownMenuItem>)}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Men</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        {men.map(item => <DropdownMenuItem key={item}>{item}</DropdownMenuItem>)}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Footwear</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        {footwear.map(item => <DropdownMenuItem key={item}>{item}</DropdownMenuItem>)}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                   <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Collection</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        {collection.map(item => <DropdownMenuItem key={item}>{item}</DropdownMenuItem>)}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Running Fitness</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        {runningFitness.map(item => <DropdownMenuItem key={item}>{item}</DropdownMenuItem>)}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Sports</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        {sports.map(item => <DropdownMenuItem key={item}>{item}</DropdownMenuItem>)}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href="/contact"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Button variant="ghost" size="icon" className="relative" onClick={() => setCartOpen(true)}>
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">
                    {itemCount}
                  </span>
                )}
                <span className="sr-only">Open shopping cart</span>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <CartSheet open={isCartOpen} onOpenChange={setCartOpen} />
    </>
  );
}
