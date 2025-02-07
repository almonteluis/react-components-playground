import React from "react";

interface ButtonProps {
  title: string;
  onClick?: () => void;
}

export const Button = (button: ButtonProps) => {
  return (
    <div className="flex justify-center items-center gap-1.5 self-stretch bg-indigo-700 px-4 py-2.5 rounded">
      <div className="flex justify-center items-center px-0.5">
        <button
          className="font-medium text-base text-white"
          onClick={button.onClick}
        >
          {button.title}
        </button>
      </div>
    </div>
  );
};
