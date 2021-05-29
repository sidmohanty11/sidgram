import React, { useReducer, useEffect } from "react";
import propTypes from "prop-types";
import Header from "./Header";

const UserProfile = ({ username }) => {
  const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return <div></div>;
};

export default UserProfile;
