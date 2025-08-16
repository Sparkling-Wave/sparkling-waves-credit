"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiCheckCircle,
  FiChevronDown,
  FiTrendingUp,
  FiBriefcase,
  FiDollarSign,
  FiZap,
  FiAward,
  FiStar,
} from "react-icons/fi";

export default function AssetLoanPage() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  const assetLoanServices = [
    {
      icon: FiStar,
      title: "Asset Loan",
      tier: "Silver",
      range: "N500,000 - N2,500,000",
      features: [
        "Lease - N5,000,000 over 20 months",
        "Interest rate - Affordable rate",
      ],
      description:
        "Do you want to purchase an asset and you are low on cash? Don't worry we got you covered. Get your dream asset.",
      bgColor: "from-gray-600 to-gray-800",
    },
    {
      icon: FiAward,
      title: "Asset Loan",
      tier: "Gold",
      range: "N2,500,000 - N4,500,000",
      features: [
        "Lease - N5,000,000 over 20 months",
        "Interest rate - Affordable rate",
      ],
      description:
        "Do you want to purchase an asset and you are low on cash? Don't worry we got you covered. Get your dream asset.",
      bgColor: "from-yellow-600 to-yellow-800",
    },
    {
      icon: FiZap,
      title: "Asset Loan",
      tier: "Diamond",
      range: "N4,500,000 - N7,000,000",
      features: [
        "Lease - N5,000,000 over 20 months",
        "Interest rate - Affordable rate",
      ],
      description:
        "Do you want to purchase an asset and you are low on cash? Don't worry we got you covered. Get your dream asset.",
      bgColor: "from-blue-600 to-blue-800",
    },
  ];

  const whyChooseUs = [
    "Quick and Easy Processing",
    "Lowest Processing Fee",
    "Flexible Repayment Options",
    "Dedicated Customer Support",
    "Transparent and Reliable Service",
  ];

  const howItWorks = [
    {
      number: "01",
      title: "Apply for loan",
      description:
        "Apply now for a tailored loan to meet your company's cash requirements and preferred term. Our flexible loan options are designed to accommodate your unique needs, ensuring quick access to the necessary funds. Don't let financial constraints hinder your business ambitions; take advantage of our customizable lending solutions for expedited funding and seamless growth.",
    },
    {
      number: "02",
      title: "Application review",
      description:
        "During the review process, we will assess various factors including but not limited to your financial history, creditworthiness, collateral (if applicable), and the purpose of the loan/asset acquisition. Our goal is to provide you with a fair and transparent evaluation while maintaining the highest standards of confidentiality and professionalism.",
    },
    {
      number: "03",
      title: "Get funding fast",
      description:
        "Secure fast funding tailored to your company's cash needs and term preferences. Our flexible loan customization ensures quick access to the required amount, with terms that suit your business goals. Don't let financial constraints slow you down; leverage our expedited funding solutions for swift business growth.",
    },
  ];

  const faqData = [
    {
      question: "How long does the loan approval take?",
      answer:
        "The duration of the loan approval process can vary depending on several factors, including the lender's internal procedures, the complexity of the loan application, and the completeness of the applicant's documentation. In general, the process typically takes anywhere from a few hours to several weeks.",
    },
    {
      question: "What documents are required for a loan application?",
      answer:
        "For the client, 3 passport photos & ID card, 2 guarantors & ID cards are required.",
    },
    {
      question: "Can I apply for a loan online?",
      answer:
        "YES. Contact our Customer Service via Call/WhatsApp for a seamless online application process.",
    },
    {
      question: "What are the eligibility criteria for obtaining a loan?",
      answer:
        "Age, Steady Income, Credit History, Debt-to-Income Ratio, Collateral (Depends on the amount), Employment Status, Residency Status.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url(/img/banner/asset.png)",
          }}
        ></div>

        {/* Primary Color Overlay with 50% opacity */}
        <div className="absolute inset-0 bg-primary opacity-50 z-10"></div>

        <div className="container mx-auto px-12 relative z-20">
          <div className="text-center max-w-4xl mx-auto pt-24">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-secondary">Asset Loan Service</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Unlock the potential of owning valuable assets with our flexible
              financing solutions
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What we offer for you
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We provide online instant cash loans, asset loans, and business
              loans with quick approval that suit your term
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {assetLoanServices.map((service, index) => (
              <div
                key={index}
                className="text-white rounded-2xl px-8 py-16 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-500"
                style={{
                  background:
                    "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
                }}
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <div className="mb-2">
                    <span className="text-lg text-secondary-200 font-semibold">
                      {service.tier}
                    </span>
                  </div>
                  <p className="text-2xl text-white">{service.range}</p>
                </div>

                <div className="space-y-4 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <FiCheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-gray-100">{feature}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-200 text-center mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="text-center">
                  <button className="bg-secondary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-secondary-400 transition-all duration-300 w-full">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50">
        <div className="container pr-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src="/img/about/asset.jpg"
                alt="Asset Loan"
                width={600}
                height={500}
                className="shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Why Choose Us?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Top Reasons to choose Sparkling Wave Investment Company Limited
                for your loan needs
              </p>

              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FiCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-none hover:border-2 hover:border-primary hover:text-primary transition-all duration-300"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How it Works
            </h2>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto">
              At Sparkling Wave Investment Company Limited, accessing funding is
              simple. Kindly, hit the chat button via WhatsApp to begin your
              loan processing. Our team customizes a loan to fit your needs, and
              approves it promptly. Repay on schedule with our ongoing support.
              Apply now and fuel your business growth!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {howItWorks.map((step, index) => (
              <div key={index} className="flex flex-col gap-4 items-start">
                <div className="w-16 h-16 bg-primary-200 text-primary rounded-full flex items-center justify-center text-xl font-semibold mb-6">
                  {step.number}
                </div>
                <h3 className="text-2xl font-normal text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-12">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Side - Purple Block with Photo */}
            <div className="relative">
              <div className="bg-gradient-to-b from-primary-600 to-primary-800 rounded-2xl h-full min-h-[700px] relative overflow-hidden">
                {/* Photo overlapping the purple block */}
                <div className="absolute z-20">
                  <Image
                    src="/img/about/aboutImg.png"
                    alt="Team Member"
                    width={400}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - FAQ Content */}
            <div className="lg:col-span-1 pl-12 py-12">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-bold text-gray-900 mb-12">
                  Frequently ask
                </h2>

                <div className="space-y-6">
                  {faqData.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6">
                      <div
                        className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-all duration-300 ease-in-out"
                        onClick={() => toggleFAQ(index)}
                      >
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.question}
                        </h3>
                        <div
                          className={`transition-transform duration-300 ease-in-out ${
                            openFAQ === index ? "rotate-180" : "rotate-0"
                          }`}
                        >
                          <FiChevronDown className="text-primary text-2xl" />
                        </div>
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openFAQ === index
                            ? "max-h-96 opacity-100 mt-4"
                            : "max-h-0 opacity-0 mt-0"
                        }`}
                      >
                        <p className="text-gray-600 leading-relaxed pb-2">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href="/faq"
                    className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-none hover:border-2 hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    Read More &gt;&gt;&gt;
                  </Link>
                </div>
              </div>
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
        <div className="absolute inset-0 bg-primary-900 opacity-40 z-10"></div>

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
