import { render, screen } from '@testing-library/react';
import Header from './index';

describe('Header component', () => {
  it('renders without crashing', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('renders the correct heading text', () => {
    render(<Header />);
    const heading = screen.getByRole('heading', { name: 'The Everything Store' });
    expect(heading).toBeInTheDocument();
  });

  it('renders a cart button with the correct text', () => {
    render(<Header />);
    const cartButton = screen.getByRole('button', { name: 'Cart (0)' });
    expect(cartButton).toBeInTheDocument();
  });
});






