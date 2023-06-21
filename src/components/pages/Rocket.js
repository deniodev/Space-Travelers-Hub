import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketList from './RocketList';
import { fetchRockets } from '../../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets, isFetched } = useSelector((state) => state.rockets);

  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchRockets());
    }
  }, [dispatch, isFetched]);

  return (
    <div>
      <h1>Rockets</h1>
      {rockets.map((rocket) => (
        <RocketList rocket={rocket} key={rocket.id} />
      ))}
    </div>
  );
};

export default Rockets;
