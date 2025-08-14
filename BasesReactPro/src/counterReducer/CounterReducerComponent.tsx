import { useReducer } from 'react'
import { CounterState } from './interfaces/interfaces'
import { counterReducer } from './state/counterReducer'
import { doReset, doIncreaseBy, doIncreaseByFive, doIncreaseByDiez } from './actions/actions'

//2)Estado inicial del hook (lo recibe el hook)
const INITIAL_STATE: CounterState = {
  counter: 20,
  previous: 5,
  changes: 10
}


//5) componente que usa el reducer
export const CounterReducerComponent = () => {
  //useReducer devuelte state, dispatch
  // 1) state: el estado actual del reducer
  // 2) dispatch: funcion para enviar acciones al reducer
  //aqui extraemos counter del state
  const [{ counter }, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  //se crea la funcion handleClick
  //HandleClick dispara una accion
  //la accion la dispara con dispatch
  const handleReset = () => {
    dispatch(doReset()) //dispara la accion reset
  }

  const handleIncrement = () => {
    dispatch(doIncreaseBy(1))
  }

  const handleIncrementMasCinco = () => {
    dispatch(doIncreaseByFive(5))
  }

  const handleIncrementMasDiez = () => {
    dispatch(doIncreaseByDiez(10))
  }

  return (
    <div>
      <h2>Counter Refactorizado</h2>
      <p>counter : {counter}</p>

      <button onClick={handleReset}>0</button>

      <button onClick={handleIncrement}>+1</button>

      <button onClick={handleIncrementMasCinco}>+5</button>

      <button onClick={handleIncrementMasDiez}>+10</button>
    </div>
  )
}
