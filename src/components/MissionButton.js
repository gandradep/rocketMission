import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import classes from './MissionButton.module.css';
import { joinMission } from '../redux/missions/missions';

const MissionButton = (props) => {
  const { id, reserved } = props;
  const dispatch = useDispatch();
  const joinMissionHandler = (e) => {
    dispatch(joinMission(e.target.id));
  };
  if (reserved) {
    return (
      <div>
        <button
          id={id}
          type="button"
          className={`${classes.button} ${classes.red}`}
          onClick={joinMissionHandler}
        >
          Leave Mission
        </button>
      </div>
    );
  }
  return (
    <div>
      <button
        id={id}
        type="button"
        className={`${classes.button} ${classes.gray}`}
        onClick={joinMissionHandler}
      >
        Join Mission
      </button>
    </div>
  );
};

MissionButton.propTypes = {
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default MissionButton;
