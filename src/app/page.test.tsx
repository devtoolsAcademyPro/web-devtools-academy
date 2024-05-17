import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('renders a heading', () => {
    const { container, getByRole, getAllByRole } = render(<Home />);
    const heading = getByRole('heading', { name: /Docs/ });
    const text = getAllByRole('paragraph');
    const links = getAllByRole('link');
    expect(container).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(text).toHaveLength(5);
    expect(links).toHaveLength(5);
  });
});
