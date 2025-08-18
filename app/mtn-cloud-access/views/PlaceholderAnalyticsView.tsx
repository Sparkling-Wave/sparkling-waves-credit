"use client";

import React from "react";
import AnalyticsCard from "../../../components/ui/AnalyticsCard";

interface PlaceholderAnalyticsViewProps {
  title: string;
  value?: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
}

const PlaceholderAnalyticsView: React.FC<PlaceholderAnalyticsViewProps> = ({
  title,
  value = "Coming Soon",
  subtitle = "Data will be available soon",
  icon,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        {icon && <div className="text-gray-600">{icon}</div>}
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      </div>

      <AnalyticsCard
        title={title}
        value={value}
        subtitle={subtitle}
        icon={icon}
      />
    </div>
  );
};

export default PlaceholderAnalyticsView;

