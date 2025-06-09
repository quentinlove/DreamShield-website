// pages/index.jsx
import dynamic from "next/dynamic";
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useState } from "react";
import Hero from "../Components/Hero";
import FeatureCard from "../Components/FeatureCard";
import Testimonial from "../Components/Testimonial";
import { motion } from "framer-motion";
 import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { MenuIcon } from "@heroicons/react/outline";
import Link from "next/link";
const Viewer = dynamic(
  () => import("../Components/3DViewer"), // ← adjust this path+capitalization to match your folder
  { ssr: false }
);
const TestimonialCarousel = dynamic(
  () => import("../Components/TestimonialCarousel"),
  { ssr: false }
);

export default function Home() {
  const faqs = [
  {
    question: "Who is DreamShield for?",
    answer:
      "DreamShield is perfect for side-sleepers, light sleepers, and anyone who needs uninterrupted rest in noisy environments—whether that’s snoring partners, traffic, or busy city streets.",
  },
  {
    question: "How effective is the noise cancellation?",
    answer:
      "Our custom ANC algorithm cancels up to 30 dB of low-frequency noise (snoring, traffic) and 20 dB of mid-high frequency sounds (alarms, chatter), tested in real-world sleep labs.",
  },
  {
    question: "Will DreamShield fit my ears?",
    answer:
      "Yes! Each set ships with four different earcup sizes (XS, S, M, L). The memory-foam + PCM liners conform to your unique ear shape for a pressure-free fit.",
  },
  {
    question: "Is it easy to use?",
    answer:
      "Absolutely. Just remove DreamShield from its case, and it instantly pairs and enters ANC mode. No apps or Bluetooth required—just slip on and sleep.",
  },
  {
    question: "What’s the difference between DreamShield-v1 and DreamShield-v2?",
    answer:
      "DreamShield-v2 adds real-time noise classification (snore vs traffic vs alarms), haptic alerts for critical sounds, and extended battery life—28 hours versus 20 hours on v1.",
  },
  {
    question: "Where can I buy DreamShield?",
    answer:
      "Pre-orders are open now on our website. We ship worldwide and offer free returns within 30 days if you’re not completely satisfied.",
  },
];
    const dealers = [
    {
      id: 1,
      name: "Hearfit, Canada, USA",
      url: "https://www.hearfit.com",
      position: [43.6532, -79.3832],
    },
    {
      id: 2,
      name: "Hearfit World, USA (Global)",
      url: "https://www.hearfitworld.com",
      position: [40.7128, -74.006],
    },
    {
      id: 3,
      name: "SMDSupply, USA",
      url: "https://www.smdsupply.com",
      position: [34.0522, -118.2437],
    },
    {
      id: 4,
      name: "Pro Idee, Germany (Global)",
      url: "https://www.proidee.de",
      position: [48.1351, 11.582],
    },
    {
      id: 5,
      name: "MindtecStore, Germany",
      url: "https://www.mindtecstore.de",
      position: [51.1657, 10.4515],
    },
    {
      id: 6,
      name: "Mediamarkt, Germany",
      url: "https://www.mediamarkt.de",
      position: [52.52, 13.405],
    },
    {
      id: 7,
      name: "Healf, UK",
      url: "https://www.healf.co.uk",
      position: [51.5074, -0.1278],
    },
    {
      id: 8,
      name: "Earjobs, Australia",
      url: "https://www.earjobs.au",
      position: [-33.8688, 151.2093],
    },
    {
      id: 9,
      name: "Searching C, Hong Kong",
      url: "https://www.searchingc.hk",
      position: [22.3193, 114.1694],
    },
    {
      id: 10,
      name: "Weatherly.jp, Japan",
      url: "https://www.weatherly.jp",
      position: [35.6895, 139.6917],
    },
    {
      id: 11,
      name: "Verkkokauppa, Finland",
      url: "https://www.verkkokauppa.com",
      position: [60.1699, 24.9384],
    },
    {
      id: 12,
      name: "Biohackercenter, Estonia (Global)",
      url: "https://www.biohackercenter.com",
      position: [59.437, 24.7536],
    },
    {
      id: 13,
      name: "Earplugs.cz, Czechia",
      url: "https://www.earplugs.cz",
      position: [50.0755, 14.4378],
    },
    {
      id: 14,
      name: "Yoursystemisfantastic, France",
      url: "https://www.yoursystemisfantastic.fr",
      position: [48.8566, 2.3522],
    },
    {
      id: 15,
      name: "Quietstore, Ukraine",
      url: "https://www.quietstore.ua",
      position: [50.4501, 30.5234],
    },
  ];
    const images = [
    { src: "/images/vibration.png", alt: "Vibration pattern" },
    { src: "/images/chart.png",      alt: "Data chart" },
    // If you ever add a 3rd, just append it here and it will stack automatically
  ];
  return (
    <>
      <Head>
        <title>Home • DreamShield</title>
      </Head>
      <Header />
      <main className="pt-16">
        <Hero />

        {/* 1. Key Features */}
 <section className="relative overflow-hidden py-20 px-4 lg:px-8 bg-gradient-to-br from-black to-gray-900">
  {/* OPTIONAL: particle background (e.g. tsParticles) */}
  <div className="absolute inset-0">
    <canvas id="particle-canvas" />
  </div>

  <div className="relative z-10 container mx-auto text-center">
    <h2 className="text-4xl font-extrabold mb-12 bg-clip-text text-transparent  
                   bg-gradient-to-r from-white to-purple  
                   bg-[length:200%_auto] animate-gradient">
      Why DreamShield?
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* your FeatureCard instances */}
       <FeatureCard
              icon="/images/anc.webp"
              title="Real-Time ANC & Noise Classification"
              description="Our on-ear sensor detects snoring, traffic & alarms—ANC circuitry cancels them instantly."
            />
            <FeatureCard
              icon="/images/icon-comfort.webp"
              title="Side-Sleep Comfort"
              description="Memory-foam + PCM liner, stretchy knit shell & BOA dial give a perfect, pressure-free fit."
            />
            <FeatureCard
              icon="/images/icon-battery.webp"
              title="12+ Hour Battery & Rapid Charge"
              description="Sleep all night on a single charge. USB-C quick-charge gives 4 hrs power in 15 minutes."
            />
            <FeatureCard
              icon="/images/icon-app.webp"
              title="Data-Driven Sleep Coaching"
              description="Track sleep stages, interruptions & nightly trends in our companion app—get personalized tips."
            />
            <FeatureCard
              icon="/images/icon-privacy.webp"
              title="HIPAA-Grade Privacy"
              description="Your sleep data is encrypted, stored securely, and never shared without your permission."
            />
            <FeatureCard
              icon="/images/icon-community.webp"
              title="In-App Community & Support"
              description="Join peer tips, expert Q&A & referral rewards. You’re never alone in your sleep journey."
            />
    </div>
  </div>
</section>

<section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-900 to-black">
  {/* optional particle/lines canvas for extra cyber feel */}
  <div className="absolute inset-0">
    <canvas id="particle-canvas" />
  </div>

  <div className="relative z-10 container mx-auto px-4 lg:px-8 space-y-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
      {/* LEFT: GLASS CARD */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg"
      >
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-6 
                     bg-clip-text text-transparent 
                     bg-gradient-to-r from-white to-purple 
                     bg-[length:200%_auto] animate-gradient"
        >
          Designed to perfection
        </h2>
        <p className="text-gray-200 leading-relaxed">
          The earbuds take users on a seamless journey to quietude by creating a smooth,
          quick transition to active noise cancelling mode from the moment they’re removed
          from the case. Super small size makes these the most comfortable earbuds for
          sleeping. QuietOn 4 comes with four pairs of eartips of assorted sizes so one
          can choose the best fit, as well as a handy charging case that provides 28
          hours of ANC on a single charge. QuietOn 4 also boasts zero electromagnetic
          field (EMF) radiation due to not featuring any transmitters, receivers or
          connectivity options.
        </p>
      </motion.div>

      {/* RIGHT: 3D HOVER IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        whileHover={{ scale: 1.03, rotateX: 3, rotateY: -3 }}
        className="perspective"
      >
        <img
          src="/images/sleep-girl.png"
          alt="Person sleeping wearing the earbud"
          className="w-full rounded-2xl shadow-2xl object-cover"
        />
      </motion.div>

    </div>
  </div>
</section>
<section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-900 to-black">
      {/* Optional: particle/lines canvas */}
      <div className="absolute inset-0 pointer-events-none">
        <canvas id="particle-canvas" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12
                     bg-clip-text text-transparent
                     bg-gradient-to-r from-white to-purple
                     animate-gradient"
        >
          Find Your DreamShield Earbuds Near You
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* ─── LEFT: Map (spans 2/3) ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
            className="md:col-span-2 backdrop-blur-lg bg-white/10 border border-white/20
                       rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Replace this <img> with your Leaflet map component */}
            <img
              src="/images/map.jpg"
              alt="Dealers map"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>

          {/* ─── RIGHT: Dealer List (spans 1/3) ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="md:col-span-1 backdrop-blur-lg bg-white/10 border border-white/20
                       rounded-2xl shadow-lg p-6 max-h-[400px] overflow-y-auto"
          >
            <ol className="space-y-4 text-gray-200">
              {dealers.map((dealer) => (
                <li
                  key={dealer.id}
                  className="flex items-center hover:text-cyan-300 transition-colors"
                >
                  <button
                    onClick={() => setFlyToPosition(dealer.position)}
                    className="text-cyan-400 font-mono mr-3"
                  >
                    {dealer.id}.
                  </button>
                  <a
                    href={dealer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {dealer.name}
                  </a>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
        {/* 2. 3D Mockup Viewer */}
    <section
      id="how-it-works"
      className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-900 to-black"
    >
      {/* Optional particle background */}
      <div className="absolute inset-0 pointer-events-none">
        <canvas id="particle-canvas" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center space-y-8">
        {/* Animated gradient heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold
                     bg-clip-text text-transparent
                     bg-gradient-to-r from-white to-purple
                     animate-gradient"
        >
          How It Works
        </motion.h2>

        {/* Sub-heading copy */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Slide DreamShield over your ear, connect to our app, and let our
          real-time noise classification + ANC do the rest.
        </motion.p>

        {/* Viewer container as a glass-morphism card with 3D hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          whileHover={{ rotateX: 3, rotateY: -3, scale: 1.02 }}
          className="mx-auto max-w-3xl
                     backdrop-blur-lg bg-white/10 border border-white/20
                     rounded-2xl overflow-hidden shadow-lg"
        >
          {/* Your 3D Viewer component */}
            <Viewer />
        </motion.div>
      </div>
    </section>
        <section className="custom-bg py-16">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Column: Text */}
      <div className="space-y-6">
        <h2 className="text-4xl font-extrabold text-white">
          Experience Deep Relaxation
        </h2>
        <p className="text-white">
          Tired of tossing and turning? Our new SomnoSleep Earbuds combine
          gentle haptic feedback with personalized white noise to lull you into
          the perfect slumber. Designed specifically for side sleepers, they mold
          snugly around your ear without any pressure points.
        </p>
        <p className="text-white">
          With adaptive noise cancellation, SomnoSleep learns your sleep
          environment over time—automatically adjusting to block out snoring,
          traffic sounds, or a partner’s late‐night TV. Wake up feeling rested
          and ready for the day.
        </p>
        <p className="text-white">
          Slip on the earbuds, press play on your favorite sleep track or
          guided meditation, and drift away in comfort. No bulky headbands,
          just pure, uninterrupted rest.
        </p>
      </div>

      {/* Right Column: Image */}
      <div>
        <img
          src="/images/sleeping.png"
          alt="Couple peacefully sleeping with earbuds"
          className="w-full rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  </div>
</section>
   <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-900 to-black">
      {/* Optional particle background */}
      <div className="absolute inset-0 pointer-events-none">
        <canvas id="particle-canvas" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* single-column stack, with plenty of vertical gap */}
        <div className="grid grid-cols-1 gap-12">
          {images.map(({ src, alt }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.2 }}
              whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
              className="
                max-w-3xl mx-auto
                backdrop-blur-lg bg-white/10 border border-white/20
                rounded-2xl p-8 shadow-lg overflow-hidden
              "
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-96 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
        {/* 3. Testimonials */}
        <section className="container mx-auto px-4 lg:px-8 py-16">
          <TestimonialCarousel />
          <div className="text-center mt-8">
            <Link href="/clinical">
              <a className="px-6 py-3 bg-accent hover:bg-red-600 rounded-md text-white font-semibold">
                Read Clinical Studies
              </a>
            </Link>
          </div>
        </section>
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-900 to-black">
      {/* Optional particle background */}
      <div className="absolute inset-0 pointer-events-none">
        <canvas id="particle-canvas" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* Animated gradient heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            text-4xl md:text-5xl font-extrabold text-center mb-12
            bg-clip-text text-transparent
            bg-gradient-to-r from-white to-purple
            animate-gradient
          "
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
              className="
                backdrop-blur-lg bg-white/10 border border-white/20
                rounded-2xl shadow-lg overflow-hidden
              "
            >
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`
                        flex w-full justify-between px-6 py-4
                        text-lg md:text-xl font-medium
                        text-gray-200 hover:bg-white/20 transition-colors
                        focus:outline-none focus-visible:ring-2
                        focus-visible:ring-cyan-400 focus-visible:ring-opacity-50
                      `}
                    >
                      <span>{faq.question}</span>
                      <ChevronUpIcon
                        className={`
                          h-6 w-6 text-gray-200 transform
                          ${open ? "rotate-180" : ""}
                          transition-transform
                        `}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-6 pb-6 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
        {/* 4. Call to Action */}
 <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-900 to-black">
      {/* Optional particle/lines background */}
      <div className="absolute inset-0 pointer-events-none">
        <canvas id="particle-canvas" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center space-y-6">
        {/* Animated neon-heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            text-4xl md:text-5xl font-extrabold
            bg-clip-text text-transparent
            bg-gradient-to-r from-white to-purple
            animate-gradient
          "
        >
          Ready to Sleep Uninterrupted?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Pre‐order your DreamShield now and be among the first to experience
          truly restful nights.
        </motion.p>

        {/* Glass-morphic CTA button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          <Link href="/shop" passHref>
            <a
              className="
                inline-block px-10 py-4 rounded-2xl font-semibold
                backdrop-blur-lg bg-white/10 border border-white/20
                text-white text-lg md:text-xl
                shadow-lg hover:shadow-xl
                transition-all duration-300
                bg-accent hover:bg-red-600 rounded-lg 
                focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400
                animate-pulse-slow
              "
            >
              Pre-Order Now<br/>$120
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
      </main>
      <Footer />
    </>
  );
}
