import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <div className="profile-content">
      <div className="missions">
        <h2>My Missions</h2>
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
