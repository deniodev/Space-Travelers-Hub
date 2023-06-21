import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, joinMission, leaveMission } from '../../redux/mission/MissionSlice';

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
              <td className="mission-name"><span>{mission.mission_name}</span></td>
              <td className="mission-description">{mission.description}</td>
              {!mission.member && (
                <>
                  <td>
                    <span className="mission-status">NOT A MEMBER</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => dispatch(joinMission(mission.mission_id))}
                      className="join-mission"
                    >
                      Join Mission
                    </button>
                  </td>
                </>
              )}
              {mission.member && (
                <>
                  <td>
                    <span className="active-member">
                      Active Member
                    </span>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => dispatch(leaveMission(mission.mission_id))}
                      className="leave-mission"
                    >
                      Leave Mission
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default Mission;
