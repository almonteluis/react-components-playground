"use client";
import { useRef } from "react";
import Navigation from "@/components/Navigation";

/**
 * Challenge: Create a component that manages input focus
 *
 * Requirements:
 * 1. Create a ref called 'inputRef' which defaults to null
 *    (Remember to import useRef from React!)
 *
 * 2. Attach the ref to an input element using the ref attribute
 *
 * 3. Create a function called handleFocus that:
 *    - Uses the ref's current property to call focus()
 *    - Don't forget to use optional chaining (?.) for safety!
 *
 * 4. Add a button that calls handleFocus when clicked
 *
 * Hint: The component structure is provided below, you just need
 *       to add the ref logic!
 */

const FocusInput = () => {
  // Add your ref here
  const inputRef = useRef(null);

  // Add your focus handler here
  function handleFocus() {
    inputRef.current?.focus();
  }

  return (
    <div className="min-h-screen bg-[#080808] text-[#f5f4ef]">
      <Navigation />
      <main className="pt-24 px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">useRef Focus</h1>
          <div className="p-4 space-y-4 bg-[#f5f4ef]/5 rounded-lg border border-[#f5f4ef]/10">
            <h2 className="text-xl font-bold">Basic Focus Management</h2>
            <div className="space-y-2">
              <input
                ref={inputRef}
                type="text"
                className="border border-[#f5f4ef]/20 bg-[#080808] text-[#f5f4ef] p-2 rounded w-full"
                placeholder="Type here..."
              />
              <button
                onClick={handleFocus}
                className="bg-[#bfff00] text-[#080808] px-4 py-2 rounded hover:bg-[#aadd00] font-medium"
              >
                Focus Input
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FocusInput;
