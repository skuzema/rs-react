import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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

  it('displays errors when form is submitted with invalid data', () => {
    const { getByText } = render(<AddNewPostForm />);
    fireEvent.submit(screen.getByRole('button'));

    expect(getByText("The field 'Author' should be filled!")).toBeInTheDocument();
    expect(getByText("The field 'Title' should be filled!")).toBeInTheDocument();
    expect(getByText("The field 'Article content' should be filled!")).toBeInTheDocument();
    expect(getByText("The field 'Date' should be filled!")).toBeInTheDocument();
    expect(getByText('Please select image file!')).toBeInTheDocument();
  });

  it('submits form with valid data and adds new card', () => {
    const { queryByText, getByTestId } = render(<AddNewPostForm />);

    const author = getByTestId('author') as HTMLInputElement;
    const title = getByTestId('title') as HTMLInputElement;
    const post = getByTestId('post') as HTMLTextAreaElement;
    const post_date = getByTestId('post_date') as HTMLInputElement;
    const select = getByTestId('select') as HTMLSelectElement;
    const check = getByTestId('check') as HTMLSelectElement;
    const gender = getByTestId('gender') as HTMLSelectElement;
    const image = getByTestId('image') as HTMLSelectElement;

    fireEvent.change(author, { target: { value: 'John Doe' } });
    fireEvent.change(title, { target: { value: 'My Title' } });
    fireEvent.change(post, {
      target: { value: 'My article content' },
    });
    fireEvent.change(post_date, { target: { value: '2022-01-01' } });
    fireEvent.change(select, { target: { value: '0' } });
    fireEvent.click(check);
    fireEvent.click(gender);
    fireEvent.change(image, {
      target: { files: [new File([''], 'test.jpg', { type: 'image/jpeg' })] },
    });

    fireEvent.submit(screen.getByRole('button'));

    expect(queryByText("The field 'Author' should be filled!")).not.toBeInTheDocument();
    expect(queryByText("The field 'Title' should be filled!")).not.toBeInTheDocument();
    expect(queryByText("The field 'Article content' should be filled!")).not.toBeInTheDocument();
    expect(queryByText("The field 'Date' should be filled!")).not.toBeInTheDocument();
    expect(queryByText("The field 'Select' should be filled!")).not.toBeInTheDocument();

    expect(author.value).toBe('John Doe');
    expect(title.value).toBe('My Title');
    expect(post.value).toBe('My article content');
    expect(post_date.value).toBe('2022-01-01');
    expect(select.value).toBe('0');
    expect(check.value).toBe('on');
    expect(gender.value).toBe('on');
  });
});
