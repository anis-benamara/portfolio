import React from 'react';

import { render } from '@testing-library/react';

import Contact from './page';

describe('Page UI', () => {
  it('should  display contact page with a heading', () => {
    const { container, getByRole } = render(<Contact />);

    expect(getByRole('heading')).toHaveTextContent('Contact me');

    expect(container).toMatchSnapshot();
  });
});
