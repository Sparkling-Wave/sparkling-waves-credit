"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiUsers,
  FiTrendingUp,
  FiShield,
  FiHeart,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";

export default function PolicyPage() {
  const policySections = [
    {
      icon: FiUsers,
      title: "Customer-Centric Approach",
      description:
        "We are dedicated to providing exceptional service to our clients with transparent processes and personalized solutions.",
      features: [
        "Exceptional Service with trained customer service team",
        "Transparent Processes with clear information",
        "Personalized Solutions tailored to individual needs",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FiTrendingUp,
      title: "Investor Assurance",
      description:
        "We adhere to the highest standards of financial management with transparent reporting and strategic growth focus.",
      features: [
        "Robust Financial Management with risk minimization",
        "Transparent Reporting with regular performance updates",
        "Strategic Growth through innovation and new markets",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: FiShield,
      title: "Employee Empowerment",
      description:
        "We invest in continuous development and maintain an inclusive culture that fosters collaboration and innovation.",
      features: [
        "Continuous Development through training programs",
        "Inclusive Culture promoting diversity and respect",
        "Collaboration and Innovation for better solutions",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: FiHeart,
      title: "Sustainable Practices",
      description:
        "We conduct business with the highest ethical standards and are dedicated to making a positive community impact.",
      features: [
        "Ethical Operations with integrity and accountability",
        "Community Engagement through local initiatives",
        "Positive Impact on community well-being",
      ],
      color: "from-red-500 to-red-600",
    },
  ];

  const coreValues = [
    "Building people who build business",
    "Transparency in all operations",
    "Customer satisfaction as priority",
    "Ethical business practices",
    "Community development focus",
    "Innovation and growth mindset",
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url(/img/banner/bradcam13.png)",
          }}
        ></div>

        {/* Primary Color Overlay with 50% opacity */}
        <div className="absolute inset-0 bg-primary opacity-50 z-10"></div>

        <div className="container mx-auto px-12 relative z-20">
          <div className="text-center max-w-4xl mx-auto pt-24">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-secondary">Policy</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Building people who build business - Our core philosophy that
              shapes everything we do
            </p>
          </div>
        </div>
      </section>

      {/* Main Policy Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Company Policy
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Sparkling Wave Investment Company Limited, our core belief is
              simple yet profound:
              <strong className="text-primary">
                {" "}
                You do not build business; you build people, and people build
                business.
              </strong>
              This philosophy shapes our policies, drives our initiatives, and
              fuels our commitment to excellence. We aim to foster an
              environment that attracts customers and investors alike while
              promoting the sustainable success and growth of our company.
            </p>
          </div>

          {/* Policy Sections Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {policySections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto ${section.color} text-white`}
                >
                  <section.icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {section.title}
                </h3>

                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {section.description}
                </p>

                <ul className="space-y-3">
                  {section.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Core Values Section */}
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-12 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h3>
              <p className="text-lg text-gray-600">
                The principles that guide our every decision and action
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-4"
                >
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-800 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="bg-gradient-to-r from-primary-900 to-primary-700 rounded-2xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-6">Conclusion</h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-4xl mx-auto">
              At Sparkling Wave Investment Company Limited, our policies reflect
              our unwavering commitment to our customers, investors, employees,
              and community. By focusing on people, we build a robust and
              successful business that not only meets but exceeds expectations.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Together, we can achieve extraordinary success. Welcome to
              Sparkling Wave – where we build people who build business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-secondary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-secondary-400 transition-all duration-300"
              >
                Learn More About Us
                <FiArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get in Touch
                <FiArrowRight className="w-5 h-5" />
              </Link>
            </div>
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
                Ready to Experience Our Values?
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                Apply for a loan today and see how our people-first approach
                makes a difference in your financial journey.
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
