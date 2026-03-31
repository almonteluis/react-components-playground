"use client";
/**
 * Challenge: Create a timer component using useRef to store the interval
 *
 * Requirements:
 *
 * 3. Implement three functions:
 *    - startTimer:
 *      * Only starts if not already running
 *      * Stores setInterval in timerRef.current
 *      * Updates time every second
 *
 *    - stopTimer:
 *      * Clears the interval using timerRef.current
 *      * Updates isRunning state
 *
 *    - resetTimer:
 *      * Stops the timer
 *      * Resets time to 0
 *
 * 4. Add cleanup in useEffect to clear interval when component unmounts
 *
 * Hint: The component structure is provided, you need to add the logic!
 */

import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  function startTimer() {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  }
  function stopTimer() {
    setIsRunning(false);
    clearInterval(timerRef.current);
  }
  function resetTimer() {
    stopTimer();
    setTime(0);
  }

  return (
    <div className="min-h-screen bg-[#080808] text-[#f5f4ef]">
      <Navigation />
      <main className="pt-24 px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">useRef Timer</h1>
          <div className="p-8 space-y-6 text-center bg-[#f5f4ef]/5 rounded-lg border border-[#f5f4ef]/10 max-w-md mx-auto">
            <h2 className="text-xl font-bold">Simple Timer</h2>
            <div className="text-6xl font-mono text-[#bfff00]">{time}s</div>
            <div className="space-x-2">
              <button
                onClick={startTimer}
                disabled={isRunning}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
              >
                Start
              </button>
              <button
                onClick={stopTimer}
                disabled={!isRunning}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 disabled:opacity-50"
              >
                Stop
              </button>
              <button
                onClick={resetTimer}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Timer;
