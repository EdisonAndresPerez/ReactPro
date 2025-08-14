import { CounterState } from "../interfaces/interfaces"
import { CounterAction } from "../actions/actions"

//4)Funcion pura de reducer con lleva los parametros (state, action)
export const counterReducer = (state: CounterState,action: CounterAction): CounterState => {

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