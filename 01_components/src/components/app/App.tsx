import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from '../pages/mainPage/MainPage';
import AboutUsPage from '../pages/about/AboutUs';
import Page404 from '../pages/404/404';

import './App.css';

class App extends React.Component {
  render() {
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
}

export default App;
