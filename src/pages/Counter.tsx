import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counterSlice";
import { RootState } from "../app/store";

const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state: RootState) => state.counter.value);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByAmount = (amount: number) => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <div className="flex flex-col items-center h justify-center w-screen">
        <div className=" text-3xl my-5">Counter Value: {counterValue}</div>
      <div className="flex gap-5">
        <button onClick={handleIncrement} className={`bg-green-500`}>
          Increment
        </button>
        <button onClick={handleDecrement} className={`bg-rose-500`}>
          Decrement
        </button>
        <button
          onClick={() => handleIncrementByAmount(5)}
          className={`bg-yellow-500`}
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
};

export default Counter;
