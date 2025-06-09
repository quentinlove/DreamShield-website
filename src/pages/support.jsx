// pages/support.jsx
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FAQItem from "../Components/FAQItem";
import { motion } from "framer-motion";


export default function Support() {

const reviews = [
  {
    source: "Tech Dreams Magazine",
    quote:
      "“DreamShield’s noise-cancelling earbuds gave me the deepest sleep I’ve had in years.”",
    link: {
      href: "https://techdreams.example.com/dreamshield-review",
      text: "Read the full review →",
    },
  },
  {
    source: "Snooze Daily",
    quote:
      "“Sleek, comfortable, and shockingly effective – DreamShield is a game-changer.”",
    link: {
      href: "https://snoozedaily.example.com/dreamshield-snooze",
      text: "Check it out →",
    },
  },
  {
    source: "Quiet Lifestyle",
    quote:
      "“I never knew silence could feel so…alive. These earbuds are magic.”",
    link: {
      href: "https://quietlifestyle.example.com/dreamshield",
      text: "Learn more →",
    },
  },
  // …add as many as you like
];
  return (
    <>
      <Head>
        <title>Support • DreamShield</title>
      </Head>
      <Header />
      <main className="pt-16">
         <section
      className="
        relative py-20
        bg-[url('/images/bed-sheet.jpg')] bg-cover bg-center
      "
    >
      {/* Optional: a subtle tinted overlay */}
      <div className="absolute inset-0 bg-white/30"></div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Reviews about DreamShield
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          See what the press and bloggers are saying about our noise-cancelling
          sleeping earbuds.
        </p>
      </div>

      <div
        className="
          relative z-10 container mx-auto px-4 lg:px-8
          columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6
        "
      >
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            className="
              break-inside-avoid
              bg-white rounded-xl p-6 shadow-lg
              hover:shadow-2xl transition-shadow
            "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              {r.source}
            </h3>
            <blockquote className="italic text-gray-600 mb-4">{r.quote}</blockquote>
            <a
              href={r.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:underline font-medium"
            >
              {r.link.text}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
        <section className="bg-light py-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-xl">
            <h2 className="text-3xl font-semibold text-primary mb-6">
              Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              Have more questions? Fill out the form below, and we’ll get back
              within 24 hours.
            </p>
            {/* Simple contact form (no backend)—point to EmailJS or Zendesk */}
            <form
              action="https://formspree.io/f/your-form-id"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-accent hover:text-white transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
