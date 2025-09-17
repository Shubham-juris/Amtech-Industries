
import Link from 'next/link';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="currentColor"
      className="h-8 w-8"
    >
      <path
        d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.044-.53-.044-.315 0-.76.11-1.045.33-.27.22-.682.67-.682 1.595 0 .925.682 1.83 1.045 2.335.308.435.918 1.09 1.963 1.963.98.815 2.115 1.36 3.33 1.36.859 0 1.518-.215 1.963-.42.487-.215.918-.945.918-1.518 0-.215-.043-.43-.115-.644a.63.63 0 0 0-.6-.42z M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 29C8.82 29 3 23.18 3 16S8.82 3 16 3s13 5.82 13 13-5.82 13-13 13z"
        fillRule="evenodd"
      />
    </svg>
  );

export function WhatsAppChatButton() {
  return (
    <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="fixed bottom-24 right-6 z-50 group">
        <div className="relative">
            <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse-ring"></div>
            <div className="relative bg-green-500 text-white p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-200 ease-in-out">
                <WhatsAppIcon />
            </div>
        </div>
    </Link>
  );
}
