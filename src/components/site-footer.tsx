import { Sparkles, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const WhatsAppIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="h-6 w-6"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
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
               <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                <WhatsAppIcon />
              </Link>
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
