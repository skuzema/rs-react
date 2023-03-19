import React from 'react';
import { Link } from 'react-router-dom';
import '../style/404.css';
const Page404 = () => {
    return (React.createElement("div", null,
        React.createElement("div", { id: "notfound" },
            React.createElement("div", { className: "notfound" },
                React.createElement("div", { className: "notfound-404" },
                    React.createElement("h1", null, "404")),
                React.createElement("h2", null, "We are sorry, Page not found!"),
                React.createElement("p", null, "The page you are looking for might have been removed had its name changed or is temporarily unavailable."),
                React.createElement(Link, { to: "/" }, "Back To Homepage")))));
};
export default Page404;
