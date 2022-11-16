import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './RocketButtons.module.css';
import { removeRocket } from '../redux/rockets/rocketAction';

const ReserveBtn = (props) => {
  const dispatch = useDispatch();

  const removeHandler = (id) => {
    dispatch(removeRocket(id));
  };

  // eslint-disable-next-line react/prop-types
  const { children, id } = props;

  return (
    <button
      className={classes.btn}
      type="button"
      onClick={() => {
        removeHandler(id);
      }}
    >
      {children}
    </button>
  );
};

export default ReserveBtn;
