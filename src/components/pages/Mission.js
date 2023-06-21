import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../../redux/mission/MissionSlice';

const Mission = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.mission.missions || []);

  useEffect(() => {
    if (!missions.length)dispatch(getMissions());
  }, [dispatch, missions.length]);

  return (
    <table className="mission-tb" cellSpacing={0}>
      <thead>
        <tr>
          <th className="head">Mission</th>
          <th className="head">Description</th>
          <th className="head">Status</th>
          <th className="head">Join</th>
        </tr>
      </thead>
      <tbody>
        {
          missions.map((mission) => (
            <tr className="mission-id" key={mission.mission_id}>
              <td className="mission-name">{mission.mission_name}</td>
              <td className="mission-description">{mission.description}</td>
              <td>
                <span className="mission-status">
                  Not a member
                </span>
              </td>
              <td>
                <button type="button" className="join-mission">
                  Join-Mission
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default Mission;
