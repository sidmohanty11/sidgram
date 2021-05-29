import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import useUser from "../../hooks/use-user";
import { isUserFollowingProfile } from "../../services/firebase";

const Header = ({
  photosCount,
  profile: {
    username: visitingUsername,
    docId: profileDocId,
    userId: profileUserId,
    fullName,
    following = [],
    followers = [],
  },
  followerCount,
  setFollowerCount,
}) => {
  const { user } = useUser();
  const [isFollowingProfile, setIsFollowingProfile] = useState(false);
  const activeBtnFollow = user.username && user.username !== visitingUsername;

  const handleToggleFollow = () => {
    setIsFollowingProfile((isFollowingProfile) => !isFollowingProfile);
    setFollowerCount({
      followerCount: isFollowingProfile ? Number(followers - 1) : Number(followers + 1),
    });
  };

  useEffect(() => {
    const isLoggedInUserFollowingProfile = async () => {
      const isFollowing = await isUserFollowingProfile(
        user.username,
        profileUserId
      );
      setIsFollowingProfile(isFollowing);
    };

    if (user.username && profileUserId) {
      isLoggedInUserFollowingProfile();
    }
  }, [user.username, profileUserId]);
  return (
    <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
      <div className="container flex justify-center">
        {user.username ? (
          <img
            src={`/images/avatars/${visitingUsername}.jpeg`}
            alt={`${visitingUsername} profile picture`}
            className="rounded-full h-40 w-40 flex"
          />
        ) : (
          <Skeleton count={1} height={180} width={200} />
        )}
        <div className="flex items-center justify-center flex-col col-span-2">
          <div className="container flex items-center">
            {user.username ? (
              <>
                <p className="text-2xl mx-4">{visitingUsername}</p>
                {activeBtnFollow && (
                  <button
                    onClick={handleToggleFollow}
                    className="bg-blue-medium font-bold text-sm rounded text-white w-20 h-8"
                  >
                    {isFollowingProfile ? "Unfollow" : "Follow"}
                  </button>
                )}
              </>
            ) : (
              <Skeleton className="mx-4" count={1} height={50} width={140} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  photosCount: propTypes.number,
  followerCount: propTypes.number,
  setFollowerCount: propTypes.func,
  profile: propTypes.shape({
    dateCreated: propTypes.number,
    docId: propTypes.string,
    followers: propTypes.array,
    following: propTypes.array,
    fullName: propTypes.string,
    userId: propTypes.string,
    username: propTypes.string,
  }),
};
