import React from "react";
import { NumberDisplay } from "@/components/atoms/NumberDisplay";

export const CounterDisplay = ({ count }) => {
  return (
    <div className="grid gap-3">
      <h3 className="text-center text-2xl font-bold">Counter Value:</h3>
      <div className="flex justify-center">
        <NumberDisplay count={count} />
      </div>
    </div>
  );
};
