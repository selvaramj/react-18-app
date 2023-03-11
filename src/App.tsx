import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import ListGroup from './components/ListGroup/ListGroup';

function App() {
  const [count, setCount] = useState(0);
  const data = <h1>Hello World</h1>;
  const cities = [
    'New York',
    'Sans fransico',
    'California',
    'London',
    'Tokyo',
  ].sort();

  return (
    <div className="App">
      <ListGroup heading="Cities" items={cities} />
    </div>
  );
}

export default App;
