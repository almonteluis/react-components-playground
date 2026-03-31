import React from "react";

interface TagProps {
  text: string;
  onClick?: () => void;
  className?: string;
  removable?: boolean;
  onRemove?: () => void;
}

export const Tag: React.FC<TagProps> = ({
  text,
  onClick,
  className = "",
  removable = false,
  onRemove,
}) => {
  return (
    <div
      className={`inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm ${className}`}
      onClick={onClick}
    >
      <span>{text}</span>
      {removable && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
          className="text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      )}
    </div>
  );
};
