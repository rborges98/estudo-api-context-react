import { useState } from 'react';
import './App.css';
import { Count } from './components/count';
import { Input } from './components/input';
import { Result } from './components/result';
import { CountProvider } from './context/countContext';
import { InputContext } from './context/inputContext';

function App() {

  const [name, setName] = useState('')

  return (
    <div className="App">
      <InputContext.Provider value={{name, setName}}>
        <CountProvider>
          <Input />
          <br />
          <Count />
          <hr />
          <Result />
        </CountProvider>
      </InputContext.Provider>
    </div>
  );
}

export default App;
