import Link from "next/link";
import React from "react";
import {
  FiBriefcase,
  FiCheckCircle,
  FiDollarSign,
  FiTrendingUp,
} from "react-icons/fi";

const page = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url(/img/banner/bradcam10.png)",
          }}
        ></div>

        {/* Primary Color Overlay with 50% opacity */}
        <div className="absolute inset-0 bg-primary opacity-50 z-10"></div>

        <div className="container mx-auto px-12 relative z-20">
          <div className="text-center max-w-4xl mx-auto pt-24">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-secondary">Loan Services</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Quick approval loans that suit your terms and financial needs
            </p>
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
};

export default page;
