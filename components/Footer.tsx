"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Button from "@/components/ui/Button";
import { useState } from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-primary text-white w-full">
      {/* Footer Top */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Logo & Contact */}
        <div className="space-y-6">
          <Link href="/" className="block transition-transform hover:scale-105">
            <Image
              src="/img/logo.webp"
              alt="Sparkling Wave Investment Company Limited"
              width={180}
              height={60}
              priority
              className="brightness-0 invert"
            />
          </Link>
          <div className="space-y-4 text-gray-100">
            <div className="flex items-center gap-3 group">
              <FaEnvelope className="w-5 h-5 text-secondary transition-transform group-hover:scale-110" />
              <a
                href="mailto:hello@sparklingwavelimited.com.ng"
                className="hover:text-secondary transition-colors duration-200"
              >
                hello@sparklingwavelimited.com.ng
              </a>
            </div>
            <div className="flex items-center gap-3 group">
              <FaPhone className="w-5 h-5 text-secondary transition-transform group-hover:scale-110" />
              <a
                href="tel:+2347069615095"
                className="hover:text-secondary transition-colors duration-200"
              >
                0706 961 5095
              </a>
            </div>
            <div className="flex items-start gap-3 group">
              <FaMapMarkerAlt className="w-5 h-5 text-secondary flex-shrink-0 transition-transform group-hover:scale-110" />
              <p className="hover:text-secondary transition-colors duration-200">
                Suite 2C, No 11, Rofab Shopping Complex, Sango-Eleyele Road,
                Ibadan, Oyo State.
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://www.facebook.com/profile.php?id=61555966546717&mibextid=ZbWKwL"
              target="_blank"
              className="bg-white/10 p-3 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <FaFacebookF className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/sparkling-wave"
              target="_blank"
              className="bg-white/10 p-3 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </Link>
            <Link
              href="https://x.com/Sparklingw31303"
              target="_blank"
              className="bg-white/10 p-3 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <FaTwitter className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.instagram.com/sparklingwave247"
              target="_blank"
              className="bg-white/10 p-3 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-secondary">Our Services</h3>
          <ul className="space-y-4">
            <li>
              <Link
                href="/loans/cash-loan"
                className="hover:text-secondary transition-colors duration-200 flex items-center gap-2 group"
              >
                <span className="w-2 h-2 bg-secondary rounded-full group-hover:scale-125 transition-transform duration-200"></span>
                Cash Loan
              </Link>
            </li>
            <li>
              <Link
                href="/loans/asset-loan"
                className="hover:text-secondary transition-colors duration-200 flex items-center gap-2 group"
              >
                <span className="w-2 h-2 bg-secondary rounded-full group-hover:scale-125 transition-transform duration-200"></span>
                Asset Loan
              </Link>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-secondary">Quick Links</h3>
          <ul className="space-y-4">
            <li>
              <Link
                href="/about"
                className="hover:text-secondary transition-colors duration-200 flex items-center gap-2 group"
              >
                <span className="w-2 h-2 bg-secondary rounded-full group-hover:scale-125 transition-transform duration-200"></span>
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-secondary transition-colors duration-200 flex items-center gap-2 group"
              >
                <span className="w-2 h-2 bg-secondary rounded-full group-hover:scale-125 transition-transform duration-200"></span>
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="hover:text-secondary transition-colors duration-200 flex items-center gap-2 group"
              >
                <span className="w-2 h-2 bg-secondary rounded-full group-hover:scale-125 transition-transform duration-200"></span>
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-secondary">Newsletter</h3>
          <p className="text-gray-100">
            Stay updated with our latest news and special offers
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `mailto:hello@sparklingwavelimited.com.ng?subject=Newsletter Subscription&body=Please subscribe me with email: ${email}`;
              setEmail("");
            }}
            className="space-y-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:border-secondary focus:ring-2 focus:ring-secondary/50 outline-none transition-all duration-200 placeholder:text-gray-400 text-white"
            />
            <Button type="submit" variant="secondary" fullWidth>
              Subscribe Now
            </Button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-300 text-sm">
            &copy; {currentYear} Sparkling Wave Investments Limited. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
