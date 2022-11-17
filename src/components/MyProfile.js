import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  const joinMission = missions.filter((item) => item.reserved === true);
  return (
    <div>
      <div className="joinMission">
        <h3>My Missions</h3>
        <ul>
          {joinMission?.map((mission) => (
            <li key={mission.id}>{mission.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
