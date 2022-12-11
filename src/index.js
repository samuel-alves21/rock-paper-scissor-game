import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/index';
import { ResultsContext } from './contexts/ResultsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResultsContext>
      <App />
    </ResultsContext>
  </React.StrictMode>
);
