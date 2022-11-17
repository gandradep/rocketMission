import { createAsyncThunk } from '@reduxjs/toolkit';

const MISSIONS_FETCHED = 'rocketMission/missions/MISSIONS_FETCHED';
const JOIN_MISSION = 'rocketMission/missions/JOIN_MISSION';
const LEAVE_MISSION = 'rocketMission/missions/LEAVE_MISSION';
const urlApi = 'https://api.spacexdata.com/v3/missions';

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  id,
});

export const getMissions = createAsyncThunk(
  MISSIONS_FETCHED,
  async () => {
    const data = await fetch(urlApi)
      .then((response) => response.json());
    const missionList = [];
    data.forEach((item) => {
      const missionData = {
        name: item.mission_name,
        id: item.mission_id,
        description: item.description,
        reserved: false,
      };
      missionList.push(missionData);
    });
    return missionList;
  },
);

const missionsReducer = (state = [], action) => {
  let newState = [];
  switch (action.type) {
    case `${MISSIONS_FETCHED}/fulfilled`:
      return [
        ...action.payload,
      ];
    case JOIN_MISSION:
      newState = state.map((mission) => {
        if (mission.id !== action.id) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
      return [
        ...newState,
      ];
    case LEAVE_MISSION:
      newState = state.map((mission) => {
        if (mission.id !== action.id) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
      return [
        ...newState,
      ];
    default:
      return state;
  }
};

export default missionsReducer;
