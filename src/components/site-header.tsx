'use client';

import Link from 'next/link';
import Image from 'next/image'; 
import { ShoppingCart, Sparkles, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '@/hooks/use-cart';
import { CartSheet } from './cart-sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';


const menuItems = {
  'Accessories': ['Bags', 'Cap', 'Scarf', 'Sleepwear', 'Socks', 'Towels'],
  'Custom Clothing': ['White Label Clothing', 'Sublimation'],
  'Women': ['Women Dress', 'Women Coats', 'Women Jackets', 'Women Top Wear', 'Women Leggings', 'Women Lingerie'],
  'Kids': ['Girls Dresses Collection', 'Infants-0-24-Months', 'Little-4-7-Yrs', 'Toddlers-2-4-Yrs'],
  'Men': ['Men Hoody', 'Men Jackets', 'Men Pants', 'Men T-shirts', 'Men Shirts', 'Men Underwear'],
  'Footwear': ['Flipflops', 'Formal Shoes', 'Lifestyle', 'Running Shoes'],
  'Collection': ['New Catalog', 'New Arrivals', 'Jumpsuits', 'Polo T shirts', 'Womens Beachwear', 'Mens Beachwear'],
  'Running Fitness': ['Activewear', 'Compression', 'Men Running Fitness', 'Women Running Fitness'],
  'Sports': ['Athletics', 'Basketball', 'Boxing', 'Cycling', 'Dance Wear', 'Golf', 'Hockey', 'Marathons', 'Tennis', 'Triathlon'],
};

const toSlug = (text: string) => text.toLowerCase().replace(/\s+/g, '-');

const MenuColumn = ({ title, items }: { title: string; items: string[] }) => (
  <div className="flex flex-col gap-2">
    <h3 className="text-sm font-semibold text-primary-foreground border-b border-border pb-1 mb-1">
      {title}
    </h3>
    <ul className="flex flex-col gap-1">
      {items.map(item => (
        <li key={item}>
          <DropdownMenuItem asChild>
            <Link
              href={`/wholesale/${toSlug(title)}/${toSlug(item)}`}
              className="text-muted-foreground hover:text-primary-foreground w-full"
            >
              {item}
            </Link>
          </DropdownMenuItem>
        </li>
      ))}
    </ul>
  </div>
);

export function SiteHeader() {
  const { itemCount, setCartOpen } = useCart();
  const pathname = usePathname();

  return (
    <>
      <header className="sticky pt-8 top-0 z-40 w-full bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center">
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/amtech.jpeg"
                alt="Amtech Logo"
                width={92}
                height={92}
                className="rounded"
              />
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
              <Link
                href="/"
                className={cn(
                  "flex items-center text-base font-medium text-muted-foreground hover:text-primary transition-colors",
                  pathname === "/" && "text-primary"
                )}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={cn(
                  "flex items-center text-base font-medium text-muted-foreground hover:text-primary transition-colors",
                  pathname === "/about" && "text-primary"
                )}
              >
                About
              </Link>

              <Link
                href="/manufacturers"
                className={cn(
                  "flex items-center text-base font-medium text-muted-foreground hover:text-primary transition-colors",
                  pathname === "/manufacturers" && "text-primary"
                )}
              >
                Manufacturers
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={cn(
                      "flex items-center text-base font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none",
                      pathname.startsWith('/wholesale') && "text-primary"
                    )}
                  >
                    Wholesale
                    <ChevronDown className="relative top-[1px] ml-1 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-screen max-w-7xl p-6 bg-primary text-primary-foreground"
                  align="end"
                  sideOffset={14}
                >
                  <div className="grid grid-cols-5 gap-x-8 gap-y-6">
                    <div className="flex flex-col gap-6">
                      <MenuColumn title="Accessories" items={menuItems['Accessories']} />
                      <MenuColumn title="Custom Clothing" items={menuItems['Custom Clothing']} />
                    </div>
                    <div className="flex flex-col gap-6">
                      <MenuColumn title="Women" items={menuItems['Women']} />
                      <MenuColumn title="Kids" items={menuItems['Kids']} />
                    </div>
                    <div className="flex flex-col gap-6">
                      <MenuColumn title="Men" items={menuItems['Men']} />
                      <MenuColumn title="Footwear" items={menuItems['Footwear']} />
                    </div>
                    <div className="flex flex-col gap-6">
                      <MenuColumn title="Collection" items={menuItems['Collection']} />
                      <MenuColumn title="Running Fitness" items={menuItems['Running Fitness']} />
                    </div>
                    <div className="flex flex-col gap-6">
                      <MenuColumn title="Sports" items={menuItems['Sports']} />
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href="/contact"
                className={cn(
                  "flex items-center text-base font-medium text-muted-foreground hover:text-primary transition-colors",
                  pathname === "/contact" && "text-primary"
                )}
              >
                Contact Us
              </Link>
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">
                  {itemCount}
                </span>
              )}
              <span className="sr-only">Open shopping cart</span>
            </Button>
          </div>
        </div>
      </header>

      <CartSheet />
    </>
  );
}
