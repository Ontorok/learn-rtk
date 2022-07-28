import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} from "../counter/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector(({ counter }) => counter);

  const [number, setNumber] = useState(0);

  const onIncrement = () => {
    if (number > 0) {
      dispatch(incrementByAmount({ amount: number }));
    } else {
      dispatch(increment());
    }
  };

  const onDecrement = () => {
    if (number > 0) {
      dispatch(decrementByAmount({ amount: number }));
    } else {
      dispatch(decrement());
    }
  };

  const onReset = () => {
    setNumber(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={onIncrement}>+</button>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={onDecrement}>-</button>
      </div>
      <button onClick={onReset}>Reset</button>
    </section>
  );
};

export default Counter;
