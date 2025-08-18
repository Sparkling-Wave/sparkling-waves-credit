"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPhone, FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { name: "Home", href: "/", submenu: [] },
    {
      name: "About",
      href: "/about",
      submenu: [
        // { name: "Vision", href: "/vision" },
        // { name: "Mission", href: "/mission" },
        // { name: "Policy", href: "/policy" },
      ],
    },
    {
      name: "Our Loans",
      href: "/loans",
      submenu: [
        { name: "Cash Loan", href: "/loans/cash-loan" },
        { name: "Asset Loans", href: "/loans/asset-loan" },
      ],
    },
    // { name: "Analytics", href: "/analytics", submenu: [] },
    { name: "FAQ", href: "/faq", submenu: [] },
    { name: "Contact", href: "/contact", submenu: [] },
  ];

  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/img/logo.webp"
              alt="Sparkling Wave Investment Company Limited"
              width={160}
              height={50}
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link, idx) => (
            <div key={idx} className="relative group">
              <Link
                href={link.href}
                className="text-white hover:text-secondary font-medium flex items-center gap-1 transition-colors duration-200 py-2"
              >
                {link.name}
                {link.submenu.length > 0 && <FiChevronDown className="ml-1" />}
              </Link>

              {link.submenu.length > 0 && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <ul className="bg-white shadow-lg rounded-md border border-gray-100 min-w-[150px] py-1">
                    {link.submenu.map((sublink, subIdx) => (
                      <li key={subIdx}>
                        <Link
                          href={sublink.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200 first:rounded-t-md last:rounded-b-md"
                        >
                          {sublink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex space-x-4 items-center">
          <Link
            href="tel:07069615095"
            className="flex items-center gap-2 text-white hover:text-primary transition-colors duration-200"
          >
            <FiPhone className="text-white" /> 0706 961 5095
          </Link>
          <Link
            href="/apply"
            className="bg-transparent border border-white text-white px-6 py-2.5 rounded-md hover:bg-primary-90 hover:border-none transition-all duration-200 font-medium shadow-sm hover:shadow-md"
          >
            Apply for a Loan
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-white hover:text-primary transition-colors duration-200"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <FiX className="text-2xl" />
          ) : (
            <FiMenu className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[88px] z-40 transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <nav className="bg-white shadow-lg border-t border-gray-100">
          <ul className="flex flex-col p-4 space-y-2">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="block py-2 font-medium text-gray-700 hover:text-primary transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.submenu.length > 0 && (
                  <ul className="pl-4 mt-1 space-y-1">
                    {link.submenu.map((sublink, subIdx) => (
                      <li key={subIdx}>
                        <Link
                          href={sublink.href}
                          className="block py-1 text-gray-600 hover:text-primary transition-colors duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sublink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            {/* Mobile CTA */}
            <li className="pt-4 border-t border-gray-100">
              <Link
                href="/apply"
                className="block w-full bg-primary text-white px-4 py-3 rounded-md text-center font-medium hover:bg-primary-90 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Apply for a Loan
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
