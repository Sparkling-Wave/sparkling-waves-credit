"use client";

import React, { useState, useEffect, useCallback } from "react";
import { getAllApiRequest } from "@/lib/apiRequest";
import Card from "@/components/card/analyticsCard/analyticsCard";
import CardWithDate from "@/components/card/analyticsCard/analyticsCardWithPage";
import { GoDash } from "react-icons/go";
import { formatCurrency } from "../../../../utils/FormatCurrency";
import { BsQuestionCircle } from "react-icons/bs";

interface TotalGrossLoansOutstandingData {
  totalGrossLoansOutstanding: {
    day: number;
    week: number;
    month: number;
  };
  filteredGrossLoansOutstanding: number;
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
  total_outstanding_loans?: string;
}

const TotalGrossLoansOutstandingPage: React.FC = () => {
  const [data, setData] = useState<TotalGrossLoansOutstandingData>({
    totalGrossLoansOutstanding: {
      day: 0.0,
      week: 0.0,
      month: 0.0,
    },
    filteredGrossLoansOutstanding: 0.0,
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

  const fetchTotalGrossLoansOutstanding =
    useCallback(async (): Promise<void> => {
      try {
        const [
          totalGrossLoansOutstandingDayResult,
          totalGrossLoansOutstandingWeekResult,
          totalGrossLoansOutstandingMonthResult,
        ] = await Promise.all([
          getAllApiRequest(
            "/api/analytics/public/outstanding-loans/?period=day"
          ),
          getAllApiRequest(
            "/api/analytics/public/outstanding-loans/?period=week"
          ),
          getAllApiRequest(
            "/api/analytics/public/outstanding-loans/?period=month"
          ),
        ]);

        setData({
          totalGrossLoansOutstanding: {
            day:
              parseFloat(
                (totalGrossLoansOutstandingDayResult as ApiResponse)
                  .total_outstanding_loans || "0"
              ) || 0.0,
            week:
              parseFloat(
                (totalGrossLoansOutstandingWeekResult as ApiResponse)
                  .total_outstanding_loans || "0"
              ) || 0.0,
            month:
              parseFloat(
                (totalGrossLoansOutstandingMonthResult as ApiResponse)
                  .total_outstanding_loans || "0"
              ) || 0.0,
          },
          filteredGrossLoansOutstanding: 0.0,
        });
        setLoading((prev) => ({ ...prev, overall: false }));
      } catch (err: any) {
        setError(
          err.message ||
            "Failed to fetch total gross loans outstanding data. Please try again later."
        );
        setLoading((prev) => ({ ...prev, overall: false }));
      }
    }, []);

  useEffect(() => {
    fetchTotalGrossLoansOutstanding();
  }, [fetchTotalGrossLoansOutstanding]);

  const handleFilter = useCallback(async () => {
    const { startDate, endDate } = dateRange;

    try {
      setLoading((prev) => ({ ...prev, filter: true }));
      const result = await getAllApiRequest(
        `/api/analytics/public/outstanding-loans-by-date/?start_date=${startDate}&end_date=${endDate}`
      );

      setData((prevState) => ({
        ...prevState,
        filteredGrossLoansOutstanding:
          parseFloat((result as ApiResponse).total_outstanding_loans || "0") ||
          0.0,
      }));
      setLoading((prev) => ({ ...prev, filter: false }));
    } catch (error: any) {
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
        Total Gross Loans Outstanding
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title={
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-secondary">
                Total Gross Loans Outstanding Today
              </span>
              <div className="relative group">
                <BsQuestionCircle
                  size={20}
                  className="text-gray-500 cursor-help"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-80 z-10">
                  The Total Gross Loans Outstanding for Today.
                  <br />
                  <br />
                  The Total Gross Loans Outstanding is calculated as the sum of
                  the Total Outstanding Loan Amount for Today.
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              </div>
            </div>
          }
          value={
            loading.overall
              ? "Loading..."
              : formatCurrency(data.totalGrossLoansOutstanding.day)
          }
        />

        <Card
          title={
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-secondary">
                Total Gross Loans Outstanding for this Week
              </span>
              <div className="relative group">
                <BsQuestionCircle
                  size={20}
                  className="text-gray-500 cursor-help"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-80 z-10">
                  The Total Gross Loans Outstanding for this Week.
                  <br />
                  <br />
                  The Total Gross Loans Outstanding is calculated as the sum of
                  the Total Outstanding Loan Amount for this Week.
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              </div>
            </div>
          }
          value={
            loading.overall
              ? "Loading..."
              : formatCurrency(data.totalGrossLoansOutstanding.week)
          }
        />

        <Card
          title={
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-secondary">
                Total Gross Loans Outstanding for this Month
              </span>
              <div className="relative group">
                <BsQuestionCircle
                  size={20}
                  className="text-gray-500 cursor-help"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-80 z-10">
                  The Total Gross Loans Outstanding for this Month.
                  <br />
                  <br />
                  The Total Gross Loans Outstanding is calculated as the sum of
                  the Total Outstanding Loan Amount for this Month.
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              </div>
            </div>
          }
          value={
            loading.overall
              ? "Loading..."
              : formatCurrency(data.totalGrossLoansOutstanding.month)
          }
        />
      </div>
    </div>
  );
};

export default TotalGrossLoansOutstandingPage;
