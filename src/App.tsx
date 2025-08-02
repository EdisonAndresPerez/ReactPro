import './App.css';
import Counter from './componentes/Counter';
import { CounterEffect } from './componentes/CounterEffect';
import { HookCounterEffect } from './componentes/HookCounterEffect';

function App() {
  return (
    <div className="App">
      <Counter initialValue={10} />
      <hr />
      <CounterEffect />
      <HookCounterEffect />
    </div>
  );
}

export default App;
