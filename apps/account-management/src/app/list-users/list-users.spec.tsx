import React from 'react';
import { render } from '@testing-library/react';

import ListUsers from './list-users';

describe('ListUsers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListUsers />);
    expect(baseElement).toBeTruthy();
  });
});
