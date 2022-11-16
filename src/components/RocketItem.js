import React from 'react';
import classes from './Rocket.module.css';
import ReserveBtn from './ReserveBtn';
import RocketBadge from './RocketBadge';

const RocketItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { image, name, description, id, reserved } = props;

  return (
    <div className={`${classes.items} dFlex`}>
      <div>
        <img src={image} alt="" className={classes.rocket_img} />
      </div>
      <div className={classes.rocket_description}>
        <h3 className={classes.rocket_name}>{name}</h3>
        {reserved ? <RocketBadge /> : ''}
        <p>{description}</p>
        {!reserved && (
          <ReserveBtn id={id} reserved={reserved}>
            Reserve Rocket
          </ReserveBtn>
        )}
        {reserved && (
          <ReserveBtn id={id} reserved={reserved}>
            Cancel Reservation
          </ReserveBtn>
        )}
      </div>
    </div>
  );
};

export default RocketItem;
