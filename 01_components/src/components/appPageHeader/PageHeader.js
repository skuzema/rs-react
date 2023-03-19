import React from 'react';
import { NavLink } from 'react-router-dom';
import './PageHeader.css';
class PageHeader extends React.Component {
    render() {
        return (React.createElement("div", { className: "header" },
            React.createElement("h2", null, this.props.page_name),
            React.createElement("ul", { className: "navbar-nav" },
                React.createElement("li", { className: "nav-item" },
                    React.createElement(NavLink, { to: "/" }, "Home")),
                React.createElement("li", { className: "nav-item" },
                    React.createElement(NavLink, { to: "/about" }, "About")))));
    }
}
export default PageHeader;
