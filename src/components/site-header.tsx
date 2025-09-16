'use client';

import Link from 'next/link';
import { ShoppingBag, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '@/hooks/use-cart';
import { CartSheet } from './cart-sheet';
import { useState } from 'react';

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
                Products
              </Link>
              <Link
                href="/contact"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
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
