import React from "react";

interface RatingProps {
  score: number;
  maxScore?: number;
  source?: string;
  showSource?: boolean;
  className?: string;
}

export const Rating: React.FC<RatingProps> = ({
  score,
  maxScore = 10,
  source,
  showSource = false,
  className = "",
}) => {
  const percentage = (score / maxScore) * 100;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-12 h-12">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#eee"
            strokeWidth="3"
          />
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#4f46e5"
            strokeWidth="3"
            strokeDasharray={`${percentage}, 100`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-sm font-bold">
          {score}
        </div>
      </div>
      {showSource && source && (
        <span className="text-sm text-gray-600">{source}</span>
      )}
    </div>
  );
};
