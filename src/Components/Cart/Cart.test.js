import { render, screen } from '@testing-library/react';
import store from "../../store/index";
import Cart from './index'
import {badgeNum} from './index'
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

import { BrowserRouter } from 'react-router-dom';


beforeEach(() => {
  
    render(
      <BrowserRouter history={history}>
        <Provider store={store}>
          <Cart />
        </Provider>
      </BrowserRouter>
    );
});

describe('Cart Component', () => {
  it('Renders cart with zero items', () => {
      expect(badgeNum).toBe('0')
      const cart = screen.getByRole('shoppingCart');
      expect(cart).toBeInTheDocument();
  });

  it('Finds zero items in the cart', () => {
      const cart = screen.getByRole('shoppingCart');
      act(() => {userEvent.click(cart) });
      const noItems = screen.getByRole('menuitem');
      expect(noItems).toBeInTheDocument()
  });

  it('Takes you to cart page', () => {
    const cart = screen.getByRole('shoppingCart');
    act(() => {userEvent.click(cart) });
    expect(location.pathname).toBe('/');
    const link = screen.getByRole('cartLink')
    act(() => {userEvent.click(link)});
    expect(location.pathname).toBe('/cart');
  })
  
});