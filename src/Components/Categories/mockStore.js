import { configureStore } from '@reduxjs/toolkit';
import { reducer } from '../../store';

const mockCategories = [
  {
    category: 'books',
    displayName: 'Books',
    description: 'Amazing Books',
  },
  {
    category: 'electronics',
    displayName: 'Electronics',
    description: 'Amazing Electronics',
  },
];

const initialState = {
  categories: {
    categories: mockCategories,
    selectedCategory: mockCategories[0],
  },
};

export const mockStore = configureStore({ reducer, preloadedState: initialState });
