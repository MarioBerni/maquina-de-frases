// App.js
import React from 'react';
import QuoteBox from './Components/QuoteBox';
import Title from './Components/Title'; // Importamos el componente Title
import './App.css';

function App() {
  return (
    <div className="App">
      <Title /> {/* Aquí usamos el componente Title */}
      <QuoteBox />
      <div className="margin-text">Realizado por Mario Berni</div>
    </div>
  );
}

export default App;
