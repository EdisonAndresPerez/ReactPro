import './App.css';
import Counter from './componentes/Counter';
import { CounterEffect } from './componentes/CounterEffect';
import { HookCounterEffect } from './componentes/HookCounterEffect';
//import {CounterReducerComponent} from './componentes/CounterReducerComponent';
import { CounterReducerComponent } from './counterReducer/CounterReducerComponent';


function App() {
  return (
    <div className="App">
      <Counter initialValue={10} />
      <hr />
      <CounterEffect />
      <hr/>
      <HookCounterEffect />
      <hr />
      <CounterReducerComponent/>

    </div>
  );
}

export default App;
