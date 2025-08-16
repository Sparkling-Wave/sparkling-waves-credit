"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiFileText,
} from "react-icons/fi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: FiMapPin,
      title: "Headquarters",
      details:
        "Suite 2C, No 11, Rofab Shopping Complex, Sango-Eleyele Road, Ibadan Oyo State.",
      color: "text-blue-500",
    },
    {
      icon: FiPhone,
      title: "+234706 961 5095",
      details: "Mon to Fri 8am - 5pm",
      color: "text-green-500",
    },
    {
      icon: FiMail,
      title: "hello@sparklingwavelimited.com.ng",
      details: "Send us your query anytime!",
      color: "text-purple-500",
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
            backgroundImage: "url(/img/banner/bradcam12.png)",
          }}
        ></div>

        {/* Primary Color Overlay with 50% opacity */}
        <div className="absolute inset-0 bg-primary opacity-50 z-10"></div>

        <div className="container mx-auto px-12 relative z-20">
          <div className="text-center max-w-4xl mx-auto pt-24">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-secondary">Contact Us</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Get in touch with us for any questions about our loan services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-12">
          {/* Company Image */}
          <div className="mb-16 text-center">
            <Image
              src="/img/contact/Sparkling Wave Investment company Limited.jpg"
              alt="Sparkling Wave Investment Company Limited"
              width={800}
              height={400}
              className="mx-auto"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Get in Touch
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <div className="relative">
                      <FiFileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="Enter subject"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Enter your message here..."
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-4 px-8 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <FiSend className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>

              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-full bg-gray-50 ${info.color}`}
                    >
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {info.details}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Additional Contact Options */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl p-6 text-white">
                <h4 className="text-xl font-semibold mb-3">
                  Need Immediate Help?
                </h4>
                <p className="text-gray-400 mb-4">
                  Our customer support team is available to assist you with any
                  urgent inquiries.
                </p>
                <Link
                  href="tel:+2347069615095"
                  className="inline-block bg-secondary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-secondary-400 transition-all duration-300"
                >
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Located in the heart of Ibadan, our office is easily accessible
              and ready to serve you
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <FiMapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">
                  Map integration can be added here
                </p>
                <p className="text-gray-400">
                  Google Maps or other mapping service
                </p>
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
        <div className="absolute inset-0 bg-primary-900 opacity-50 z-10"></div>

        <div className="container mx-auto px-12 relative z-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                Contact us today to learn more about our loan services and how
                we can help you achieve your financial goals.
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
