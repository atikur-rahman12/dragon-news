"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6">
      <div className="text-center max-w-xl">
        {/* Animated 404 */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-8xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg text-gray-300"
        >
          Oops! The page you are looking for doesn’t exist.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <Link
            href="/"
            className="inline-block px-6 py-3 text-sm font-semibold bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Go Back Home
          </Link>
        </motion.div>

        {/* Floating decoration */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-10 text-gray-500 text-sm"
        >
          Lost in space 🚀
        </motion.div>
      </div>
    </div>
  );
}
