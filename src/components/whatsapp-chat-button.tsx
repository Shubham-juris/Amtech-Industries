
import Link from 'next/link';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        fill="currentColor"
        className="h-8 w-8"
    >
        <path d="m16 2a14 14 0 0 0 -14 14a14 14 0 0 0 14 14a14.01 14.01 0 0 0 5.47 -1.13l6.53 2.13l-2.29-6.2a14 14 0 0 0 3.29-8.8a14 14 0 0 0 -13-14z" opacity=".05"/>
        <path d="m16 3a13 13 0 0 0 -13 13a13 13 0 0 0 13 13a13.01 13.01 0 0 0 5.14-1.07l5.56 1.82l-1.95-5.28a13 13 0 0 0 3.25-8.47a13 13 0 0 0 -12-13z" fill="#40c351"/>
        <path d="m16 4a12 12 0 0 0 -12 12a12 12 0 0 0 12 12a12.01 12.01 0 0 0 4.84-.98l4.63 1.51l-1.63-4.42a12 12 0 0 0 3.16-7.11a12 12 0 0 0 -11-12z" fill="#fff"/>
        <path d="m22.23 18.4a3.24 3.24 0 0 1 -1.48.8a4.58 4.58 0 0 1 -1.84.28a6.45 6.45 0 0 1 -4.2-2.1a9.73 9.73 0 0 1 -3.23-5.23a4.25 4.25 0 0 1 .89-3.37a2.59 2.59 0 0 1 2.22-1.33h.1a1.25 1.25 0 0 1 1.2.95a5.73 5.73 0 0 1 .45 1.71a1.32 1.32 0 0 1 -.23 1a3.48 3.48 0 0 1 -.73.9a.4.4 0 0 0 -.13.31a5.39 5.39 0 0 0 1.32 2.39a5.41 5.41 0 0 0 2.65 1.41a.39.39 0 0 0 .4-.13a3.48 3.48 0 0 1 .9-.73a1.29 1.29 0 0 1 1.05-.23a5.73 5.73 0 0 1 1.71.45a1.25 1.25 0 0 1 .95 1.2v.1a2.59 2.59 0 0 1 -1.33 2.22z" fill="#40c351"/>
    </svg>
  );

export function WhatsAppChatButton() {
  return (
    <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="fixed bottom-24 right-6 z-50 group">
        <div className="relative">
            <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse-ring"></div>
            <div className="relative bg-white text-white p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-200 ease-in-out">
                <WhatsAppIcon />
            </div>
        </div>
    </Link>
  );
}
