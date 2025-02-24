"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Prize() {
  return (
    <div className="flex flex-col justify-center items-center h-full bg-gradient-to-r from-pink-300 to-purple-400">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-xl font-bold text-white mb-6"
      >
        🎊 Kejutan Spesial Untukmu! 🎊
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/cake.gif"
          alt="cake"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </motion.div>

      <p className="text-lg text-white mt-4 text-center max-w-md">
      "Happy Birthday, Leli! 🥳 Semoga setiap langkah yang kamu ambil membawa kebahagiaan dan kesuksesan. 
      Jangan pernah berhenti bermimpi dan mengejar hal-hal yang kamu inginkan.💕🎁🎊"
      </p>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6"
      >
        <Image
          src="/Leli2.png" 
          alt="Kue Ulang Tahun"
          width={200}
          height={200}
          className="rounded-lg shadow-lg"
        />
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-6 px-6 py-2 bg-white text-pink-500 font-semibold rounded-lg shadow-lg hover:bg-gray-200"
      >
        <Link href="/">🏠 Kembali</Link>
      </motion.button>
    </div>
  );
}
