import React from 'react';
import PropTypes from 'prop-types';
import MissionBadge from './MissionBadge';
import MissionButton from './MissionButton';
import classes from './Missions.module.css';

const Mission = (props) => {
  const {
    name, description, id, reserved,
  } = props;
  return (
    <tr>
      <td
        className={`${classes.border} ${classes.bold} ${classes.verticalTop}`}
      >
        {name}
      </td>
      <td className={classes.border}>{description}</td>
      <td className={`${classes.border} ${classes.center}`}>
        <MissionBadge reserved={reserved} />
      </td>
      <td className={`${classes.border} ${classes.center}`}>
        <MissionButton
          id={id}
          name="button"
          reserved={reserved}
        />
      </td>
    </tr>
  );
};
Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
export default Mission;
