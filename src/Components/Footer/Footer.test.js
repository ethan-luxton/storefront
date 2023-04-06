import { render, screen } from '@testing-library/react';
import { Footer } from './index.jsx';

describe('Footer component', () => {
  it('renders without crashing', () => {
    render(<Footer />);
  });

  it('renders a footer element', () => {
    render(<Footer />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  it('renders three paragraphs with the correct text', () => {
    render(<Footer />);
    const paragraphs = screen.getAllByText(/^(©|#|\d)/); //matches text that starts with either &copy;, #, or a digit
    expect(paragraphs).toHaveLength(3);
    expect(paragraphs[0]).toHaveTextContent('© Ethan Luxton');
    expect(paragraphs[1]).toHaveTextContent('# 999-999-9999');
    expect(paragraphs[2]).toHaveTextContent('1984 Fake Address Ave, Fake Town, WA 99999');
  });

});
