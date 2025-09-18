'use client';

import Link from 'next/link';
import Image from 'next/image';

export function WhatsAppChatButton() {
  return (
    <Link
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-1 right-1 z-50 group"
    >
      <div className="relative w-48 h-48"> 
        <div className="absolute inset-10 bg-green-500 rounded-full animate-pulse-ring"></div>

        <div className="relative animate-bounce-slow p-3 group-hover:scale-110 transition-transform duration-1000 ease-in-out">
          <Image
            src="/images/whatsapp/chatbot.png"
            alt="Chat on WhatsApp"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
      </div>
    </Link>
  );
}
