import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../components/app/App';
describe('App', () => {
    test('renders home page', () => {
        render(React.createElement(MemoryRouter, { initialEntries: ['/'] },
            React.createElement(App, null)));
        expect(screen.getByText('Store')).toBeInTheDocument();
    });
    test('renders about page', () => {
        render(React.createElement(MemoryRouter, { initialEntries: ['/about'] },
            React.createElement(App, null)));
        expect(screen.getByText('This is the ABOUT page')).toBeInTheDocument();
    });
    test('renders not found page', () => {
        render(React.createElement(MemoryRouter, { initialEntries: ['/non-existent-route'] },
            React.createElement(App, null)));
        expect(screen.getByText('This is the 404 page')).toBeInTheDocument();
    });
});
