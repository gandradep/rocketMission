import React from 'react';
import classes from './RocketButtons.module.css';

const ReserveBtn = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;

  return (
    <button className={classes.btn} type="submit">
      {children}
    </button>
  );
};

export default ReserveBtn;
