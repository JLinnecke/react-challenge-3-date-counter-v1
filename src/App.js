import { useState } from "react";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const date = new Date();
  date.setDate(date.getDate() + count);

  const displayDate = date.toDateString();

  return (
    <div style={style}>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>{`Step: ${step}`}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((s) => s - step)}>-</button>
        <span>{`Count: ${count}`}</span>
        <button onClick={() => setCount((s) => s + step)}>+</button>
      </div>
      <p>
        {count === 0
          ? "Today is"
          : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was`}
        {displayDate}
      </p>
    </div>
  );
}
