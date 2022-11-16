import React from 'react';
import PropTypes from 'prop-types';
import MissionBadge from './MissionBadge';
import MissionButton from './MissionButton';
import classes from './Missions.module.css';

const Mission = (props) => {
  const { name, description } = props;
  return (
    <tr>
      <td
        className={`${classes.border} ${classes.bold} ${classes.verticalTop}`}
      >
        {name}
      </td>
      <td className={classes.border}>{description}</td>
      <td className={`${classes.border} ${classes.center}`}>
        <MissionBadge />
      </td>
      <td className={`${classes.border} ${classes.center}`}>
        <MissionButton />
      </td>
    </tr>
  );
};
Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
