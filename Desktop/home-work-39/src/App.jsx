import './App.css';
import Counter from './components/Counter.jsx';
import Greeting from './components/Greeting.jsx';
import CounterClass from './components/CounterClass.jsx';

function App() {
  return (
    <div className="container">
      <h1>Приклад компонентів у React</h1>

      <div className="component">
        <h2>Stateful компонент (функціональний)</h2>
        <Counter />
      </div>

      <div className="component">
        <h2>Stateless компонент</h2>
        <Greeting name="Олена" />
      </div>

      <div className="component">
        <h2>Stateful компонент (класовий)</h2>
        <CounterClass />
      </div>
    </div>
  );
}

export default App;

