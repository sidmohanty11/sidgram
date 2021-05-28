import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const SuggestedProfile = ({ userDocId, username, profileId, userId }) => {
    const [followed, setFollowed] = React.useState(false);
    
    async function handleFollowUser() {
        setFollowed(true);

        // update the following array of the logged in user! -> +1
        // update the followers array of the user who has been followed! -> +1
    }

  return !followed ? (
    <div className="flex flex-row items-center align-items justify-between">
      <div className="flex items-center justify-between">
        <img
          src={`/images/avatars/${username}.jpeg`}
          alt=""
          className="rounded w-8 flex mr-3"
        />
        <Link to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
      </div>
      <button
        className="text-xs font-bold text-blue-medium"
        type="button"
        onClick={() => {}}
      >
        Follow
      </button>
    </div>
  ) : (
    <></>
  );
};

SuggestedProfile.propTypes = {
  userDocId: propTypes.string,
  username: propTypes.string,
  profileId: propTypes.string,
  userId: propTypes.string,
};

export default SuggestedProfile;
