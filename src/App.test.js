import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
import '@testing-library/jest-dom/extend-expect';

import { ProductProvider } from './context';

test('renders learn react link', () => {
  const { getByText } = render(
    <ProductProvider>
        <Router>
            <App />
        </Router>
    </ProductProvider>);
  const linkElement = getByText(/Closet/i);
  expect(linkElement).toBeInTheDocument();
});
