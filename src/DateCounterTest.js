import { useReducer } from "react";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown Error");
  }
}

const DateCounterTest = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { count, step } = state;

  const handleStep = (e) => {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const handleCount = (e) => {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const dec = () => {
    dispatch({ type: "dec" });
  };

  const inc = () => {
    dispatch({ type: "inc" });
  };

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div className="range-slider">
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={handleStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={handleCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
export default DateCounterTest;
