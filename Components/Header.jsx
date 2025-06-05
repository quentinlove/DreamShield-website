// components/Header.jsx
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/product", label: "Product" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/clinical", label: "Clinical" },
    { href: "/shop", label: "Shop" },
    { href: "/support", label: "Support" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
        <Link href="/">
          <a className="text-2xl font-bold text-primary">DreamShield</a>
        </Link>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className="text-gray-700 hover:text-primary">{link.label}</a>
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden text-gray-700 hover:text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className="text-gray-700 hover:text-primary">{link.label}</a>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
