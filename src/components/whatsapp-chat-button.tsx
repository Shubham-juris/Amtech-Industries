
import Link from 'next/link';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="currentColor"
      className="h-8 w-8"
    >
        <path 
            d="M12.04 2C6.58 2 2.13 6.45 2.13 12c0 1.74.45 3.48.92 4.9L2.12 22l5.24-1.38c1.41.47 2.96.92 4.68.92h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm4.34 12.92c-.25.5-.54.95-1.09 1.35-.55.4-1.15.6-1.8.6-.65 0-1.25-.2-1.8-.6-.55-.4-1.05-.9-1.5-1.45s-.85-1.05-1.2-1.6c-.35-.55-.53-1.15-.53-1.8s.18-1.25.53-1.8c.35-.55.8-1.05 1.35-1.5s1.1-.85 1.7-1.2c.6-.35 1.2-.53 1.8-.53.65 0 1.25.18 1.8.53.55.35 1.05.8 1.5 1.35s.85 1.1.92 1.7c.07.6.07 1.2-.18 1.8zm-2.12-2.97c-.2-.35-.45-.65-.75-.9s-.65-.45-.9-.6c-.25-.15-.5-.25-.75-.25-.25 0-.5.05-.75.15s-.45.25-.6.45c-.15.2-.25.45-.3.75s-.05.55.05.8c.1.25.25.5.45.8s.4.55.6.8c.2.25.45.45.75.65s.55.35.8.45c.25.1.5.15.75.15s.5-.05.75-.15c.25-.1.45-.25.6-.45.15-.2.25-.45.3-.75s.05-.55-.05-.8c-.09-.25-.24-.5-.44-.8z"
        />
    </svg>
  );

export function WhatsAppChatButton() {
  return (
    <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="fixed bottom-28 right-8 z-50 group">
        <div className="relative">
            <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse-ring"></div>
            <div className="relative bg-green-500 text-white p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-200 ease-in-out">
                <WhatsAppIcon />
            </div>
        </div>
    </Link>
  );
}
