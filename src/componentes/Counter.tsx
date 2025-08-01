import { useState } from "react";

interface CounterProps {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  clicks: number;
}

export default function Counter({ initialValue = 0 }: CounterProps) {
  const [increment, setIncrement] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });
  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {increment.counter}</p>
      <p>Clicks: {increment.clicks}</p>
      <button
        onClick={() =>
          setIncrement({
            counter: increment.counter + 1,
            clicks: increment.clicks + 1,
          })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          setIncrement({
            counter: increment.counter - 1,
            clicks: increment.clicks + 1,
          })
        }
      >
        Decrement
      </button>
    </div>
  );
}
