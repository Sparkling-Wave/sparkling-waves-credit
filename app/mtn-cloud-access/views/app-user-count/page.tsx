"use client";

import React, { useState, useEffect, useCallback } from "react";
import { getAllApiRequest } from "@/lib/apiRequest";
import Card from "@/components/card/analyticsCard/analyticsCard";
import { GoDash } from "react-icons/go";
import CardWithDate from "@/components/card/analyticsCard/analyticsCardWithPage";
import { BsQuestionCircle } from "react-icons/bs";

interface AppUserCountData {
  appUserCount: {
    day: number;
    week: number;
    month: number;
  };
  filteredAppUserCount: number;
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
  customer_count?: string;
  customer_count_by_date?: string;
}

const AppUserCountPage: React.FC = () => {
  const [data, setData] = useState<AppUserCountData>({
    appUserCount: {
      day: 0,
      week: 0,
      month: 0,
    },
    filteredAppUserCount: 0,
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

  const fetchAppUserCount = useCallback(async () => {
    try {
      const [dayResult, weekResult, monthResult] = await Promise.all([
        getAllApiRequest("/api/analytics/public/customer-count/?period=day"),
        getAllApiRequest("/api/analytics/public/customer-count/?period=month"),
        getAllApiRequest("/api/analytics/public/customer-count/?period=week"),
      ]);

      setData({
        appUserCount: {
          day: parseInt((dayResult as ApiResponse).customer_count || "0") || 0,
          week:
            parseInt((weekResult as ApiResponse).customer_count || "0") || 0,
          month:
            parseInt((monthResult as ApiResponse).customer_count || "0") || 0,
        },
        filteredAppUserCount: 0,
      });
      setLoading((prev) => ({ ...prev, overall: false }));
    } catch (err: any) {
      setError(
        err.message ||
          "Failed to fetch App User Count data. Please try again later."
      );
      setLoading((prev) => ({ ...prev, overall: false }));
    }
  }, []);

  useEffect(() => {
    fetchAppUserCount();
  }, [fetchAppUserCount]);

  const handleFilter = useCallback(async () => {
    const { startDate, endDate } = dateRange;

    try {
      setLoading((prev) => ({ ...prev, filter: true }));
      const result = await getAllApiRequest(
        `/api/analytics/public/customer-count-by-date/?start_date=${startDate}&end_date=${endDate}`
      );

      setData((prevState) => ({
        ...prevState,
        filteredAppUserCount:
          parseInt((result as ApiResponse).customer_count_by_date || "0") || 0,
      }));
      setLoading((prev) => ({ ...prev, filter: false }));
    } catch (error: any) {
      console.error("Error fetching filtered data:", error);
      setError(
        error.message ||
          "Failed to fetch filtered App User Count data. Please try again later."
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
        App User Count
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title={
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-secondary">
                App User Count Today
              </span>
              <div className="relative group">
                <BsQuestionCircle
                  size={20}
                  className="text-gray-500 cursor-help"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-80 z-10">
                  The App User Count for Today.
                  <br />
                  <br />
                  The App User Count is calculated as the count of active app
                  users for Today.
                </div>
              </div>
            </div>
          }
          value={loading.overall ? "Loading..." : data.appUserCount.day}
        />

        <Card
          title={
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-secondary">
                App User Count for this Week
              </span>
              <div className="relative group">
                <BsQuestionCircle
                  size={20}
                  className="text-gray-500 cursor-help"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-80 z-10">
                  The App User Count for this Week.
                  <br />
                  <br />
                  The App User Count is calculated as the count of active app
                  users for this Week.
                </div>
              </div>
            </div>
          }
          value={loading.overall ? "Loading..." : data.appUserCount.week}
        />

        <Card
          title={
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-secondary">
                App User Count for this Month
              </span>
              <div className="relative group">
                <BsQuestionCircle
                  size={20}
                  className="text-gray-500 cursor-help"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-80 z-10">
                  The App User Count for this Month.
                  <br />
                  <br />
                  The App User Count is calculated as the count of active app
                  users for this Month.
                </div>
              </div>
            </div>
          }
          value={loading.overall ? "Loading..." : data.appUserCount.month}
        />
      </div>
    </div>
  );
};

export default AppUserCountPage;
