// pages/index.jsx
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import FeatureCard from "../Components/FeatureCard";
import Testimonial from "../components/Testimonial";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home • DreamShield</title>
      </Head>
      <Header />
      <main className="pt-16">
        <Hero />

        {/* 1. Key Features */}
        <section className="container mx-auto px-4 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Why DreamShield?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon="/images/icon-anc.svg"
              title="Real-Time ANC & Noise Classification"
              description="Our on-ear sensor detects snoring, traffic & alarms—ANC circuitry cancels them instantly."
            />
            <FeatureCard
              icon="/images/icon-comfort.svg"
              title="Side-Sleep Comfort"
              description="Memory-foam + PCM liner, stretchy knit shell & BOA dial give a perfect, pressure-free fit."
            />
            <FeatureCard
              icon="/images/icon-battery.svg"
              title="12+ Hour Battery & Rapid Charge"
              description="Sleep all night on a single charge. USB-C quick-charge gives 4 hrs power in 15 minutes."
            />
            <FeatureCard
              icon="/images/icon-app.svg"
              title="Data-Driven Sleep Coaching"
              description="Track sleep stages, interruptions & nightly trends in our companion app—get personalized tips."
            />
            <FeatureCard
              icon="/images/icon-privacy.svg"
              title="HIPAA-Grade Privacy"
              description="Your sleep data is encrypted, stored securely, and never shared without your permission."
            />
            <FeatureCard
              icon="/images/icon-community.svg"
              title="In-App Community & Support"
              description="Join peer tips, expert Q&A & referral rewards. You’re never alone in your sleep journey."
            />
          </div>
        </section>

        {/* 2. 3D Mockup Viewer */}
        <section id="how-it-works" className="bg-light py-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              How It Works
            </h2>
            <p className="text-gray-700 mb-10">
              Slide DreamShield over your ear, connect to our app, and let our
              real-time noise classification + ANC do the rest.
            </p>
            <div className="max-w-3xl mx-auto">
              <Viewer />
            </div>
          </div>
        </section>

        {/* 3. Testimonials */}
        <section className="container mx-auto px-4 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            What Early Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Testimonial
              name="Emma Liu"
              role="Content Strategist"
              avatar="/images/avatar-emma.webp"
              quote="DreamShield changed how I work—no more midday grogginess. I sleep uninterrupted!"
            />
            <Testimonial
              name="Dr. Raymond Gottschalk"
              role="Sleep Clinic Director"
              avatar="/images/avatar-raymond.webp"
              quote="Our patients report 50% fewer awakenings. The data integration is invaluable for therapy."
            />
          </div>
          <div className="text-center mt-8">
            <Link href="/clinical">
              <a className="px-6 py-3 bg-accent hover:bg-red-600 rounded-md text-white font-semibold">
                Read Clinical Studies
              </a>
            </Link>
          </div>
        </section>

        {/* 4. Call to Action */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Sleep Uninterrupted?
            </h2>
            <p className="mb-8">
              Pre‐order your DreamShield now and be among the first to experience
              truly restful nights.
            </p>
            <Link href="/shop">
              <a className="px-8 py-4 bg-accent hover:bg-red-600 rounded-lg font-semibold">
                Pre‐Order Now
              </a>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
