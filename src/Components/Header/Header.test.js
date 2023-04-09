import { render, screen } from '@testing-library/react';
import Header from './index';
import store from "../../store/index";
import { Provider } from "react-redux";

beforeEach(() => {
  
  render( <Provider store={store}><Header /></Provider>);
})
describe('Header component', () => {
  it('renders without crashing', () => {
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
  it('renders the correct heading text', () => {
    const heading = screen.getByRole('heading', { name: 'The Everything Store' });
    expect(heading).toBeInTheDocument();
  });
  it('renders a cart button with the correct text', () => {
    const cartButton = screen.getByRole('shoppingCart');
    expect(cartButton).toBeInTheDocument();
  });
});






