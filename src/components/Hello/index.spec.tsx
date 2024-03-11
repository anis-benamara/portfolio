import { render, screen } from '@testing-library/react';

import Hello from '.';

describe('Hello', () => {
  it('matches snapshot', () => {
    const { container } = render(<Hello />);

    expect(container).toMatchSnapshot();
  });

  it('displays Hello text', () => {
    render(<Hello />);

    expect(screen.getByRole('greeting', { hidden: true })).toHaveTextContent(
      'Hello'
    );
  });

  it('greets the user name passed as props', () => {
    const { rerender } = render(<Hello name="John" />);

    expect(screen.getByRole('greeting', { hidden: true })).toHaveTextContent(
      'Hello John'
    );

    rerender(<Hello name="Alex" />);

    expect(screen.getByRole('greeting', { hidden: true })).toHaveTextContent(
      'Hello Alex'
    );
  });
});
