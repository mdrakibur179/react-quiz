import { useState } from "react";

const DateCounterTest = () => {
  const [count, setCount] = useState(1);
  const [step, setStep] = useState(0);

  const handleCount = (e) => {
    setCount(Number(e.target.value));
  };

  const handleStep = (e) => {
    setStep(Number(e.target.value));
  };

  const dec = () => {
    setStep((s) => s - count);
  };

  const inc = () => {
    setStep((s) => s + count);
  };

  const date = new Date();
  date.setDate(date.getDate() + step);

  const handleReset = () => {
    setCount(1);
    setStep(0);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={count}
          onChange={handleCount}
        />
        <span>{count}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={step} onChange={handleStep} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
export default DateCounterTest;
