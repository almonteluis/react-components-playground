import React from "react";
import { Button } from "../atoms/Button";

export const CounterControl = ({ onIncrement, onDecrement }) => {
  return (
    <div className="flex gap-6 justify-between">
      <Button title={"-"} onClick={onDecrement} />
      <Button title={"+"} onClick={onIncrement} />
    </div>
  );
};
