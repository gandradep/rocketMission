import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Navbar from '../components/Navbar';


it('Navbar renders correctly', () => {
  const tree = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  expect(tree).toMatchSnapshot();
});
