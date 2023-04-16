import React from 'react';
import { render, screen } from '@testing-library/react';
import BasicTabs from './index';
import { Provider } from 'react-redux';
import store from "../../store/index";
import { BrowserRouter } from 'react-router-dom';
beforeEach(() => {
  
  render(
    <BrowserRouter>
      <Provider store={store}>
        <BasicTabs />
      </Provider>
    </BrowserRouter>
  );
})
describe('BasicTabs component', () => {
  it('renders the correct heading', () => {
    
    const heading = screen.getByRole('heading', { level: 2, name: 'Browse our Categories' });
    expect(heading).toBeInTheDocument();
  });

 
});
