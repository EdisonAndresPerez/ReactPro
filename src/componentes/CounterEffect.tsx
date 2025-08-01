import { useEffect, useRef } from "react";
import { useState } from "react";
import { gsap } from "gsap";


const MAXIMUM_COUNT = 10;



export function CounterEffect() {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLHeadingElement>(null);


  const handleIncrement = () => {
    setCount((prevCount) => {
      if (prevCount >= MAXIMUM_COUNT) {
        console.log("llego al maximo");
        return MAXIMUM_COUNT;
      }
      return prevCount + 1;
    });
  };

  useEffect(() => {
    if (count === MAXIMUM_COUNT && countRef.current) {
      gsap.fromTo(
        countRef.current,
        { y: -10, opacity: 0.7 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [count]);

  return (
    <div>
      <h2>Counter Effect</h2>
      <p>Count</p>
      <h2 ref={countRef}>{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
