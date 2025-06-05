// pages/product.jsx
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { Tab } from "@headlessui/react";

export default function Product() {
  return (
    <>
      <Head>
        <title>Product • DreamShield</title>
      </Head>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-light py-20">
          <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="/images/product-hero.webp"
                alt="DreamShield Ear-Cuff"
                className="w-full rounded-lg shadow"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h1 className="text-4xl font-extrabold text-primary mb-4">
                DreamShield Ear-Cuff
              </h1>
              <p className="text-gray-700 mb-6">
                Our flagship side-sleep–optimized ANC ear‐cuff features:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="mr-2 text-accent">•</span>Real-time noise
                  classification (snore, traffic, alarm)
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-accent">•</span>Active Noise
                  Cancellation (ANC) tuned for side-sleep
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-accent">•</span>Gentle vibration
                  alerts for critical sounds
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-accent">•</span>12+ hour battery
                  + USB-C quick-charge
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-accent">•</span>Ergonomic memory
                  foam + PCM liner with BOA tension dial
                </li>
              </ul>
              <div className="space-x-4">
                <Link href="/shop">
                  <a className="px-6 py-3 bg-accent hover:bg-red-600 rounded-md font-semibold text-white">
                    Buy Now – \$120
                  </a>
                </Link>
                <Link href="/how-it-works">
                  <a className="px-6 py-3 border border-gray-300 hover:bg-gray-200 rounded-md font-semibold">
                    How It Works
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications & Tabs */}
        <section className="container mx-auto px-4 lg:px-8 py-16">
          <Tab.Group>
            <Tab.List className="flex space-x-4 border-b">
              {["Specs", "Components", "Use Cases", "Warranty"].map((tab) => (
                <Tab
                  key={tab}
                  className={({ selected }) =>
                    `px-4 py-2 font-medium ${
                      selected
                        ? "text-primary border-b-2 border-accent"
                        : "text-gray-600 hover:text-primary"
                    }`
                  }
                >
                  {tab}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              {/* Specs Panel */}
              <Tab.Panel className="pt-6">
                <table className="w-full text-left text-gray-700">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Dimensions</td>
                      <td className="py-2">65 × 50 × 20 mm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Weight</td>
                      <td className="py-2">20 g</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Battery</td>
                      <td className="py-2">3.7 V 350 mAh LiPo, 12+ hr runtime</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Connectivity</td>
                      <td className="py-2">Bluetooth 5.0 Low Energy</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Sensors</td>
                      <td className="py-2">MEMS mic (I²S), LRA haptic, PPG (heart rate)</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Materials</td>
                      <td className="py-2">
                        Medical-grade silicone, memory foam + PCM, 3D-knit shell
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Tab.Panel>

              {/* Components Panel */}
              <Tab.Panel className="pt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "MEMS Mic (SPH0645)",
                      desc: "High-fidelity I²S microphone for real-time noise capture.",
                      image: "/images/comp-mic.webp",
                    },
                    {
                      name: "ANC SoC (nRF52840)",
                      desc: "ARM Cortex-M4 with built-in DSP and Bluetooth LE.",
                      image: "/images/comp-anc.webp",
                    },
                    {
                      name: "Haptic Driver (DRV2605)",
                      desc: "Precision LRA driver for gentle vibration alerts.",
                      image: "/images/comp-haptic.webp",
                    },
                    {
                      name: "Battery (LiPo 350 mAh)",
                      desc: "Ultra-thin pouch cell for 12+ hour continuous use.",
                      image: "/images/comp-battery.webp",
                    },
                    {
                      name: "Ice-Core (PCM + Foam)",
                      desc: "BASF PCM layer within memory foam for temperature control.",
                      image: "/images/comp-icecore.webp",
                    },
                    {
                      name: "BOA Dial",
                      desc: "Adjustable stainless cable tension system for perfect fit.",
                      image: "/images/comp-dial.webp",
                    },
                  ].map((c) => (
                    <div key={c.name} className="flex items-start space-x-4">
                      <img
                        src={c.image}
                        alt={c.name}
                        className="w-16 h-16 rounded-md shadow"
                      />
                      <div>
                        <p className="font-semibold text-primary">{c.name}</p>
                        <p className="text-gray-600">{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab.Panel>

              {/* Use Cases Panel */}
              <Tab.Panel className="pt-6">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    <strong>Urban Professionals:</strong> Block traffic, nightlife, and HVAC noise to sleep uninterrupted.
                  </li>
                  <li>
                    <strong>Night-Shift Workers:</strong> ANC during daytime sleep, vibration alerts for alarms or emergencies.
                  </li>
                  <li>
                    <strong>Partners of Snorers:</strong> Discreet haptic notifications so you wake without disturbing your partner.
                  </li>
                  <li>
                    <strong>Frequent Travelers:</strong> Compact design fits in carry-ons, 12+ hr battery for multi-night hotel stays.
                  </li>
                  <li>
                    <strong>Sleep Clinic Patients:</strong> Clinically validated, data‐driven coaching, HIPAA-secure data sharing with physicians.
                  </li>
                </ul>
              </Tab.Panel>

              {/* Warranty Panel */}
              <Tab.Panel className="pt-6">
                <p className="text-gray-700 mb-4">
                  All DreamShield devices come with a 1‐year limited warranty covering manufacturer defects. We also offer a 30‐day Fit Guarantee:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>If DreamShield doesn’t fit comfortably for side sleep, return it within 30 days for a full refund or free cushion swap.</li>
                  <li>Battery failure within 1 year? We’ll replace your earcup free of charge.</li>
                  <li>Extended Warranty available for \$19.99/year (covers accidental damage and one extra cushion kit).</li>
                </ul>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </section>

        {/* Call to Action Footer */}
        <section className="bg-secondary text-white py-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Elevate Your Sleep?
            </h2>
            <Link href="/shop">
              <a className="px-8 py-4 bg-accent hover:bg-red-600 rounded-lg font-semibold">
                Buy DreamShield for \$120
              </a>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
