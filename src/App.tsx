import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='ml-3 mt-4 text-[30px]'>
      <h2 >
        <Link to={'millionaire'}>1. Миллионер</Link>
      </h2>
      <h2 >
        <Link to={'calculator'}>2. Калькулятор</Link>
      </h2>
      <h2 >
        <Link to={'randomizer'}>3. Рандомизатор</Link>
      </h2>
    </div>
  );
}

export default App;
