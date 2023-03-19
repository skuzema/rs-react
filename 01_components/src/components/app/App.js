import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import AboutUsPage from '../pages/AboutUs';
import Page404 from '../pages/404';
import './App.css';
class App extends React.Component {
    render() {
        return (React.createElement(Router, null,
            React.createElement("div", { className: "app" },
                React.createElement(Routes, null,
                    React.createElement(Route, { path: "/", element: React.createElement(MainPage, null) }),
                    React.createElement(Route, { path: "/about", element: React.createElement(AboutUsPage, null) }),
                    React.createElement(Route, { path: "*", element: React.createElement(Page404, null) })))));
    }
}
export default App;
