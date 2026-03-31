import React from "react";
import { Button } from "../atoms/Button";

/**
 * @param {Object} props
 * @param {Function} props.onIncrement
 * @param {Function} props.onDecrement
 * @returns {React.ReactNode}
 */


export const CounterControl = ({ onIncrement, onDecrement }) => {
  return (
    <div className="flex gap-6 justify-between">
      <Button title={"-"} onClick={onDecrement} />
      <Button title={"+"} onClick={onIncrement} />
    </div>
  );
};
