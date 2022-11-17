import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  const joinMission = missions.filter((item) => item.reserved === true);
  console.log(joinMission);
  return (
    <div>
      <div>
        <h3>My Missions</h3>
        
      </div>
    </div>
  );
};

export default MyProfile;
