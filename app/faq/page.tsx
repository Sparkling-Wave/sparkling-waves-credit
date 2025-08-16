"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  const faqData = [
    {
      question: "Are there any hidden fees or charges?",
      answer: "Yes, when there is default.",
    },
    {
      question: "Can I repay my loan early without penalties?",
      answer: "Yes, you can.",
    },
    {
      question: "What happens if I miss a payment?",
      answer: "You will pay default charges.",
    },
    {
      question: "Is my personal information secure with your company?",
      answer: "Absolutely yes.",
    },
    {
      question: "Do you offer loan refinancing options?",
      answer: "Yes",
    },
    {
      question: "Can I use the loan for any purpose?",
      answer: "No, its for the specified purpose why it was disbursed to you.",
    },
    {
      question:
        "How do I contact customer support if I have questions or concerns?",
      answer: "You can call or whatsapp us.",
    },
    {
      question: "What happens if I need to extend the loan term?",
      answer:
        "It's not granted, You will have to pay back on the agreed date, day & month.",
    },
    {
      question:
        "Do you offer any discounts or promotions for returning customers?",
      answer: "No Discount.",
    },
  ];

  const brands = [
    { src: "/img/brand/brand1.png", alt: "Brand 1", href: "" },
    {
      src: "/img/brand/brand2.png",
      alt: "Brand 2",
      href: "https://www.coastresearchtechnology.com.ng",
    },
    { src: "/img/brand/brand3.png", alt: "Brand 3", href: "" },
    {
      src: "/img/brand/brand4.png",
      alt: "Brand 4",
      href: "https://greenwayinfotech.netlify.app/",
    },
    { src: "/img/brand/brand5.png", alt: "Brand 5", href: "" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url(/img/banner/bradcam7.png)",
          }}
        ></div>

        {/* Primary Color Overlay with 50% opacity */}
        <div className="absolute inset-0 bg-primary opacity-50 z-10"></div>

        <div className="container mx-auto px-12 relative z-20">
          <div className="text-center max-w-4xl mx-auto pt-24">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-secondary">FAQ</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Find answers to commonly asked questions about our loan services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Get answers to the most common questions about our loan services,
              application process, and policies
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <div
                    className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-6 transition-all duration-300 ease-in-out"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    <div
                      className={`transition-transform duration-300 ease-in-out ${
                        openFAQ === index ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      {openFAQ === index ? (
                        <FiChevronUp className="text-primary text-2xl" />
                      ) : (
                        <FiChevronDown className="text-primary text-2xl" />
                      )}
                    </div>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFAQ === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Trusted by leading companies and organizations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {brands.map((brand, index) => (
              <div key={index} className="flex justify-center">
                {brand.href ? (
                  <a
                    href={brand.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-300"
                  >
                    <Image
                      src={brand.src}
                      alt={brand.alt}
                      width={120}
                      height={80}
                      className="object-contain"
                    />
                  </a>
                ) : (
                  <div className="hover:scale-110 transition-transform duration-300">
                    <Image
                      src={brand.src}
                      alt={brand.alt}
                      width={120}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-900 to-primary-700 text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url(/img/banner/loan.png)",
          }}
        ></div>

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-primary-900 opacity-50 z-10"></div>

        <div className="container mx-auto px-12 relative z-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Apply for a Business, Asset or Cash loan.
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                Ready to take your business to the next level? Get started with
                our quick and easy loan application process.
              </p>
            </div>
            <div className="text-center lg:text-right">
              <Link
                href="/apply"
                className="inline-block bg-secondary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-secondary-400 transition-all duration-300 text-lg"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
