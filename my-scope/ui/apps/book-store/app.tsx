import React, { ReactNode } from 'react';

import { Card } from '@my-org/my-scope.card';

export type BookStoreAppProps = {
  children?: ReactNode;
};

export function BookStoreApp({ children }: BookStoreAppProps) {
  return (
    <div>
      {children}

      <Card />
    </div>
  );
}
