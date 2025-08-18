"use client";

import React, { useState, useEffect, useCallback } from "react";

import { getAllApiRequest } from "@/lib/apiRequest";
import Card from "@/components/card/analyticsCard/analyticsCard";
import CardWithDate from "@/components/card/analyticsCard/analyticsCardWithPage";
import { GoDash } from "react-icons/go";

import { formatCurrency } from "../../../../utils/FormatCurrency";
import { BsQuestionCircle } from "react-icons/bs";

interface TotalGrossLoanDisbursedData {
  totalGrossLoanDisbursed: {
    day: number;
    week: number;
    month: number;
    year: number;
    all: number;
  };
  filteredGrossLoan: number;
}

interface LoadingState {
  overall: boolean;
  filter: boolean;
}

interface DateRange {
  startDate: string;
  endDate: string;
}

interface ApiResponse {
  total_gross_loan_disbursed?: number;
}

const TotalGrossLoanDisbursedPage: React.FC = () => {
  const [data, setData] = useState<TotalGrossLoanDisbursedData>({
    totalGrossLoanDisbursed: {
      day: 0,
      week: 0,
      month: 0,
      year: 0,
      all: 0,
    },
    filteredGrossLoan: 0,
  });
  const [loading, setLoading] = useState<LoadingState>({
    overall: true,
    filter: false,
  });
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: "",
    endDate: "",
  });

  const fetchData = useCallback(async () => {
    try {
      const [dayResult, weekResult, monthResult, yearResult, allResult] =
        await Promise.all([
          getAllApiRequest(
            "/api/analytics/public/total-gross-loan-disbursed/?period=day"
          ),
          getAllApiRequest(
            "/api/analytics/public/total-gross-loan-disbursed/?period=week"
          ),
          getAllApiRequest(
            "/api/analytics/public/total-gross-loan-disbursed/?period=month"
          ),
          getAllApiRequest(
            "/api/analytics/public/total-gross-loan-disbursed/?period=year"
          ),
          getAllApiRequest(
            "/api/analytics/public/total-gross-loan-disbursed/?period=all"
          ),
        ]);

      setData({
        totalGrossLoanDisbursed: {
          day: (dayResult as ApiResponse).total_gross_loan_disbursed || 0,
          week: (weekResult as ApiResponse).total_gross_loan_disbursed || 0,
          month: (monthResult as ApiResponse).total_gross_loan_disbursed || 0,
          year: (yearResult as ApiResponse).total_gross_loan_disbursed || 0,
          all: (allResult as ApiResponse).total_gross_loan_disbursed || 0,
        },
        filteredGrossLoan: 0,
      });
      setLoading((prev) => ({ ...prev, overall: false }));
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading((prev) => ({ ...prev, overall: false }));
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleFilter = useCallback(async () => {
    const { startDate, endDate } = dateRange;

    try {
      setLoading((prev) => ({ ...prev, filter: true }));
      const result = await getAllApiRequest(
        `/api/analytics/public/total-gross-loan-by-date-disbursed/?start_date=${startDate}&end_date=${endDate}`
      );

      setData((prevState) => ({
        ...prevState,
        filteredGrossLoan:
          (result as ApiResponse).total_gross_loan_disbursed || 0,
      }));
      setLoading((prev) => ({ ...prev, filter: false }));
    } catch (error) {
      console.error("Error fetching filtered data:", error);
      setLoading((prev) => ({ ...prev, filter: false }));
    }
  }, [dateRange]);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      handleFilter();
    }
  }, [dateRange, handleFilter]);

  const handleDateChange = (key: keyof DateRange) => (value: string) => {
    setDateRange((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-gray-50 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
        <GoDash size={30} className="text-brand-primary" />
        Total Gross Loan Disbursed
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title={
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-secondary">
                Total Gross Loan Disbursed Today
              </span>
              <div className="relative group">
                <BsQuestionCircle
                  size={20}
                  className="text-gray-500 cursor-help"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-80 z-10">
                  The Total Gross Loan Disbursed Today.
                  <br />
                  <br /> The Total Gross Loan Disbursed is calculated as the sum
                  of The Principal Amount, Processing Fee, and Interest Amount
                  for Loans Disbursed within the period disbursed Today.
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              </div>
            </div>
          }
          value={
            loading.overall
              ? "Loading..."
              : formatCurrency(data.totalGrossLoanDisbursed.day)
          }
        />

        <Card
          title={
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-secondary">
                Total Gross Loan Disbursed This Week
              </span>
              <div className="relative group">
                <BsQuestionCircle
                  size={20}
                  className="text-gray-500 cursor-help"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-80 z-10">
                  The Total Gross Loan Disbursed Week.
                  <br />
                  <br /> The Total Gross Loan Disbursed is calculated as the sum
                  of The Principal Amount, Processing Fee, and Interest Amount
                  for Loans Disbursed within the period disbursed Week.
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              </div>
            </div>
          }
          value={
            loading.overall
              ? "Loading..."
              : formatCurrency(data.totalGrossLoanDisbursed.week)
          }
        />

        <Card
          title={
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-secondary">
                Total Gross Loan Disbursed This Month
              </span>
              <div className="relative group">
                <BsQuestionCircle
                  size={20}
                  className="text-gray-500 cursor-help"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-80 z-10">
                  The Total Gross Loan Disbursed Month.
                  <br />
                  <br /> The Total Gross Loan Disbursed is calculated as the sum
                  of The Principal Amount, Processing Fee, and Interest Amount
                  for Loans Disbursed within the period disbursed Month.
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              </div>
            </div>
          }
          value={
            loading.overall
              ? "Loading..."
              : formatCurrency(data.totalGrossLoanDisbursed.month)
          }
        />

        <Card
          title={
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-secondary">
                Total Gross Loan Disbursed This Year
              </span>
              <div className="relative group">
                <BsQuestionCircle
                  size={20}
                  className="text-gray-500 cursor-help"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-80 z-10">
                  The Total Gross Loan Disbursed Year.
                  <br />
                  <br /> The Total Gross Loan Disbursed is calculated as the sum
                  of The Principal Amount, Processing Fee, and Interest Amount
                  for Loans Disbursed within the period disbursed Year.
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              </div>
            </div>
          }
          value={
            loading.overall
              ? "Loading..."
              : formatCurrency(data.totalGrossLoanDisbursed.year)
          }
        />

        <Card
          title={
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-secondary">
                All Time Total Gross Loan Disbursed
              </span>
              <div className="relative group">
                <BsQuestionCircle
                  size={20}
                  className="text-gray-500 cursor-help"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-80 z-10">
                  The Total Gross Loan Disbursed of All Time.
                  <br />
                  <br />
                  The Total Gross Loan Disbursed is calculated as the sum of The
                  Principal Amount, Processing Fee, and Interest Amount for
                  Loans Disbursed for All Time.
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              </div>
            </div>
          }
          value={
            loading.overall
              ? "Loading..."
              : formatCurrency(data.totalGrossLoanDisbursed.all)
          }
        />
      </div>
    </div>
  );
};

export default TotalGrossLoanDisbursedPage;
