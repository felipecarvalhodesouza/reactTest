import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cabecalho from './components/Cabecalho';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Cabecalho /> 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);