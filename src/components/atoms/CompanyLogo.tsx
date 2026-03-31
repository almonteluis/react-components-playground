import React from "react";

type Size = "small" | "medium" | "large";

interface CompanyLogoProps {
  src: string;
  alt: string;
  name: string;
  rating?: number;
  size?: Size;
  className?: string;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  src,
  alt,
  name,
  rating,
  size = "medium",
  className = "",
}) => {
  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16",
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`${sizeClasses[size]} rounded-lg object-cover`}
      />
      <div>
        <h3 className="font-medium text-gray-900">{name}</h3>
        {rating && (
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <span className="text-yellow-400">★</span>
            <span>{rating.toFixed(1)}</span>
          </div>
        )}
      </div>
    </div>
  );
};
