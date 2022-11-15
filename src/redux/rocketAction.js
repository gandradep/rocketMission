import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_ROCKETS = 'rocket-store/rockets/FETCH_ROCKETS';

const API_URL = 'https://api.spacexdata.com/v3/rockets';

const rocketList = [];

const rocketReducer = (state = rocketList, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'rocket-store/rockets/FETCH_ROCKETS/fulfilled':
      return payload.rockets;

    default:
      return state;
  }
};

export const fetchRockets = createAsyncThunk(FETCH_ROCKETS, async () => {
  const res = await axios.get(API_URL);
  const resultArray = Object.entries(res.data);

  return {
    // eslint-disable-next-line no-unused-vars
    rockets: resultArray.map(([_, value]) => ({
      id: value.id,
      type: value.rocket_type,
      name: value.rocket_name,
      image: value.flickr_images[0],
      description: value.description,
    })),
  };
});

export default rocketReducer;
