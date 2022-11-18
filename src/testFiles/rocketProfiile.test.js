import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import RocketProfile from '../components/RocketProfile';

describe('Appcomponents snapshots', () => {
  it('App renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <RocketProfile />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
