// pages/about.jsx
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function About() {
  const partners = [
    {
      category: "Sleep Clinics & Wellness Centers",
      items: [
        "McMaster Sleep Disorders Clinic (Pilot Testing, Co-Marketing)",
        "Toronto University Sleep Lab (Clinical Validation, Data Sharing)",
      ],
    },
    {
      category: "Component Suppliers & OEMs",
      items: [
        "Knowles / TDK (MEMS Microphone)",
        "Nordic Semiconductor (nRF52840 SoC)",
        "BOA Technology Inc. (Tension Dial Mechanism)",
        "Schoeller Textil AG (3D-Knit Fabric Shell)",
        "BASF SE (Memory Foam + PCM “Ice-Core”)",
        "Outlast® Technologies (PCM Inserts)",
        "Texas Instruments (Integrated Bio-Sensor Module)",
        "Murata / VARTA Microbattery (LiPo Cells)",
      ],
    },
    {
      category: "Mental Health & Therapy Practices",
      items: [
        "Anxiety & Insomnia Center, Toronto (Referrals, Workshops)",
        "Mindful Sleep Therapies (Behavioral Data Integration)",
      ],
    },
    {
      category: "Manufacturing & Assembly Partners",
      items: ["NorthStar EMS (Wearable Audio CM)", "FoamTech Inc. (Cushioning)"],
    },
    {
      category: "Smart-Home & IoT Ecosystem",
      items: ["Philips Hue", "SmartThings", "Amazon Alexa", "Apple HomeKit"],
    },
    {
      category: "Cloud & Analytics Infrastructure",
      items: [
        "Firebase (Google Cloud) – Real-Time DB & Push",
        "AWS / Azure – HIPAA-Compliant Storage & ML",
        "SecureData Consultants – Data Security & Compliance",
      ],
    },
    {
      category: "Distribution & E-Commerce Channels",
      items: [
        "Shopify – DTC Platform",
        "WooCommerce – B2B / Wholesale Portal",
        "Best Buy, Apple Store – Retail Partners",
        "Co-Working Spaces, Airport Lounges – Pop-Up Partners",
      ],
    },
    {
      category: "Clinical & Research Collaborators",
      items: [
        "McMaster University Sleep Lab",
        "University of Toronto Sleep Research Group",
        "Virgin Pulse, Limeade – Corporate Wellness Providers",
        "Consumer Technology Association, National Sleep Foundation",
      ],
    },
    {
      category: "Marketing & Community Partners",
      items: [
        "SleepTech Reviews (YouTube, TikTok)",
        "Wellness & Productivity Podcasts (Huberman Lab, Sleep Junkies)",
        "American Sleep Apnea Association (Patient Advocacy)",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>About & Partners • DreamShield</title>
      </Head>
      <Header />
      <main className="pt-16">
        <section className="bg-white py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-primary mb-6">
              About DreamShield
            </h1>
            <p className="text-gray-700 max-w-3xl mx-auto mb-12">
              Founded in 2024 at McMaster Innovation Park, DreamShield is on a
              mission to give everyone—regardless of noise profile—the chance to
              sleep uninterrupted. From academy-backed research to partnerships
              with top-tier components suppliers, our ecosystem ensures the
              highest standards in comfort, privacy, and clinical efficacy.
            </p>
            <img
              src="/images/team_photo.webp"
              alt="DreamShield Team"
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="bg-light py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Our Key Partners
            </h2>
            <div className="space-y-12">
              {partners.map((group) => (
                <div key={group.category}>
                  <h3 className="text-2xl font-semibold text-secondary mb-4">
                    {group.category}
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
