import React from 'react';
import { render, screen } from '@testing-library/react';
import BasicTabs from './index';
import { Provider } from 'react-redux';
import store from "../../store/index";

beforeEach(() => {
  
  render(
    <Provider store={store}>
      <BasicTabs />
    </Provider>
  );
})
describe('BasicTabs component', () => {
  it('renders the correct heading', () => {
    
    const heading = screen.getByRole('heading', { level: 2, name: 'Browse our Categories' });
    expect(heading).toBeInTheDocument();
  });

 
});
