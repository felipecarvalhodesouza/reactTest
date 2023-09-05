import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cabecalho from './components/Cabecalho';
import Formulario from './components/Formulario';

ReactDOM.render(
  <React.StrictMode>
    <Cabecalho /> 
    <Formulario />
  </React.StrictMode>,
  document.getElementById('root')
);