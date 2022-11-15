/* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../redux/missions/missions';
import classes from './Missions.module.css';
import Mission from './Mission';
let fetchonce = true;

const MissionsPage = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (fetchonce) {
      dispatch(getMissions());
        fetchonce = false;
    }

  }, []);
  return (
    <div>
      <table className={`${classes.table} w-full `}>
        <thead>
          <tr className={classes.paddRow}>
            <th className={`${classes.w15} ${classes.border}`}>Mission</th>
            <th className={`${classes.w55} ${classes.border}`}>Description</th>
            <th className={`${classes.w15} ${classes.border}`}>Status</th>
            <th className={`${classes.w15} ${classes.border}`}></th>
          </tr>
        </thead>
        <tbody>
          {missions?.map((mission) => (
            <Mission
              key={mission.mission_id}
              name={mission.mission_name}
              description={mission.description}
            />
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default MissionsPage;
