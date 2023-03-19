import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import AboutUsPage from '../pages/AboutUs';
import Page404 from '../pages/404';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
