import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface CardProps {
  title: React.ReactNode;
  value: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, value }) => {
  const searchParams = useSearchParams();
  const period = searchParams.get("period");
  const page = "active-borrowers";

  return (
    <div className="bg-primary rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-secondary mb-3">{title}</h3>
      <p className="text-3xl font-bold text-brand-primary mb-4">{value}</p>
      {/* <Link
        href=""
        className="inline-block px-4 py-2 bg-brand-primary text-white rounded-md hover:bg-brand-primary-dark transition-colors duration-200 text-sm font-medium"
      >
        View Report
      </Link> */}
    </div>
  );
};

export default Card;
