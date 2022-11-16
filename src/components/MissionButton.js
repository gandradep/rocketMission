import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import classes from './MissionButton.module.css';
import { joinMission } from '../redux/missions/missions';

const MissionButton = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  const joinMissionHandler = (e) => {
    dispatch(joinMission(e.target.id));
  };

  return (
    <div>
      <button
        id={id}
        type="button"
        className={classes.button}
        onClick={joinMissionHandler}
      >
        Join Mission
      </button>
    </div>
  );
};

MissionButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default MissionButton;
