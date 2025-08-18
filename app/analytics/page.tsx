"use client";

import React from "react";
import {
  FiTrendingUp,
  FiUsers,
  FiDollarSign,
  FiBarChart,
  FiActivity,
  FiCheckCircle,
  FiAlertCircle,
  FiClock,
  FiUserCheck,
  FiUserX,
  FiCreditCard,
  FiPercent,
  FiDatabase,
  FiSmartphone,
  FiShield,
} from "react-icons/fi";
import TotalGrossLoanDisbursedPage from "./views/gross-loans/page";
import TotalNetLoanDisbursedPage from "./views/total-net-loan-disbursed/page";
import ActiveLoansPage from "./views/active-loans/page";
import AppUserCountPage from "./views/app-user-count/page";
import AverageLoanAmountPage from "./views/average-loan-amount/page";

const AnalyticsPage = () => {
  const analyticsSections = [
    {
      title: "Loan Disbursement Analytics",
      description:
        "Comprehensive overview of loan distribution and financial performance metrics",
      icon: FiTrendingUp,
      color: "from-primary-600 to-primary-800",
      components: [
        {
          component: TotalGrossLoanDisbursedPage,
          title: "Total Gross Loan Disbursed",
        },
        {
          component: TotalNetLoanDisbursedPage,
          title: "Total Net Loan Disbursed",
        },
      ],
    },
    {
      title: "Active Loans & Outstanding Amounts",
      description:
        "Real-time tracking of active loans and outstanding loan amounts",
      icon: FiUsers,
      color: "from-green-600 to-green-800",
      components: [{ component: ActiveLoansPage, title: "Active Loans" }],
    },
    {
      title: "User & Platform Analytics",
      description:
        "App usage statistics, user engagement, and loan amount metrics",
      icon: FiSmartphone,
      color: "from-orange-600 to-orange-800",
      components: [
        { component: AppUserCountPage, title: "App User Count" },
        { component: AverageLoanAmountPage, title: "Average Loan Amount" },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url(/img/banner/analytics.webp)",
          }}
        ></div>

        {/* Primary Color Overlay with 50% opacity */}
        <div className="absolute inset-0 bg-primary opacity-50 z-10"></div>

        <div className="container mx-auto px-12 relative z-20">
          <div className="text-center max-w-4xl mx-auto pt-24">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-secondary">SW Credit </span>Analytics
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              At SparkWave Credit, every loan is approved, disbursed, and repaid
              with full borrower consent. Salary deductions via Remita are
              automated only after loan acceptance, ensuring transparency,
              accuracy, and protection against unauthorized charges.
            </p>
          </div>
        </div>
      </section>

      {/* Analytics Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <div className="space-y-12">
            {analyticsSections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Section Header */}
                <div
                  className="p-8 text-white"
                  style={{
                    background: `linear-gradient(135deg, ${
                      section.color.split(" ")[1]
                    } 0%, ${section.color.split(" ")[3]} 100%)`,
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    {/* <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      {section.icon && <section.icon className="w-6 h-6" />}
                    </div> */}
                    <h2 className="text-2xl font-bold">{section.title}</h2>
                  </div>
                  <p className="text-gray-600 text-lg">{section.description}</p>
                </div>

                {/* Section Content */}
                <div className="p-8">
                  <div className="space-y-8">
                    {section.components.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="border-b border-gray-100 pb-8 last:border-b-0 last:pb-0"
                      >
                        <div className="mb-6">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <div className="w-16 h-1 bg-primary rounded-full"></div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6">
                          <item.component />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Performance Indicators
            </h2>
            <p className="text-lg text-gray-600">
              Real-time metrics that drive business decisions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FiTrendingUp,
                label: "Loan Disbursement",
                value: "Active",
                color: "text-green-600",
              },
              {
                icon: FiUsers,
                label: "App Users",
                value: "Growing",
                color: "text-blue-600",
              },
              {
                icon: FiDollarSign,
                label: "Loan Analytics",
                value: "Comprehensive",
                color: "text-primary-600",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center ${stat.color}`}
                >
                  <stat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AnalyticsPage;
