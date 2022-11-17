import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import ReserveBtn from '../components/ReserveBtn';

describe('Appcomponents snapshots', () => {
  it('App renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <ReserveBtn />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
