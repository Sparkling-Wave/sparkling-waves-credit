"use client";

import React, { useState, useEffect, useCallback } from "react";

import { getAllApiRequest } from "@/lib/apiRequest";
import Card from "@/components/card/analyticsCard/analyticsCard";
import CardWithDate from "@/components/card/analyticsCard/analyticsCardWithPage";
import { GoDash } from "react-icons/go";
import { formatCurrency } from "../../../../utils/FormatCurrency";
import { BsQuestionCircle } from "react-icons/bs";

interface AverageLoanAmountData {
  averageLoanAmount: {
    day: number;
    week: number;
    month: number;
    year: number;
    all: number;
  };
  filteredLoanAmount: number;
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
  average_loan_amount?: string;
}

const AverageLoanAmountPage: React.FC = () => {
  const [data, setData] = useState<AverageLoanAmountData>({
    averageLoanAmount: {
      day: 0.0,
      week: 0.0,
      month: 0.0,
      year: 0.0,
      all: 0.0,
    },
    filteredLoanAmount: 0.0,
  });
  const [loading, setLoading] = useState<LoadingState>({
    overall: true,
    filter: false,
  });
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: "",
    endDate: "",
  });
  const [error, setError] = useState<string | null>(null);

  const fetchAverageLoanAmount = useCallback(async (): Promise<void> => {
    try {
      const [DayResult, WeekResult, MonthResult] = await Promise.all([
        getAllApiRequest(
          "/api/analytics/public/average-loan-amount/?period=day"
        ),
        getAllApiRequest(
          "/api/analytics/public/average-loan-amount/?period=week"
        ),
        getAllApiRequest(
          "/api/analytics/public/average-loan-amount/?period=month"
        ),
      ]);

      setData({
        averageLoanAmount: {
          day:
            parseFloat((DayResult as ApiResponse).average_loan_amount || "0") ||
            0.0,
          week:
            parseFloat(
              (WeekResult as ApiResponse).average_loan_amount || "0"
            ) || 0.0,
          month:
            parseFloat(
              (MonthResult as ApiResponse).average_loan_amount || "0"
            ) || 0.0,
          year: 0.0,
          all: 0.0,
        },
        filteredLoanAmount: 0.0,
      });
      setLoading((prev) => ({ ...prev, overall: false }));
    } catch (error: any) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
      setLoading((prev) => ({ ...prev, overall: false }));
    }
  }, []);

  useEffect(() => {
    fetchAverageLoanAmount();
  }, [fetchAverageLoanAmount]);

  const handleFilter = useCallback(async (): Promise<void> => {
    const { startDate, endDate } = dateRange;

    try {
      setLoading((prev) => ({ ...prev, filter: true }));
      const result = await getAllApiRequest(
        `/api/analytics/public/average-loan-amount-by-date/?start_date=${startDate}&end_date=${endDate}`
      );

      setData((prevState) => ({
        ...prevState,
        filteredLoanAmount:
          parseFloat((result as ApiResponse).average_loan_amount || "0") || 0.0,
      }));
      setLoading((prev) => ({ ...prev, filter: false }));
    } catch (error: any) {
      console.error("Error fetching filtered data:", error);
      setError("Error fetching filtered data. Please try again later.");
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
        Average Loan Amount
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* <CardWithDate
          title={
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-secondary">
                Average Loan Amount Filter by Date
              </span>
              <div className="relative group">
                <BsQuestionCircle
                  size={20}
                  className="text-gray-500 cursor-help"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-80 z-10">
                  This shows the Average of all Loan Amount disbursed within
                  date range.
                  <br />
                  <br />
                  The date range is selected by{" "}
                  <strong>Start Date input</strong> and{" "}
                  <strong>End Date input.</strong>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              </div>
            </div>
          }
          value={
            loading.filter
              ? "Loading..."
              : formatCurrency(data.filteredLoanAmount)
          }
          page="average-loan-amount"
          startDate={dateRange.startDate}
          endDate={dateRange.endDate}
          onStartDateChange={handleDateChange("startDate")}
          onEndDateChange={handleDateChange("endDate")}
          onFilter={handleFilter}
        /> */}

        <Card
          title={
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-secondary">
                Average Loan Amount Today
              </span>
              <div className="relative group">
                <BsQuestionCircle
                  size={20}
                  className="text-gray-500 cursor-help"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-80 z-10">
                  This shows the Average of Loan Amount disbursed today.
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              </div>
            </div>
          }
          value={
            loading.overall
              ? "Loading..."
              : formatCurrency(data.averageLoanAmount.day)
          }
        />

        <Card
          title={
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-secondary">
                Average Loan Amount This Week
              </span>
              <div className="relative group">
                <BsQuestionCircle
                  size={20}
                  className="text-gray-500 cursor-help"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-80 z-10">
                  This shows the Average of all Loan Amount disbursed this Week.
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              </div>
            </div>
          }
          value={
            loading.overall
              ? "Loading..."
              : formatCurrency(data.averageLoanAmount.week)
          }
        />

        <Card
          title={
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-secondary">
                Average Loan Amount This Month
              </span>
              <div className="relative group">
                <BsQuestionCircle
                  size={20}
                  className="text-gray-500 cursor-help"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-80 z-10">
                  This shows the Average of all Loan Amount disbursed this
                  month.
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              </div>
            </div>
          }
          value={
            loading.overall
              ? "Loading..."
              : formatCurrency(data.averageLoanAmount.month)
          }
        />
      </div>
    </div>
  );
};

export default AverageLoanAmountPage;
