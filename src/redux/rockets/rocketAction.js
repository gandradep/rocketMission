/* eslint-disable object-curly-newline */
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_ROCKETS = 'rocket-store/rockets/FETCH_ROCKETS';
const REMOVE_ROCKET = 'rocket-store/rockets/REMOVE_ROCKET';

const API_URL = 'https://api.spacexdata.com/v3/rockets';

const rocketList = [];

const rocketReducer = (state = rocketList, action) => {
  const { type, payload } = action;
  console.log(payload, type);
  switch (type) {
    case 'rocket-store/rockets/FETCH_ROCKETS/fulfilled':
      return payload.rockets;

    case 'rocket-store/rockets/REMOVE_ROCKET/fulfilled':
      return state.map((rocket) => {
        if (rocket.id === payload.id) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });

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

export const removeRocket = createAsyncThunk(REMOVE_ROCKET, async (id) => ({
  id,
}));

export default rocketReducer;
