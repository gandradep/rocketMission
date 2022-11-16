import { createAsyncThunk } from '@reduxjs/toolkit';

const MISSIONS_FETCHED = 'rocketMission/missions/MISSIONS_FETCHED';
const JOIN_MISSION = 'rocketMission/missions/JOIN_MISSION';
const LEAVE_MISSION = 'rocketMission/missions/LEAVE_MISSION';
const urlApi = 'https://api.spacexdata.com/v3/missions';

const fetchMissions = (data) => ({
  type: MISSIONS_FETCHED,
  data,
});

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  id,
});

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async (_, thunkApi) => {
    const data = await fetch(urlApi)
      .then((response) => response.json());
    thunkApi.dispatch(fetchMissions(data));
  },
);

// export const getMissions = createAsyncThunk(
//   'missions/getMissions',
//   async (_, thunkApi) => fetch(urlApi)
//     .then((response) => response.json())
//     .then((data) => {
//       thunkApi.dispatch(fetchMissions(data));
//     }),
// );
const missionsReducer = (state = [0], action) => {
  const missionList = [];
  let newState = [];
  switch (action.type) {
    case MISSIONS_FETCHED:
      action.data.forEach((item) => {
        const missionData = {
          id: item.mission_id,
          name: item.mission_name,
          description: item.description,
          reserved: false,
        };
        missionList.push(missionData);
      });
      console.log(missionList[0]);
      return [
        ...missionList,
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
