import React from "react";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

export const Button = (button: ButtonProps) => {
  return (
    <button
      className="py-2 px-3 bg-indigo-500 hover:bg-indigo-600 text-white text-xl font-semibold rounded-md shadow focus:outline-none w-24"
      onClick={button.onClick}
    >
      {button.title}
    </button>
  );
};
