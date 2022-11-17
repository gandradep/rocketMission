import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from '../redux/rockets/rocketAction';
import classes from './Rocket.module.css';

let retrieveOnce = true;
const RocketProfile = () => {
  const rockets = useSelector((state) => state.rocket, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    if (retrieveOnce) {
      dispatch(fetchRockets());
      retrieveOnce = false;
    }
  }, [dispatch]);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div>
      <h3 className={classes.profile_head}>My Rockets</h3>
      <ul className={classes.profile_list}>
        <li>
          {reservedRockets.map((rocket) => (
            <p key={rocket.id} className={classes.profile_names}>
              {rocket.name}
            </p>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default RocketProfile;
