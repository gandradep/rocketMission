import React from 'react';
import { useSelector } from 'react-redux';
import RocketProfile from './RocketProfile';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  const joinMission = missions.filter((item) => item.reserved === true);
  return (
    <div className="dFlex w-full myProfile">
      <div className="joinMission w-40">
        <h3 className="profileTitle">My Missions</h3>
        <ul>
          {joinMission?.map((mission) => (
            <li className="border" key={mission.id}>{mission.name}</li>
          ))}
        </ul>
      </div>
      <div className="rocket w-40">
        <RocketProfile />
      </div>
    </div>
  );
};

export default MyProfile;
