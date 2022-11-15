import React from 'react';
import MissionBadge from './MissionBadge';
import MissionButton from './MissionButton';
import classes from './Missions.module.css';

const Mission = (props) => {
  const { name, description } = props;
  return (
  <tr>
    <td className= {`${classes.border} ${classes.bold}`}>{name}</td>
    <td className= {classes.border}>{description}</td>
    <td className= {`${classes.border} ${classes.center}`}>
      <MissionBadge  />
    </td>
    <td className= {`${classes.border} ${classes.center}`}>
      <MissionButton />
    </td>
  </tr>
);}

export default Mission;
