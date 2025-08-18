"use client";

import React, { useState, useEffect, useCallback } from "react";
import { getAllApiRequest } from "@/lib/apiRequest";
import Card from "@/components/card/analyticsCard/analyticsCard";
import CardWithDate from "@/components/card/analyticsCard/analyticsCardWithPage";
import { GoDash } from "react-icons/go";
import { formatCurrency } from "../../../../utils/FormatCurrency";
import { BsQuestionCircle } from "react-icons/bs";

interface TotalNetLoanDisbursedData {
  totalNetLoanDisbursed: {
    day: number;
    week: number;
    month: number;
    year: number;
    all: number;
  };
  filteredNetLoan: number;
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
  total_net_loan_disbursed?: string;
  total_net_loan_disbursed_by_date?: string;
}

const TotalNetLoanDisbursedPage: React.FC = () => {
  const [data, setData] = useState<TotalNetLoanDisbursedData>({
    totalNetLoanDisbursed: {
      day: 0.0,
      week: 0.0,
      month: 0.0,
      year: 0.0,
      all: 0.0,
    },
    filteredNetLoan: 0,
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

  const fetchData = useCallback(async () => {
    try {
      const [
        netDayLoanResult,
        netWeekLoanResult,
        netMonthLoanResult,
        netYearLoanResult,
        netAllLoanResult,
      ] = await Promise.all([
        getAllApiRequest(
          "/api/analytics/public/total-net-loan-disbursed/?period=day"
        ),
        getAllApiRequest(
          "/api/analytics/public/total-net-loan-disbursed/?period=week"
        ),
        getAllApiRequest(
          "/api/analytics/public/total-net-loan-disbursed/?period=month"
        ),
        getAllApiRequest(
          "/api/analytics/public/total-net-loan-disbursed/?period=year"
        ),
        getAllApiRequest(
          "/api/analytics/public/total-net-loan-disbursed/?period=all"
        ),
      ]);

      setData({
        totalNetLoanDisbursed: {
          day:
            parseFloat(
              (netDayLoanResult as ApiResponse).total_net_loan_disbursed || "0"
            ) || 0,
          week:
            parseFloat(
              (netWeekLoanResult as ApiResponse).total_net_loan_disbursed || "0"
            ) || 0,
          month:
            parseFloat(
              (netMonthLoanResult as ApiResponse).total_net_loan_disbursed ||
                "0"
            ) || 0,
          year:
            parseFloat(
              (netYearLoanResult as ApiResponse).total_net_loan_disbursed || "0"
            ) || 0,
          all:
            parseFloat(
              (netAllLoanResult as ApiResponse).total_net_loan_disbursed || "0"
            ) || 0,
        },
        filteredNetLoan: 0, // Reset the filtered data
      });
      setLoading((prev) => ({ ...prev, overall: false }));
    } catch (error: any) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
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
        `/api/analytics/public/total-net-loan-by-date-disbursed/?start_date=${startDate}&end_date=${endDate}`
      );

      setData((prevState) => ({
        ...prevState,
        filteredNetLoan:
          parseFloat(
            (result as ApiResponse).total_net_loan_disbursed_by_date || "0"
          ) || 0,
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
        Total Net Loan Disbursed
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* <CardWithDate
          title={
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-secondary">
                Total Net Loan Disbursed Filter by Date
              </span>
              <div className="relative group">
                <BsQuestionCircle
                  size={20}
                  className="text-gray-500 cursor-help"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-80 z-10">
                  The Total Net Loan Disbursed within the date range.
                  <br />
                  <br />
                  The Total Net Loan Disbursed is calculated as the sum of the
                  Total Net Loan Amount disbursed within the date range.
                  <br />
                  <br />
                  The date range is selected by{" "}
                  <strong>Start Date input</strong> and{" "}
                  <strong>End Date input.</strong>
                </div>
              </div>
            </div>
          }
          value={
            loading.filter ? "Loading..." : formatCurrency(data.filteredNetLoan)
          }
          page="total-net-loan-disbursed"
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
                Total Net Loan Disbursed Today
              </span>
              <div className="relative group">
                <BsQuestionCircle
                  size={20}
                  className="text-gray-500 cursor-help"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-80 z-10">
                  The Total Net Loan Disbursed for Today.
                  <br />
                  <br />
                  The Total Net Loan Disbursed is calculated as the sum of the
                  Total Net Loan Amount disbursed for Today.
                </div>
              </div>
            </div>
          }
          value={
            loading.overall
              ? "Loading..."
              : formatCurrency(data.totalNetLoanDisbursed.day)
          }
        />

        <Card
          title={
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-secondary">
                Total Net Loan Disbursed for this Week
              </span>
              <div className="relative group">
                <BsQuestionCircle
                  size={20}
                  className="text-gray-500 cursor-help"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-80 z-10">
                  The Total Net Loan Disbursed for this Week.
                  <br />
                  <br />
                  The Total Net Loan Disbursed is calculated as the sum of the
                  Total Net Loan Amount disbursed for this Week.
                </div>
              </div>
            </div>
          }
          value={
            loading.overall
              ? "Loading..."
              : formatCurrency(data.totalNetLoanDisbursed.week)
          }
        />

        <Card
          title={
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-secondary">
                Total Net Loan Disbursed for this Month
              </span>
              <div className="relative group">
                <BsQuestionCircle
                  size={20}
                  className="text-gray-500 cursor-help"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-80 z-10">
                  The Total Net Loan Disbursed for this Month.
                  <br />
                  <br />
                  The Total Net Loan Disbursed is calculated as the sum of the
                  Total Net Loan Amount disbursed for this Month.
                </div>
              </div>
            </div>
          }
          value={
            loading.overall
              ? "Loading..."
              : formatCurrency(data.totalNetLoanDisbursed.month)
          }
        />

        <Card
          title={
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-secondary">
                Total Net Loan Disbursed this Year
              </span>
              <div className="relative group">
                <BsQuestionCircle
                  size={20}
                  className="text-gray-500 cursor-help"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-80 z-10">
                  The Total Net Loan Disbursed this Year.
                  <br />
                  <br />
                  The Total Net Loan Disbursed is calculated as the sum of the
                  Total Net Loan Amount disbursed this Year.
                </div>
              </div>
            </div>
          }
          value={
            loading.overall
              ? "Loading..."
              : formatCurrency(data.totalNetLoanDisbursed.year)
          }
        />

        <Card
          title={
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-secondary">
                All Total Net Loan Disbursed
              </span>
              <div className="relative group">
                <BsQuestionCircle
                  size={20}
                  className="text-gray-500 cursor-help"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-80 z-10">
                  All the Total Net Loan Disbursed.
                  <br />
                  <br />
                  All the Total Net Loan Disbursed is calculated as the sum of
                  the Total Net Loan Amount disbursed of all Time.
                </div>
              </div>
            </div>
          }
          value={
            loading.overall
              ? "Loading..."
              : formatCurrency(data.totalNetLoanDisbursed.all)
          }
        />
      </div>
    </div>
  );
};

export default TotalNetLoanDisbursedPage;
