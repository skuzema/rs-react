import React from 'react';
import { NavLink } from 'react-router-dom';

import './PageHeader.css';

interface PageProps {
  page_name: string;
}

class PageHeader extends React.Component<PageProps> {
  render() {
    return (
      <div className="header">
        <h2>{this.props.page_name}</h2>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default PageHeader;
