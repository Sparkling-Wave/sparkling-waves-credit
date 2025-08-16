"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FiPhone,
  FiArrowRight,
  FiCheckCircle,
  FiUsers,
  FiTrendingUp,
  FiShield,
  FiClock,
  FiDollarSign,
  FiBriefcase,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState(0); // 0 = first FAQ open by default

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

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
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url(/img/banner/banner.png)",
          }}
        ></div>

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-primary-500 opacity-50 z-10"></div>

        <div className="container mx-auto px-12 pb-24 pt-48 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Get Loan for your{" "}
                <span className="text-secondary">Business growth</span> or
                startup
              </h1>
              <p className="text-xl text-gray-200">
                Quick approval, flexible terms, and competitive rates to fuel
                your business success
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/how-it-works"
                  className="bg-secondary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-secondary-400 transition-all duration-300 inline-flex items-center gap-2 group"
                >
                  How it Works
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Loan Calculator Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 lg:max-w-md lg:justify-self-end">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  How much do you want?
                </h3>
                <p className="text-gray-200">
                  We provide online instant cash loans with quick approval
                </p>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Loan Amount
                  </label>
                  <select
                    name="requestedAmount"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  >
                    <option
                      value=""
                      disabled
                      selected
                      className="text-gray-800"
                    >
                      Select Amount
                    </option>
                    <option value="50000" className="text-gray-800">
                      ₦50,000
                    </option>
                    <option value="100000" className="text-gray-800">
                      ₦100,000
                    </option>
                    <option value="500000" className="text-gray-800">
                      ₦500,000
                    </option>
                    <option value="1000000" className="text-gray-800">
                      ₦1,000,000
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Repayment Period
                  </label>
                  <select
                    name="month"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  >
                    <option
                      value=""
                      disabled
                      selected
                      className="text-gray-800"
                    >
                      Select Period
                    </option>
                    <option value="3" className="text-gray-800">
                      3 Months
                    </option>
                    <option value="6" className="text-gray-800">
                      6 Months
                    </option>
                    <option value="9" className="text-gray-800">
                      9 Months
                    </option>
                    <option value="12" className="text-gray-800">
                      12 Months
                    </option>
                  </select>
                </div>

                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-200">
                    A token fee of{" "}
                    <span className="font-semibold text-secondary">4%</span> is
                    applied for processing
                  </p>
                </div>

                <button
                  type="button"
                  className="w-full bg-secondary text-primary px-6 py-4 rounded-lg font-semibold hover:bg-secondary-400 transition-all duration-300 cursor-pointer"
                >
                  Continue Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What we offer for you
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide online instant cash loans, asset loans, and business
              loans with quick approval that suit your term
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cash Loan */}
            <div
              className="text-white rounded-2xl px-8 py-16 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-500"
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
              }}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiDollarSign className="w-10 h-10 text-white" />
                </div>
                <span className="text-yellow-400 font-semibold">Cash Loan</span>
                <h3 className="text-2xl text-white">₦50,000 - ₦200,000</h3>
              </div>

              <div className="space-y-4">
                <ul className="space-y-2 py-8">
                  <li className="flex items-center gap-2 text-gray-100">
                    <FiCheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    Borrow ₦50,000 over 3 months
                  </li>
                  <li className="flex items-center gap-2 text-gray-100">
                    <FiCheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    Affordable interest rates
                  </li>
                </ul>

                <p className="text-white text-center">
                  <strong>
                    Are you in need of a quick loan? We are here to make it
                    happen for you. Get an instant loan for your needs within
                    24hrs.
                  </strong>
                </p>

                <Link
                  href="/apply"
                  className="block w-full bg-yellow-400 text-purple-800 text-center py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Asset Loan */}
            <div
              className="text-white rounded-2xl px-8 py-16 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-600"
              style={{
                background: "linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%)",
              }}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiTrendingUp className="w-10 h-10 text-white" />
                </div>
                <span className="text-yellow-400 font-semibold">
                  Asset Loan
                </span>
                <h3 className="text-2xl text-white">₦100,000 - ₦5,000,000</h3>
              </div>

              <div className="space-y-4">
                <ul className="space-y-2 py-8">
                  <li className="flex items-center gap-2 text-gray-100">
                    <FiCheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    Lease ₦5,000,000 over 20 months
                  </li>
                  <li className="flex items-center gap-2 text-gray-100">
                    <FiCheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    Affordable interest rates
                  </li>
                </ul>

                <p className="text-white text-center">
                  <strong>
                    Do you want to purchase an asset and you are low on cash?
                    Don't worry we got you covered. Get your dream asset.
                  </strong>
                </p>

                <Link
                  href="/apply"
                  className="block w-full bg-yellow-400 text-purple-800 text-center py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Business Loan */}
            <div
              className="text-white rounded-2xl px-8 py-16 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-400"
              style={{
                background: "linear-gradient(135deg, #500480 0%, #6d28d9 100%)",
              }}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiBriefcase className="w-10 h-10 text-white" />
                </div>
                <span className="text-yellow-400 font-semibold">
                  Business Loan
                </span>
                <h3 className="text-2xl text-white">₦100,000 - ₦1,000,000</h3>
              </div>

              <div className="space-y-4">
                <ul className="space-y-2 py-8">
                  <li className="flex items-center gap-2 text-gray-100">
                    <FiCheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    Borrow ₦1,000,000 over 6 months
                  </li>
                  <li className="flex items-center gap-2 text-gray-100">
                    <FiCheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    Affordable interest rates
                  </li>
                </ul>
                <div className="flex flex-col gap-10 justify-center">
                  <p className="text-white text-center">
                    <strong>
                      Accelerate your business. Turn it from a dream to a
                      reality. Get up to ₦1m in 24hrs.
                    </strong>
                  </p>

                  <Link
                    href="/apply"
                    className="block w-full bg-yellow-400 text-purple-800 text-center py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src="/img/about/about.png"
                alt="About Us"
                width={600}
                height={400}
                className="shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-600">
                Top Reasons to choose Sparkling Wave Investment Company Limited
                for your loan needs
              </p>

              <div className="space-y-4">
                {[
                  "Quick and Easy Processing",
                  "Lowest Processing Fee",
                  "Flexible Repayment Options",
                  "Dedicated Customer Support",
                  "Transparent and Reliable Service",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FiCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-300"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
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
            {[
              {
                number: "01",
                title: "Apply for loan",
                description:
                  "Apply now for a tailored loan to meet your company's cash requirements and preferred term. Our flexible loan options are designed to accommodate your unique needs, ensuring quick access to the necessary funds.",
              },
              {
                number: "02",
                title: "Application review",
                description:
                  "During the review process, we will assess various factors including but not limited to your financial history, creditworthiness, collateral (if applicable), and the purpose of the loan/asset acquisition.",
              },
              {
                number: "03",
                title: "Get funding fast",
                description:
                  "Secure fast funding tailored to your company's cash needs and term preferences. Our flexible loan customization ensures quick access to the required amount, with terms that suit your business goals.",
              },
            ].map((step, index) => (
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
      <section className="bg-white">
        <div className="container pr-12">
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
                        className="flex items-center justify-between cursor-pointer hover:text-primary py-3 rounded-lg transition-all duration-300 ease-in-out"
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
                    className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-300"
                  >
                    Read More &gt;&gt;&gt;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Kazeem Olarewaju",
                image: "/img/testmonial/Kazeem.jpg",
                testimonial:
                  "Thanks to Sparkling Wave Investment, I now have the car of my dreams! Their seamless process and personalized service made it possible for me to purchase a vehicle without hassle. I'm grateful for their support and highly recommend their services to anyone in need of financial assistance.",
              },
              {
                name: "Favour Iroghama",
                image: "/img/testmonial/Favour.jpg",
                testimonial:
                  "As a small business owner, securing funding can be daunting, but Sparkling Wave Investment Company Limited made the process seamless. Their flexible terms and quick approval allowed me to expand my operations and realize my business goals.",
              },
              {
                name: "Stephen Tovia",
                image: "/img/testmonial/Tovia.jpg",
                testimonial:
                  "I was hesitant about taking out a loan until I discovered Sparkling Wave Investment Company Limited. The application process was seamless, and their transparency and low processing fees made the decision easy. Highly recommended!",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {[
              { src: "/img/brand/brand1.png", alt: "Brand 1" },
              {
                src: "/img/brand/brand2.png",
                alt: "Brand 2",
                href: "https://www.coastresearchtechnology.com.ng",
              },
              { src: "/img/brand/brand3.png", alt: "Brand 3" },
              {
                src: "/img/brand/brand4.png",
                alt: "Brand 4",
                href: "https://greenwayinfotech.netlify.app/",
              },
              { src: "/img/brand/brand5.png", alt: "Brand 5" },
            ].map((brand, index) => (
              <div key={index} className="flex justify-center">
                {brand.href ? (
                  <a
                    href={brand.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={brand.src}
                      alt={brand.alt}
                      width={120}
                      height={60}
                      className="h-12 w-auto object-contain"
                    />
                  </a>
                ) : (
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    width={120}
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
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
