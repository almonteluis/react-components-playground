"use client";
import React, { useState } from "react";
import { CounterControl } from "@/components/molecules/CounterControl";
import { CounterDisplay } from "@/components/molecules/CounterDisplay";

export const CounterWidget = () => {
  const [count, setCount] = useState(0);

  function handleUpCount() {
    setCount(count + 1);
  }

  function handleDownCount() {
    setCount(count - 1);
  }

  return (
    <div className="container max-w-96 mx-auto my-4 p-5 flex flex-col gap-4 bg-slate-600 rounded-lg">
      <CounterDisplay count={count} />
      <CounterControl
        onIncrement={handleUpCount}
        onDecrement={handleDownCount}
      />
    </div>
  );
};
