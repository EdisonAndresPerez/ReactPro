import { useReducer } from 'react'

//1) El shape del estado que manejara el reducer
interface CounterState {
  counter: number //Valor actual del contador
  previous: number //Ultimo valor antes del cambio mas reciente
  changes: number //Cuantas veces ha cambiado el contador
}

//2)Estado inicial del hook (lo recibe el hook)
const INITIAL_STATE: CounterState = {
  counter: 20,
  previous: 5,
  changes: 10
}

//3)Acciones posibles /type y payload )
// - 'reset' no lleva payload
// PODEMOS CREAR MAS ACCIONES
type CounterAction =
  | { type: 'reset' }
  | { type: 'incrementMasUno'; payload: { value: number } }
  | { type: 'incrementMasCinco'; payload: { value: number } }
  | { type: 'incrementMasDiez'; payload: { value: number } }

//4)Funcion pura de reducer con lleva los parametros (state, action)
const counterReducer = (state: CounterState,action: CounterAction): CounterState => {

  switch (action.type) {
    case 'reset':
      return {counter: 0,previous: 0,changes: 0}

      case 'incrementMasUno':
        return {
          ...state,
          counter: state.counter + 1,
          previous: state.counter,
          changes: state.changes + 1
        }
      case 'incrementMasCinco':
        return {
          ...state,
          counter: state.counter + 5,
          previous: state.counter,
          changes: state.changes + 1
        }

        case 'incrementMasDiez':

          return{
            ...state,
            counter: state.counter + 10,
            previous: state.counter,
            changes: state.changes + 1
          }

    default:
      return state
  }
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
    dispatch({ type: 'reset' }) //dispara la accion reset
  }

  const handleIncrement = () => {
    dispatch({ type: 'incrementMasUno', payload: { value: 1 } })
  }

  const handleIncrementMasCinco = () => {
    dispatch({ type: 'incrementMasCinco', payload: { value: 5 } })
  }

  const handleIncrementMasDiez = () => {
    dispatch({ type: 'incrementMasDiez', payload: { value: 10 } })
  }

  return (
    <div>
      <h2>Counter</h2>
      <p>counter : {counter}</p>

      <button onClick={handleReset}>0</button>

      <button onClick={handleIncrement}>+1</button>

      <button onClick={handleIncrementMasCinco}>+5</button>

      <button onClick={handleIncrementMasDiez}>+10</button>
    </div>
  )
}
