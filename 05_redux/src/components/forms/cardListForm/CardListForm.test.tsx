import React from 'react';
import { render } from '@testing-library/react';
import CardListForm from './CardListForm';
import { useAppSelector } from '../../../store/hooks';
import { vi } from 'vitest';

vi.mock('../../../store/hooks');

describe('CardListForm component', () => {
  beforeEach(() => {
    (useAppSelector as Vi.Mock).mockClear();
  });

  test('renders without error', () => {
    (useAppSelector as Vi.Mock).mockReturnValue([]); // set the mocked value for the useAppSelector hook

    render(<CardListForm />);
    expect(useAppSelector).toHaveBeenCalled();
  });
});
