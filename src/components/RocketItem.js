import React from 'react';
import classes from './Rocket.module.css';
import ReserveBtn from './ReserveBtn';

const RocketItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { image, name, description } = props;

  return (
    <div className={`${classes.items} dFlex`}>
      <div>
        <img src={image} alt="" className={classes.rocket_img} />
      </div>
      <div className={classes.rocket_description}>
        <h3 className={classes.rocket_name}>{name}</h3>
        <p>{description}</p>
        <ReserveBtn>Reserve Rocket</ReserveBtn>
      </div>
    </div>
  );
};

export default RocketItem;
