import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import News from './News';
import Features from './Features';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/news" element={<News />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
