"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Birth() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-pink-300 to-purple-400">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md"
      >
        <h1 className="text-4xl font-bold text-pink-500 mb-4">
          🎉 Selamat Ulang Tahun, Leli! 🎂
        </h1>
        <p className="text-lg text-gray-700">
          Semoga di hari istimewa ini, kamu selalu diberikan kebahagiaan, kesehatan, dan segala hal indah dalam hidup.  
          Teruslah bersinar seperti bintang di langit! 🌟💖
        </p>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Image
            src="/Leli1.png"
            alt="Leli 1"
            width={300}
            height={300}
            className="rounded-lg shadow-lg mx-auto mt-4"
          />
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-6 py-2 bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-600"
        >
          <Link href="/prize">🎁 Buka Kejutan</Link>
        </motion.button>
      </motion.div>
    </div>
  );
}
