import { render, screen } from '@testing-library/react';
import { Footer } from './index.jsx';
import { BrowserRouter } from 'react-router-dom';
beforeEach(() => {
  
  render(
    <BrowserRouter>

        <Footer/>
    </BrowserRouter>
  );
})
describe('Footer component', () => {
  it('renders without crashing', () => {
 
  });

  it('renders a footer element', () => {
  
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  it('renders three paragraphs with the correct text', () => {

    const paragraphs = screen.getAllByText(/^(©|#|\d)/); //matches text that starts with either &copy;, #, or a digit
    expect(paragraphs).toHaveLength(3);
    expect(paragraphs[0]).toHaveTextContent('© Ethan Luxton');
    expect(paragraphs[1]).toHaveTextContent('# 999-999-9999');
    expect(paragraphs[2]).toHaveTextContent('1984 Fake Address Ave, Fake Town, WA 99999');
  });

});
