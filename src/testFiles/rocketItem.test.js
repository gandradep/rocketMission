import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import RocketItem from '../components/RocketItem';

describe('Appcomponents snapshots', () => {
  it('App renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <RocketItem />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
