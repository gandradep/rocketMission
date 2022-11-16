import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketAction';
import RocketItem from './RocketItem';
import classes from './Rocket.module.css';

let retrieveOnce = true;
const RocketPage = () => {
  const rockets = useSelector((state) => state.rocket, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    if (retrieveOnce) {
      dispatch(fetchRockets());
      retrieveOnce = false;
    }
  }, [dispatch]);

  return (
    <ul className={classes.list}>
      <li>
        {rockets.map((rocket) => (
          <RocketItem
            image={rocket.image}
            key={rocket.id}
            id={rocket.id}
            name={rocket.name}
            description={rocket.description}
            reserved={rocket.reserved}
          />
        ))}
      </li>
    </ul>
  );
};

export default RocketPage;
