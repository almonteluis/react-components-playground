import React from "react";

interface InputProps {
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, placeholder, onChange }: InputProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-2 border rounded"
    />
  );
};
