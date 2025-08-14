
//3)Acciones posibles /type y payload )
// - 'reset' no lleva payload
// PODEMOS CREAR MAS ACCIONES
export type CounterAction =
  | { type: 'reset' }
  | { type: 'incrementMasUno'; payload: { value: number } }
  | { type: 'incrementMasCinco'; payload: { value: number } }
  | { type: 'incrementMasDiez'; payload: { value: number } }


  export const doReset = (): CounterAction => ({
    type: 'reset'
  })


  export const doIncreaseBy = (value: number):CounterAction => ({
    type: 'incrementMasUno',
    payload: { value }
  })
 
  export const doIncreaseByFive = (value:  number): CounterAction => ({
    type: 'incrementMasCinco',
    payload: {value}
  })


  export const doIncreaseByDiez = (value: number): CounterAction => ({
    type: 'incrementMasDiez',
    payload: {value}
  })