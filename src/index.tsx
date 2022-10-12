import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator/Calculator';
import Millionaire from './components/millionaire/Millionaire';
import Randomizer from './components/randomizer/Randomizer'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="millionaire" element={<Millionaire />} />
      <Route path="randomizer" element={<Randomizer />} />
    </Routes>

  </BrowserRouter>
);
