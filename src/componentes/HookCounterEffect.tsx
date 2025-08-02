import { useCounter } from "../hooks/useCounter"

export const HookCounterEffect = () => {

  const {count, countRef, titleRef, handleIncrement} = useCounter({
    maxCount: 15
  })

  return (
    <div>
      <h2 ref={titleRef}>Counter Hook</h2>
      <p>Count</p>
      <h2 ref={countRef}>{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}
