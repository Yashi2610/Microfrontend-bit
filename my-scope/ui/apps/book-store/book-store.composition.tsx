import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { BookStoreApp } from './app';

export const BasicBookStore = () => {
  return (
    <MemoryRouter>
      <BookStoreApp></BookStoreApp>
    </MemoryRouter>
  );
};
