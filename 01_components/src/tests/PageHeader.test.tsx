import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import PageHeader from '../components/appPageHeader/PageHeader';

describe('PageHeader component', () => {
  const pageName = 'Test Page';

  test('displays the correct page name', () => {
    render(
      <Router>
        <PageHeader page_name={pageName} />
      </Router>
    );

    const pageTitle = screen.getByText(pageName);
    expect(pageTitle).toBeInTheDocument();
  });

  test('navigates to the correct page when a link is clicked', () => {
    render(
      <Router>
        <PageHeader page_name={pageName} />
      </Router>
    );

    const homeLink = screen.getByText('Home');
    userEvent.click(homeLink);
    expect(window.location.pathname).toBe('/');
  });
});
