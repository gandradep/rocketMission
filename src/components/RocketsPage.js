import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rocketAction';
import RocketItem from './RocketItem';
import classes from './Rocket.module.css';

const RocketPage = () => {
  const rockets = useSelector((state) => state.rocket, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <ul className={classes.list}>
      <li>
        {rockets.map((rocket) => (
          <RocketItem
            image={rocket.image}
            key={rocket.id}
            name={rocket.name}
            description={rocket.description}
          />
        ))}
      </li>
    </ul>
  );
};

export default RocketPage;
