import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Mission from '../components/Mission';
import MissionsPage from '../components/MissionsPage';
import MissionBadge from '../components/MissionBadge';
import MissionButton from '../components/MissionButton';

describe('Missions components', () => {
  it('MissionsPage renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <MissionsPage />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Mission renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('MissionBadge renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <MissionBadge />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('MissionButton renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <MissionButton />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
