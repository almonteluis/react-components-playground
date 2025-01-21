"use client";
import { useState } from "react";
import { Input } from "../atoms/Input";

// Challenge 3: Character Counter
/**
 * Challenge: Create a character counter with these features
 * - Initialize state for `text` as an empty string
 * - Display the number of characters typed (e.g., "10/50")
 * - Add a clear button that resets the input
 * - Show "Limit reached!" if text exceeds 50 characters
 * - Style should change when approaching/exceeding limit
 */
export default function CharacterCounter() {
  const [text, setText] = useState("");
  const MAX_CHARS = 50;
  const WARNING_THRESHOLD = 40;

  const getMessage = () => {
    if (text.length > MAX_CHARS) {
      return "Limit reached!";
    } else if (text.length >= WARNING_THRESHOLD) {
      return "Approaching limit";
    }
    return "";
  };
  function handleInputChange(e) {
    setText(e.target.value);
  }
  function reset() {
    setText("");
  }
  return (
    <div className="max-w-lg mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Character Counter
      </h1>

      <div className="relative mb-4">
        <Input
          value={text}
          placeholder="Type something..."
          className={`w-full text-neutral-600 p-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 transition-colors ${
            text.length > MAX_CHARS
              ? "border-red-200"
              : text.length >= WARNING_THRESHOLD
              ? "border-yellow-200"
              : "border-gray-200"
          }`}
          onChange={handleInputChange}
        />
        <p
          className={`absolute -top-6 right-2 text-sm ${
            text.length > MAX_CHARS
              ? "text-red-600"
              : text.length >= WARNING_THRESHOLD
              ? "text-yellow-600"
              : "text-gray-600"
          }`}
        >
          {text.length}/{MAX_CHARS}
        </p>
      </div>

      <button
        onClick={reset}
        className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
      >
        Clear
      </button>

      <p
        className={`mt-3 text-center font-semibold text-red-500 h-5 ${
          text.length > MAX_CHARS
            ? "text-red-500"
            : text.length >= WARNING_THRESHOLD
            ? "text-yellow-500"
            : ""
        }`}
      >
        {getMessage()}
      </p>
    </div>
  );
}
