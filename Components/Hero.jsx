// components/Hero.jsx
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4 lg:px-8 py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Sleep Uninterrupted with DreamShield
          </motion.h1>
          <motion.p
            className="text-lg text-gray-200"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Our side-sleep–optimized ANC ear‐cuff uses real-time noise classification,
            gentle haptic alerts, and data-driven coaching to give you truly restful nights.
          </motion.p>
          <motion.div
            className="space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/shop">
              <a className="px-6 py-3 bg-accent hover:bg-red-600 rounded-md font-semibold">
                Pre-Order Now
              </a>
            </Link>
            <Link href="#how-it-works">
              <a className="px-6 py-3 border border-white hover:bg-white hover:text-primary rounded-md font-semibold">
                How It Works
              </a>
            </Link>
          </motion.div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <motion.img
            src="/images/hero‐earcup‐mockup.webp"
            alt="DreamShield Ear‐Cuff Mockup"
            className="w-full max-w-md"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 }}
          />
        </div>
      </div>
    </section>
  );
}
