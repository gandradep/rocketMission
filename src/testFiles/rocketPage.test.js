import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import RocketPage from '../components/RocketsPage';

describe('Appcomponents snapshots', () => {
  it('App renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <RocketPage />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
