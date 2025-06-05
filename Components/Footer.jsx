// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="container mx-auto px-4 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-semibold mb-2">DreamShield</h4>
          <p className="text-gray-300">
            Side-sleep–optimized ANC ear‐cuff<br />
            Real-time noise classification + haptics.<br />
            data-driven sleep coaching.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            {["/", "/product", "/how-it-works", "/clinical", "/shop", "/support", "/about"].map(
              (href) => (
                <li key={href}>
                  <Link href={href}>
                    <a className="text-gray-300 hover:text-white capitalize">
                      {href.replace("/", "") || "home"}
                    </a>
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">Contact & Follow</h4>
          <p className="text-gray-300">support@dreamshield.co</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <svg
                className="w-6 h-6 fill-current text-gray-300 hover:text-white"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.2 4.2 0 001.85-2.32 8.24 8.24 0 01-2.62 1 4.13 4.13 0 00-7.03 3.76 11.7 11.7 0 01-8.5-4.3 4.13 4.13 0 001.28 5.5 4.06 4.06 0 01-1.87-.52v.05a4.13 4.13 0 003.31 4.05 4.2 4.2 0 01-1.86.07 4.13 4.13 0 003.85 2.86 8.28 8.28 0 01-5.13 1.76A8.35 8.35 0 012 19.54a11.7 11.7 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.68 0-.18-.01-.36-.02-.54A8.35 8.35 0 0024 5.5a8.24 8.24 0 01-2.36.65 4.1 4.1 0 001.8-2.27z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <svg
                className="w-6 h-6 fill-current text-gray-300 hover:text-white"
                viewBox="0 0 24 24"
              >
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3zm10 1a1 1 0 100 2 1 1 0 000-2zm-5 2a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              <svg
                className="w-6 h-6 fill-current text-gray-300 hover:text-white"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48s1.34 2.98 2.98 2.98c1.64 0 2.98-1.34 2.98-2.98S6.62 3.5 4.98 3.5zM.5 8.98h8.96v14.52H.5V8.98zM9.64 8.98h8.6v2.03h.12c1.2-2.27 4.15-4.67 8.53-4.67 9.12 0 10.8 6.01 10.8 13.83v15.17h-8.96v-13.5c0-3.22-.06-7.37-4.49-7.37-4.49 0-5.17 3.5-5.17 7.12v13.75H9.64V8.98z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-secondary text-gray-300 text-center py-4">
        <p>© {new Date().getFullYear()} DreamShield. All rights reserved.</p>
      </div>
    </footer>
  );
}
