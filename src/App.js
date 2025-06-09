import React from 'react';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import DataFetchingComponent from './components/DataFetchingComponent';

function App() {
  return (
    <div className="App">
      <h1>React Form Examples</h1>
      <ControlledForm />
      <hr />
      <UncontrolledForm />
      <hr />
      <DataFetchingComponent />
    </div>
  );
}

export default App;

