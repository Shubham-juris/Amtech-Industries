import { Sparkles, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M16.75 13.96c.27.13.41.41.41.72v2.12c0 .4-.28.72-.63.84-1.12.38-2.36.5-3.6.5-4.88 0-8.84-3.95-8.84-8.82 0-1.25.22-2.48.6-3.6.12-.35.45-.63.84-.63h2.12c.31 0 .59.14.72.41.17.35.27.72.35 1.1.08.38.01.78-.18 1.1l-.88 1.56c-.19.34-.22.75-.06 1.11.43.95 1.14 1.83 2.11 2.54.39.28.9.22 1.2-.13l1.12-1.28c.34-.39.88-.47 1.3-.22.42.25.82.56 1.18.91zM19.34 4.66C17.2 2.52 14.68 1.4 12.01 1.4c-5.87 0-10.62 4.75-10.62 10.61 0 1.95.53 3.79 1.48 5.4l-1.6 5.83 5.96-1.57c1.55.85 3.32 1.31 5.18 1.31 5.87 0 10.62-4.75 10.62-10.61 0-2.67-1.12-5.18-2.96-7.31z" />
    </svg>
  );

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8" />
              <span className="text-2xl font-bold">Amtech</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Leading the way in innovative industrial solutions and high-quality products for a global market.
            </p>
          </div>

          {/* Sitemap */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Sitemap</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link href="/wholesale" className="text-muted-foreground hover:text-primary-foreground transition-colors">Wholesale</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <span className="text-muted-foreground">contact@amtech.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <span className="text-muted-foreground">+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                <span className="text-muted-foreground">123 Innovation Drive, Tech City</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors"><Facebook className="h-6 w-6" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors"><Twitter className="h-6 w-6" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors"><Instagram className="h-6 w-6" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors"><Linkedin className="h-6 w-6" /></Link>
              <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary-foreground transition-colors"><WhatsAppIcon className="h-6 w-6" /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border/20 py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            © {new Date().getFullYear()} Amtech Industries. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
