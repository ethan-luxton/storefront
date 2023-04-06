import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BasicTabs from './index';
import { Provider } from 'react-redux';
import { mockStore } from './mockStore';

describe('BasicTabs component', () => {
  it('renders the correct heading', () => {
    render(
      <Provider store={mockStore}>
        <BasicTabs />
      </Provider>
    );
    const heading = screen.getByRole('heading', { level: 2, name: 'Browse our Categories' });
    expect(heading).toBeInTheDocument();
  });

  it('renders the correct number of tabs', () => {
    render(
      <Provider store={mockStore}>
        <BasicTabs />
      </Provider>
    );
    const tabs = screen.getAllByRole('tab');
    expect(tabs).toHaveLength(2);
  });

  it('renders the correct tab panels when clicked', () => {
    render(
      <Provider store={mockStore}>
        <BasicTabs />
      </Provider>
    );
    const firstTab = screen.getByRole('tab', { name: 'Books' });
    const secondTab = screen.getByRole('tab', { name: 'Electronics' });
    const firstTabPanel = screen.getByText('Amazing Books');
    const secondTabPanel = screen.getByText('Amazing Electronics');

    expect(firstTabPanel).toBeInTheDocument();
    expect(secondTabPanel).toBeInTheDocument();

    userEvent.click(secondTab);

    expect(firstTabPanel).toBeInTheDocument();
    expect(secondTabPanel).toBeInTheDocument();
  });
});
