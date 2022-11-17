import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import RocketBadge from '../components/RocketBadge';

describe('Appcomponents snapshots', () => {
  it('App renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <RocketBadge />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
