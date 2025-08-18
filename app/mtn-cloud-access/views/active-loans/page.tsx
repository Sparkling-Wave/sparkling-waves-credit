"use client";

import React, { useState, useEffect, useCallback } from "react";
import { getAllApiRequest } from "@/lib/apiRequest";
import { GoDash } from "react-icons/go";
import CardWithDate from "@/components/card/analyticsCard/analyticsCardWithPage";
import Card from "@/components/card/analyticsCard/analyticsCard";
import { formatCurrency } from "../../../../utils/FormatCurrency";
import { BsQuestionCircle } from "react-icons/bs";

interface ActiveLoansData {
  activeLoansCount: {
    day: number;
  };
  filteredActiveLoans: number;
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
  total_active_loans?: number;
  total_active_loans_by_date?: number;
}

const ActiveLoansPage: React.FC = () => {
  const [data, setData] = useState<ActiveLoansData>({
    activeLoansCount: {
      day: 0,
    },
    filteredActiveLoans: 0,
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

  const fetchActiveLoans = useCallback(async () => {
    try {
      const [dayResult] = await Promise.all([
        getAllApiRequest(
          "/api/analytics/public/total-active-loans/?period=day"
        ),
      ]);

      setData({
        activeLoansCount: {
          day: (dayResult as ApiResponse).total_active_loans || 0,
        },
        filteredActiveLoans: 0,
      });
      setLoading((prev) => ({ ...prev, overall: false }));
    } catch (err: any) {
      setError(
        err.message ||
          "Failed to fetch active loans data. Please try again later."
      );
      setLoading((prev) => ({ ...prev, overall: false }));
    }
  }, []);

  useEffect(() => {
    fetchActiveLoans();
  }, [fetchActiveLoans]);

  const handleFilter = useCallback(async () => {
    const { startDate, endDate } = dateRange;

    try {
      setLoading((prev) => ({ ...prev, filter: true }));
      const result = await getAllApiRequest(
        `/api/analytics/public/total-active-loans-by-date/?start_date=${startDate}&end_date=${endDate}`
      );

      setData((prevState) => ({
        ...prevState,
        filteredActiveLoans:
          (result as ApiResponse).total_active_loans_by_date || 0,
      }));
      setLoading((prev) => ({ ...prev, filter: false }));
    } catch (error: any) {
      setError(
        error.message ||
          "Failed to fetch filtered active loans data. Please try again later."
      );
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
        Active Loans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title={
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-secondary">
                Active Loans Today
              </span>
              <div className="relative group">
                <BsQuestionCircle
                  size={20}
                  className="text-gray-500 cursor-help"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-80 z-10">
                  The Total Active Loans for Today.
                  <br />
                  <br />
                  The Active Loan for the Day is calculated as the sum of the
                  current repayment amount expected whose Status is Active for
                  Today.
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              </div>
            </div>
          }
          value={
            loading.overall
              ? "Loading..."
              : formatCurrency(data.activeLoansCount.day)
          }
        />
      </div>
    </div>
  );
};

export default ActiveLoansPage;
