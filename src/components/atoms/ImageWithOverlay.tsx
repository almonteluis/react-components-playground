import React from "react";

interface ImageWithOverlayProps {
  src: string;
  alt: string;
  className?: string;
  overlay?: React.ReactNode;
  onClick?: () => void;
}

export const ImageWithOverlay: React.FC<ImageWithOverlayProps> = ({
  src,
  alt,
  className = "",
  overlay,
  onClick,
}) => {
  return (
    <div className={`relative ${className}`} onClick={onClick}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-lg"
      />
      {overlay && <div className="absolute inset-0">{overlay}</div>}
    </div>
  );
};
