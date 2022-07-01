import React from 'react';
import { render } from '@testing-library/react';
import { BasicBookStore } from './book-store.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicBookStore />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
