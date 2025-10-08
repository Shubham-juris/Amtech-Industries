'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Construction() {
  // ✅ Countdown Timer Setup
  const launchDate = new Date('2025-11-01T00:00:00'); // <-- Set your launch date here
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance < 0) {
        setTimeLeft('Launched!');
        clearInterval(timer);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  // ✅ Subscription State
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle your email submission logic here (e.g., API call)
    setSubmitted(true);
  };

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

        <p className="text-lg text-gray-800 mb-2">
          This page is being built and will be live soon.
        </p>

        {/* ⏳ Countdown Timer */}
        <p className="text-md text-gray-700 mb-4">
          Launching in: <span className="font-mono">{timeLeft}</span>
        </p>

        {/* 📩 Subscription Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="mb-6">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="w-full bg-black text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-800 transition"
            >
              Notify Me
            </button>
          </form>
        ) : (
          <p className="text-green-600 text-sm mb-6">
            ✅ Thank you! You’ll be notified when we launch.
          </p>
        )}

        {/* 🏠 Home Button */}
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
