// pages/how-it-works.jsx
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import Viewer from "../Components/3DViewer";

export default function HowItWorks() {
  return (
    <>
      <Head>
        <title>How It Works • DreamShield</title>
      </Head>
      <Header />
      <main className="pt-16">
        <section className="bg-white py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-primary mb-6">
              How DreamShield Works
            </h1>
            <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
              DreamShield combines state-of-the-art sensors, machine learning,
              and ergonomic design to deliver truly uninterrupted sleep.
            </p>
            <div className="max-w-3xl mx-auto mb-12">
              <Viewer />
            </div>
          </div>
        </section>

        {/* Step-by-Step */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <div className="space-y-20">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <img
                  src="/images/mic.webp"
                  alt="Mic captures ambient noise"
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
              <motion.div
                className="md:w-1/2 md:pl-12 mt-8 md:mt-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  1. Capture Ambient Noise
                </h2>
                <p className="text-gray-700">
                  Our ultra-sensitive MEMS microphone captures a full spectrum of
                  sounds—traffic, snoring, alarms—at sub-100 µs latency.
                </p>
              </motion.div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center">
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <img
                  src="/images/classify.webp"
                  alt="On-device ML classifies noise"
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
              <motion.div
                className="md:w-1/2 md:pr-12 mt-8 md:mt-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  2. Classify with Edge ML
                </h2>
                <p className="text-gray-700">
                  A tiny, quantized CNN runs on our nRF52840’s Cortex-M4
                  processor, distinguishing snoring from traffic and other noises
                  in real time.
                </p>
              </motion.div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <img
                  src="/images/anc.webp"
                  alt="ANC cancels noise"
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
              <motion.div
                className="md:w-1/2 md:pl-12 mt-8 md:mt-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  3. Active Noise Cancellation
                </h2>
                <p className="text-gray-700">
                  ANC filters emit “anti-sound” to cancel disruptive noises, all
                  optimized for side sleeping to keep you comfortable and undisturbed.
                </p>
              </motion.div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center">
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <img
                  src="/images/haptic.webp"
                  alt="Haptic alerts"
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
              <motion.div
                className="md:w-1/2 md:pr-12 mt-8 md:mt-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  4. Gentle Vibration Alerts
                </h2>
                <p className="text-gray-700">
                  If a critical noise (alarm, baby crying, smoke detector) is
                  detected, a precise LRA delivers a gentle vibration—waking only
                  you, silently.
                </p>
              </motion.div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <img
                  src="/images/app.webp"
                  alt="Sleep coaching app"
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
              <motion.div
                className="md:w-1/2 md:pl-12 mt-8 md:mt-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  5. Data-Driven Sleep Coaching
                </h2>
                <p className="text-gray-700">
                  All night’s noise and haptic data stream to our mobile app.
                  View interruptions by time, sleep stages, and receive personalized
                  tips to optimize your sleep hygiene.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
