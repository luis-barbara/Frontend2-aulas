"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { decrement, increment } from "@/redux/slices/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-2xl font-bold mb-4">
      <h1>Counter: {count}</h1>
      <div className="counter-actions">
        <button
          className="counter-button"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="counter-button"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
    </div>
  );
};


export default Counter;