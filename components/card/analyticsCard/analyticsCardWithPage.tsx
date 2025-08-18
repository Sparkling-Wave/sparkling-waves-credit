import React, { useEffect } from "react";
import Link from "next/link";

interface CardWithDateProps {
  title: React.ReactNode;
  value: React.ReactNode;
  page?: string;
  startDate: string;
  endDate: string;
  period?: string;
  onStartDateChange: (value: string) => void;
  onEndDateChange: (value: string) => void;
  onFilter: () => void;
}

const CardWithDate: React.FC<CardWithDateProps> = ({
  title,
  value,
  page,
  startDate,
  endDate,
  period,
  onStartDateChange,
  onEndDateChange,
  onFilter,
}) => {
  useEffect(() => {
    if (startDate && endDate) {
      onFilter();
    }
  }, [startDate, endDate, onFilter]);

  const slug =
    startDate && endDate
      ? `start_date=${startDate}&end_date=${endDate}`
      : period;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-[#ffd700] mb-3">{title}</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-3xl font-bold text-brand-primary">{value}</p>
          <Link
            href={`/analytics/views/${page}/${slug}`}
            className="inline-block px-4 py-2 bg-brand-primary text-white rounded-md hover:bg-brand-primary-dark transition-colors duration-200 text-sm font-medium"
          >
            View
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <input
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            type="date"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
          />
          <input
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            type="date"
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default CardWithDate;
