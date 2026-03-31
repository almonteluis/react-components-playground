import React from "react";

interface BadgeProps {
  text: string;
  variant?: "primary" | "success" | "warning" | "danger" | "info";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  variant = "primary",
  className = "",
}) => {
  const variantClasses = {
    primary: "bg-indigo-700 text-white",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-white",
    danger: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
  };

  return (
    <span
      className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${variantClasses[variant]} ${className}`}
    >
      {text}
    </span>
  );
};
