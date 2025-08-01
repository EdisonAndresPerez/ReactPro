import './App.css';
import Counter from './componentes/Counter';
import { CounterEffect } from './componentes/CounterEffect';


function App() {
  return (
    <div className="App">
      <Counter initialValue={10} />
      <hr />
      <CounterEffect />
    </div>
  );
}

export default App;
