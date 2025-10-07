'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Construction() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center p-10 bg-white shadow-2xl rounded-xl border border-gray-300 max-w-lg w-full"
      >
        <h1 className="text-4xl font-extrabold text-black mb-4">
          🚧 Under Construction
        </h1>

        <p className="text-lg text-gray-800 mb-4">
          The page you're looking for is currently being built.
        </p>

        <p className="text-sm text-gray-600 mb-6">
          Thank you for your patience — <span className="font-semibold">Amtech Industries</span> will be live soon on this page.
        </p>

        {/* Home Button */}
        <Link
          href="/"
          className="inline-block bg-black hover:bg-gray-800 text-white text-sm font-medium px-6 py-2 rounded-md transition-colors duration-200"
        >
          🔙 Go to Home
        </Link>
      </motion.div>
    </div>
  );
}
