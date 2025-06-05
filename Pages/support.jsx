// pages/support.jsx
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQItem from "../components/FAQItem";

export default function Support() {
  const faqs = [
    {
      q: "How do I know my size?",
      a: "Measure around the back of your ear. Our stretch‐fit shell adapts, but if you need assistance, contact support for a free cushion swap.",
    },
    {
      q: "How do I charge DreamShield?",
      a: "Use the included USB-C cable. A red LED indicates charging; green when full. It takes 60 minutes to go from 0% to 100%.",
    },
    {
      q: "How do I clean the earcup?",
      a: "Remove foam + PCM insert, wipe silicone shell with a damp cloth, allow to fully dry before reassembly.",
    },
    {
      q: "Does DreamShield work for side sleepers?",
      a: "Yes—our BOA tension dial and memory foam liner are engineered for all side positions. If you find discomfort, return within 30 days.",
    },
    {
      q: "What if I have a snoring partner?",
      a: "DreamShield’s ANC blocks snoring, and haptic alerts wake you gently if needed—no more kicking covers.",
    },
    {
      q: "Can I wear it with glasses or a CPAP mask?",
      a: "Our slim-profile shell fits around most eyeglass frames; CPAP mask wearers can still enjoy reduced noise, but ensure proper fit.",
    },
  ];

  return (
    <>
      <Head>
        <title>Support • DreamShield</title>
      </Head>
      <Header />
      <main className="pt-16">
        <section className="bg-white py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-4xl font-extrabold text-primary mb-8">
              Support & FAQ
            </h1>
            <div className="space-y-4">
              {faqs.map((item, idx) => (
                <FAQItem key={idx} question={item.q} answer={item.a} />
              ))}
            </div>
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
