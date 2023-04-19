import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from '../pages/mainPage/MainPage';
import AboutUsPage from '../pages/about/AboutUs';
import NewPostPage from '../pages/newPostPage/NewPostPage';
import Page404 from '../pages/404/404';

import './App.css';

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/new" element={<NewPostPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
