import { useContext } from 'react';
import { Context } from '../../contexts/ResultsContext';
import { Counter } from '../Counter';
import { Options } from '../Options';

import './App.css';

function App() {
  const { resultState: { result } } = useContext(Context)
  
  return (
    <section className="general-container">
      <h1>Escolha uma das opções</h1>
        <Counter />
        {result && 
        <div className='div-result'>
          <p className='p-result'>{result}</p>
        </div>}
        <Options />
    </section>
  );
}

export default App;
