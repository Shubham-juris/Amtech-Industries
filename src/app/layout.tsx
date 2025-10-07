import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import LayoutWrapper from '@/components/layout-wrapper'; // 👈 client component

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Amtech Industries',
  description: 'The official store for Amtech Industries products.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', inter.variable)}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
