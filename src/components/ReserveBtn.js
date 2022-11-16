import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './RocketButtons.module.css';
import {
  removeRocket,
  cancelReservedRocket,
} from '../redux/rockets/rocketAction';

const ReserveBtn = (props) => {
  const dispatch = useDispatch();

  const removeHandler = (id) => {
    dispatch(removeRocket(id));
  };

  const cancelHandler = (id) => {
    dispatch(cancelReservedRocket(id));
  };

  // eslint-disable-next-line react/prop-types
  const { children, id, reserved } = props;
  console.log(props);

  return (
    <button
      className={`${reserved ? classes.cancelBtn : classes.btn}`}
      type="button"
      onClick={() => {
        if (reserved) {
          cancelHandler(id);
        } else {
          removeHandler(id);
        }
      }}
    >
      {children}
    </button>
  );
};

export default ReserveBtn;
