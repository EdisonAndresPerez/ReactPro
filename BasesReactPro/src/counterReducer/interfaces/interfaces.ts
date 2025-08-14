//1) El shape del estado que manejara el reducer
export interface CounterState {
  counter: number //Valor actual del contador
  previous: number //Ultimo valor antes del cambio mas reciente
  changes: number //Cuantas veces ha cambiado el contador
}
