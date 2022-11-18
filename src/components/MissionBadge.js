import React from 'react';
import PropTypes from 'prop-types';
import classes from './MissionButton.module.css';

const MissionBadge = (props) => {
  const { reserved } = props;
  if (reserved) {
    return (
      <button
        type="button"
        className={`${classes.badge} ${classes.bgBlue}`}
      >
        Active Member
      </button>
    );
  }
  return (
    <button
      type="button"
      className={`${classes.badge} ${classes.bgGray}`}
    >
      NOT A MEMBER
    </button>
  );
};
MissionBadge.propTypes = {
  reserved: PropTypes.bool.isRequired,
};

export default MissionBadge;
