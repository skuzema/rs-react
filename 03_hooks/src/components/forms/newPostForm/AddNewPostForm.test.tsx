import React from 'react';
import { render, screen } from '@testing-library/react';
import AddNewPostForm from './AddNewPostForm';

describe('AddNewPostForm', () => {
  test('renders all input fields', () => {
    render(<AddNewPostForm />);
    expect(screen.getByText('Author')).toBeInTheDocument();
    expect(screen.getByText('Article title')).toBeInTheDocument();
    expect(screen.getByText('Article content')).toBeInTheDocument();
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Select an option:')).toBeInTheDocument();
    expect(screen.getByText('I consent to my personal data')).toBeInTheDocument();
    expect(screen.getByText('Article picture')).toBeInTheDocument();
  });
});
