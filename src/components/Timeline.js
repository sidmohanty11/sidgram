// TODO 1. we need to get the logged in user's photos
// TODO 2. onloading the photos, we need to use react skeleton
// TODO 3. if we have photos, render them (create a post component)
// TODO 4. if the user has no photos, tell them to create some
import React from "react";
import Skeleton from "react-loading-skeleton";
import usePhotos from "../hooks/use-photos";

const Timeline = () => {
  const { photos } = usePhotos();

  return <div className="container col-span-2"></div>;
};

export default Timeline;
