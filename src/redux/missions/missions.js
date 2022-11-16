import { createAsyncThunk } from '@reduxjs/toolkit';

const MISSIONS_FETCHED = 'rocketMission/missions/MISSIONS_FETCHED';
const urlApi = 'https://api.spacexdata.com/v3/missions';

const fetchMissions = (data) => ({
  type: MISSIONS_FETCHED,
  data,
});

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async (_, thunkApi) =>
    fetch(urlApi)
      .then((response) => response.json())
      .then((data) => {
        thunkApi.dispatch(fetchMissions(data));
      }),
);
const missionsReducer = (state = [0], action) => {
  const missionList = [];
  switch (action.type) {
    case MISSIONS_FETCHED:
      action.data.forEach((item) => {
        const missionData = {
          mission_id: item.mission_id,
          mission_name: item.mission_name,
          description: item.description,
        };
        missionList.push(missionData);
      });
      return [...missionList];
    default:
      return state;
  }
};

export default missionsReducer;
