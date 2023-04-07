import React from 'react';
import { NavLink } from 'react-router-dom';

import './PageHeader.css';

interface PageProps {
  page_name: string;
}

function PageHeader(props: PageProps) {
  const { page_name } = props;
  return (
    <div className="header">
      <h2>{page_name}</h2>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/new">Form</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default PageHeader;
