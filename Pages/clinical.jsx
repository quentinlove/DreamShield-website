// pages/clinical.jsx
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import Link from "next/link";

export default function Clinical() {
  return (
    <>
      <Head>
        <title>Clinical Evidence • DreamShield</title>
      </Head>
      <Header />
      <main className="pt-16">
        <section className="bg-light py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-primary mb-4">
              Clinical Evidence & Studies
            </h1>
            <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
              DreamShield has been tested in multiple pilot studies—see how we reduce
              awakenings, improve total sleep time, and earn endorsements from leading
              sleep clinics.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Study Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow flex flex-col">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  McMaster Sleep Clinic Pilot
                </h3>
                <p className="text-gray-600 mb-4">
                  20 patients, 4-week crossover study showed a 45% reduction in WASO
                  when using DreamShield ANC + haptics.
                </p>
                <Link href="/docs/mcmaster‐pilot.pdf">
                  <a
                    className="mt-auto inline-block px-4 py-2 bg-accent hover:bg-red-600 text-white rounded-md"
                    target="_blank"
                  >
                    View Report
                  </a>
                </Link>
              </div>
              {/* Study Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow flex flex-col">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Toronto University Sleep Lab
                </h3>
                <p className="text-gray-600 mb-4">
                  Validated edge‐ML noise classification with 90%+ accuracy across snore, traffic, pet, and ambient sounds.
                </p>
                <Link href="/docs/uoft-classification.pdf">
                  <a
                    className="mt-auto inline-block px-4 py-2 bg-accent hover:bg-red-600 text-white rounded-md"
                    target="_blank"
                  >
                    View Whitepaper
                  </a>
                </Link>
              </div>
              {/* Study Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow flex flex-col">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Corporate Wellness Pilot (Virgin Pulse)
                </h3>
                <p className="text-gray-600 mb-4">
                  50 shift workers recorded a 30% improvement in daytime alertness after 2 months of DreamShield use.
                </p>
                <Link href="/docs/virginpulse-pilot.pdf">
                  <a
                    className="mt-auto inline-block px-4 py-2 bg-accent hover:bg-red-600 text-white rounded-md"
                    target="_blank"
                  >
                    View Findings
                  </a>
                </Link>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-primary mb-8">
              Clinician & Patient Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Testimonial
                name="Dr. Samantha Lee"
                role="PhD, Sleep Researcher"
                avatar="/images/avatar-samantha.webp"
                quote="DreamShield’s data matched PSG outcomes 92% of the time. It’s a game-changer for home-based sleep interventions."
              />
              <Testimonial
                name="Michael Turner"
                role="Night Shift Nurse"
                avatar="/images/avatar-michael.webp"
                quote="I finally sleep through my days off. DreamShield wakes me only for real alarms, never for passing traffic."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
