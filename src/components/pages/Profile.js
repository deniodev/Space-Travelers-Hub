import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const allMissions = useSelector((state) => state.mission);
  const joinedMissions = allMissions.missions.filter((mymission) => mymission.member);
  return (
    <div className="profile-content">
      <div className="m-joined">
        <h1>My Missions</h1>
        {
            joinedMissions.length ? (
              <ul className="m-joined-profile">
                {
                  joinedMissions.map((mission) => (
                    <li key={mission.mission_id}>
                      {mission.mission_name}
                    </li>
                  ))
                }
              </ul>
            ) : (
              <div>
                <p>No missions joined yet!</p>
                <span>
                  Go to
                  <NavLink to="/missions"> Missions </NavLink>
                  to join a mission
                </span>
              </div>
            )
          }
      </div>

      <div className="rockets">
        <h2>My Rockets</h2>
        {reservedRockets.length > 0 ? (
          <div className="progress-rocket">
            {reservedRockets.map((rocket) => (
              <div className="item" key={rocket.id}>
                <h4>{rocket.rocket_name}</h4>
              </div>
            ))}
          </div>
        ) : (
          <div>No rockets reserved</div>
        )}
      </div>
    </div>
  );
};

export default Profile;
