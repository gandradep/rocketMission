import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rocketAction';

const RocketPage = () => {
  const apiRockets = useSelector((state) => state.rocket, shallowEqual);
  console.log(apiRockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return <h3>Rockets</h3>;
};

export default RocketPage;
