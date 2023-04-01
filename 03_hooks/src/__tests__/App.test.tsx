import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import App from '../components/app/App';
import AboutUsPage from '../components/pages/about/AboutUs';
import Page404 from '../components/pages/404/404';
import NewPostPage from '../components/pages/newPostPage/NewPostPage';

describe('App component', () => {
  it('renders the 404 page when navigating to a non-existent route', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/non-existent-route']}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/new" element={<NewPostPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </MemoryRouter>
    );
    expect(getByText(/404/i)).toBeInTheDocument();
  });
});
