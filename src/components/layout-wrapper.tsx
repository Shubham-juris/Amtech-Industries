'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CartProvider } from '@/hooks/use-cart';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Toaster } from "@/components/ui/toaster";
import { WholesaleBanner } from '@/components/wholesale-banner';
import { WhatsAppChatButton } from '@/components/whatsapp-chat-button';
import { ThemeProvider } from '@/components/theme-provider';
import { Construction } from '@/components/UnderConstruction';

// ✅ Allowed route prefixes
const allowedRoutes = ['/', '/contact', '/about'];

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false); // For hydration-safe rendering

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Prevent mismatch during hydration (temporary blank)
    return null;
  }

  // ✅ Match if the route starts with any allowed path
  const isAllowed = allowedRoutes.some(route => pathname === route || pathname.startsWith(`${route}/`));

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <CartProvider>
        <div className="relative flex min-h-screen flex-col">
          {isAllowed ? (
            <>
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
              <Toaster />
              <WholesaleBanner />
              <WhatsAppChatButton />
            </>
          ) : (
            <Construction />
          )}
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}
