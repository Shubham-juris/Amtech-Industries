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

export function WhatsAppChatButton() {
  return (
    <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 left-6 z-50">
        <div className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors">
            <WhatsAppIcon className="h-8 w-8" />
        </div>
    </Link>
  );
}